import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable, switchMap } from "rxjs";
import { AuthService } from "@services";
import { LoginResponseDto } from "@dto";
import { Router } from "@angular/router";
import { ACCESS_TOKEN } from "@constants";

interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
}

const initialState = {
  isLoading: false,
  isLoggedIn: false
};

@Injectable({ providedIn: "root" })
export class AuthStore extends ComponentStore<AuthState> {
  readonly isLoading$: Observable<boolean> = this.select((state: AuthState) => state.isLoading);
  readonly isLoggedIn$: Observable<boolean> = this.select((state: AuthState) => state.isLoggedIn);

  constructor(private _authService: AuthService, private _router: Router) {
    super(initialState);
  }

  readonly login = this.effect(_ =>
    _.pipe(
      switchMap(() => {
        this._setIsLoading(true);

        return this._authService.login().pipe(
          tapResponse(
            (response: LoginResponseDto) => {
              this._setSession(response.data.access_token);
              this._setIsLoggedIn(true);
              this._router.navigateByUrl('/feed');
            },
            console.log, // TODO handleError
            () => this._setIsLoading(false)
          )
        );
      })
    )
  );

  logout(): void {
    this._setSession('');
    this._setIsLoggedIn(false);
    this._router.navigateByUrl('/');
  }

  init(): void {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (token) {
      this._setSession(token);
      this._setIsLoggedIn(true);
    } else {
      this._setSession('');
      this._setIsLoggedIn(false);
    }
  }

  private _setSession(token: string): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  private readonly _setIsLoading = this.updater((state: AuthState, isLoading: boolean) => ({
    ...state,
    isLoading
  }));

  private readonly _setIsLoggedIn = this.updater((state: AuthState, isLoggedIn: boolean) => ({
    ...state,
    isLoggedIn
  }));
}
