import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { FeedResponseDto } from "@dto";

@Injectable()
export class FeedService {
  constructor(private _httpClient: HttpClient) {
  }

  getRecommended(): Observable<FeedResponseDto> {
    return this._httpClient.get<FeedResponseDto>('/v2/media/feed/recommended');
  }
}
