import { Feed } from "@models";

export interface FeedResponseDto {
  data: {
    media: Feed[],
    next_page_token: string;
    page_token: string;
    prev_page_token: string;
    recommendation_id: string;
  }
}
