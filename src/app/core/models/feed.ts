import { FeedAuthor } from "./feed-author";

export interface Feed {
  thumbnail_url: string;
  preview_url: string;
  created_at: number;
  media_id: string;
  media_url: string;
  media_description: string;
  counters: {
    comments: number;
    likes: number;
    views: number;
    reposts: number;
  },
  author: FeedAuthor;
}
