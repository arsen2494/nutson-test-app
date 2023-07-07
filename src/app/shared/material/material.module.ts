import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from "@angular/material/card";

const MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatMenuModule,
  MatSnackBarModule,
  MatCardModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } }]
})
export class MaterialModule {
}
