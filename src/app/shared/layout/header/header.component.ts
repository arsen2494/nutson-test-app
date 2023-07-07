import { Component } from "@angular/core";
import { AuthStore } from "@store";
import { Observable } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoading$: Observable<boolean> = this._authStore.isLoading$;
  isLoggedIn$: Observable<boolean> = this._authStore.isLoggedIn$;

  constructor(private _authStore: AuthStore) {
  }

  handleLoginClick(): void {
    this._authStore.login();
  }

  handleLogoutClick(): void {
    this._authStore.logout();
  }
}
