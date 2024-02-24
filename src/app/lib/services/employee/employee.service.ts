import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends BaseService {
  getEmployees = (): Observable<any> => {
    return this.getRequest<any>(`employees`);
  };
}
