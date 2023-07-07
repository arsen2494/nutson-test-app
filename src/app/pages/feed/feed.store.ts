import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable, switchMap } from "rxjs";
import { FeedService } from "./feed.service";
import { Feed } from "@models";
import { FeedResponseDto } from "@dto";

interface FeedState {
  isLoading: boolean;
  feed: Feed[];
}

const initialState: FeedState = {
  isLoading: false,
  feed: [],
};

@Injectable()
export class FeedStore extends ComponentStore<FeedState> {
  readonly isLoading$: Observable<boolean> = this.select((state: FeedState) => state.isLoading);
  readonly feed$: Observable<Feed[]> = this.select((state: FeedState) => state.feed);

  constructor(private _feedService: FeedService) {
    super(initialState);
  }

  readonly getRecommendedFeed = this.effect(_ =>
    _.pipe(
      switchMap(() => {
        this._setIsLoading(true);

        return this._feedService.getRecommended().pipe(
          tapResponse(
            (response: FeedResponseDto) => this._setFeed(response.data.media),
            console.log, // TODO handleError
            () => this._setIsLoading(false)
          )
        );
      })
    )
  );

  private readonly _setFeed = this.updater((state: FeedState, feed: Feed[]) => ({
    ...state,
    feed
  }));

  private readonly _setIsLoading = this.updater((state: FeedState, isLoading: boolean) => ({
    ...state,
    isLoading
  }));
}
