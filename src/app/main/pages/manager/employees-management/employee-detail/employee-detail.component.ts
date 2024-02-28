import { ButtonComponent } from '@/app/components/buttons/button/button.component';
import { ContainerComponent } from '@/app/main/layouts/container/container.component';
import { Component, OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EmployeeService } from '@/app/lib/services/employee/employee.service';
import { IEmployee } from '@/lib/types/employeeType';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [ContainerComponent, ButtonComponent],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss',
})
export class EmployeeDetailComponent implements OnInit {
  
  // employeeId: String;
  constructor(private router: Router,private route:ActivatedRoute ,private employeeService: EmployeeService) {}
  
  employe: IEmployee = {
    _id: 0,
    lastname: '',
    firstname: '',
    email: ''
  } 

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.employeeService.getEmployeeById(id).subscribe((employees) => {
        this.employe = employees
        console.log(this.employe)
    });
  }
  onGoBack = () => {
    console.log('Go back to list');
    this.router.navigate(['/manager/employees-management/employees-list']);
  };
}
