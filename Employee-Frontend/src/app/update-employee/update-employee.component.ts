import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee-class/employee';
import { EmployeeService } from '../employee-service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  id: number;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
    });
  }
  onSubmit() {
    this.employeeService
      .updateEmployee(this.id, this.employee)
      .subscribe(() => this.router.navigate(['/employees']));
  }
}
