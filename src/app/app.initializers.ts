import { APP_INITIALIZER } from "@angular/core";
import { AuthStore } from "@store";

const initializeAuthState = (authStore: AuthStore) => (): void => authStore.init();

export const APP_INITIALIZERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: initializeAuthState,
    deps: [AuthStore],
    multi: true,
  }
];
