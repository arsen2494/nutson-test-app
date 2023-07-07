import { Component } from "@angular/core";
import { AuthStore } from "@store";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoggedIn$ = this._authStore.isLoggedIn$;

  constructor(private _authStore: AuthStore) {
  }
}
