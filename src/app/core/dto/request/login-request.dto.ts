export interface LoginRequestDto {
  installation_token: string;
  device: {
    platform: string;
    platform_version: string;
  },
  application: {
    app_name: string;
    app_version: string;
    app_build: string;
    app_type: string;
  }
}
