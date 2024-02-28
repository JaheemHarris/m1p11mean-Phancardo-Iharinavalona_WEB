import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Observable } from 'rxjs';
import { ICredentials, IRegisterPayload, ITokens } from '@/lib/types/authType';
import { ApiResponse } from '@/lib/types/apiType';
import { IUserType } from '@/lib/types/userType';

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

  register = (
    payload: IRegisterPayload
  ): Observable<ApiResponse<IUserType>> => {
    return this.postRequest<IRegisterPayload, ApiResponse<IUserType>>(
      `auth/register`,
      payload
    );
  };
}
