import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Observable } from 'rxjs';
import { ICredentials, ITokens } from '@/lib/types/authType';
import { ApiResponse } from '@/lib/types/apiType';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  login = (credentials: ICredentials): Observable<ApiResponse<ITokens>> => {
    return this.postRequest<ICredentials, ApiResponse<ITokens>>(
      `auth/login`,
      credentials
    );
  };
}
