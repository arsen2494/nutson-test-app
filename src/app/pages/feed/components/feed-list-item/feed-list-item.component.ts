import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Feed } from "@models";

@Component({
  selector: 'app-feed-list-item',
  templateUrl: './feed-list-item.component.html',
  styleUrls: ['./feed-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedListItemComponent {
  @Input() feed!: Feed;

  handleVideoClick(videoEl: HTMLVideoElement): void {
    videoEl.play();
  }
}
