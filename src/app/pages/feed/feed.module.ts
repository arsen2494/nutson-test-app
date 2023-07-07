import { NgModule } from "@angular/core";
import { FeedRoutingModule } from "./feed-routing.module";
import { FeedComponent } from "./";
import { FeedStore } from "./feed.store";
import { FeedService } from "./feed.service";
import { MaterialModule } from "../../shared/material";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { FeedListItemComponent } from "./components/feed-list-item";

@NgModule({
  imports: [FeedRoutingModule, MaterialModule, CommonModule, NgOptimizedImage],
  declarations: [FeedComponent, FeedListItemComponent],
  providers: [FeedStore, FeedService]
})
export class FeedModule {
}
