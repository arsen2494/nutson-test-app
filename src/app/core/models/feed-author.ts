export interface FeedAuthor {
  user_avatar_url: string;
  user_bio: string;
  user_id: string;
  user_name: string;
  counters: {
    followers: number;
    following: number;
    likes: number;
    videos: number;
  }
}
