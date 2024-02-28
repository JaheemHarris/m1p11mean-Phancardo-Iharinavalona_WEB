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

  getEmployeeById(idEmploye: any): Observable<any> {
    return this.getByIdRequest<any>('employees/'+idEmploye);
  }
  addEmployee(nouveauEmployee: any): Observable<any> {
    return this.postRequest<any>('employees', nouveauEmployee);
  }

  editEmployee(employee: any): Observable<any> {
    return this.editRequest<any>('employees', employee);
  }

  editPatchEmployee(employee: any): Observable<any> {
    return this.editPatchRequest<any>('employees', employee);
  }

  deleteEmployee(idEmploye: any): Observable<any> {
    return this.deleteRequest<any>('employees/'+idEmploye);
  }
}
