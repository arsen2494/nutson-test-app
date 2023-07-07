import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header";
import { MaterialModule } from "../material";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [MaterialModule, RouterModule, CommonModule],
  exports: [
    HeaderComponent,
  ],
  declarations: [HeaderComponent]
})
export class LayoutModule {
}
