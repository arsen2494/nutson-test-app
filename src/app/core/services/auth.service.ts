import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from "rxjs";
import { LoginResponseDto } from "@dto";

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private _httpClient: HttpClient) {
  }

  login(): Observable<LoginResponseDto> {
    return this._httpClient.post<LoginResponseDto>('/v3/auth/session', environment.loginRequestBody);
  }
}
