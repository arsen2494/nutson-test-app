export interface LoginResponseDto {
  data: {
    refresh_token: string;
    access_token: string;
    user_id: string;
  }
}
