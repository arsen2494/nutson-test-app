import { Injectable } from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode
} from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthStore } from "@store";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _router: Router, private _matSnackbar: MatSnackBar, private _authStore: AuthStore) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        const { error, status } = err;

        switch (status) {
          case HttpStatusCode.Unauthorized:
            this._matSnackbar.open(error.errors[0].error_message, 'OK');
            this._authStore.logout();
            break;
          case HttpStatusCode.NotFound:
            this._router.navigateByUrl('/404');
            break;
          default:
            this._matSnackbar.open('Something went wrong', 'OK');
            break;
        }

        return of();
      })
    );
  }
}
