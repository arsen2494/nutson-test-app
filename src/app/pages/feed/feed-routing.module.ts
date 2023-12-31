import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { FeedComponent } from "./";

const routes: Routes = [
  { path: '', component: FeedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRoutingModule {
}
