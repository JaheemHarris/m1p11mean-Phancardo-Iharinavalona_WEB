import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';
import { Injectable } from '@angular/core';
import { IEmployee, IEmployeePayload } from '@/lib/types/employeeType';
import { ApiResponse } from '@/lib/types/apiType';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends BaseService {
  getActivatedEmployees = (): Observable<ApiResponse<IEmployee[]>> => {
    return this.getRequest<ApiResponse<IEmployee[]>>(`employees/activated`);
  };

  getEmployeeById(employeeID: string): Observable<ApiResponse<IEmployee>> {
    return this.getRequest<ApiResponse<IEmployee>>(`employees/${employeeID}`);
  }

  saveEmployee(payload: IEmployeePayload): Observable<ApiResponse<IEmployee>> {
    return this.postRequest<IEmployeePayload, ApiResponse<IEmployee>>(
      'employees',
      payload
    );
  }

  editEmployee(employee: any): Observable<any> {
    return this.editRequest<any>('employees', employee);
  }

  editPatchEmployee(employee: any): Observable<any> {
    return this.editPatchRequest<any>('employees', employee);
  }

  deleteEmployee(employeeID: string): Observable<ApiResponse<IEmployee>> {
    return this.deleteRequest<ApiResponse<IEmployee>>(
      `employees/${employeeID}`
    );
  }
}
