import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee-class/employee';
import { EmployeeService } from '../employee-service/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getemployees();
  }

  private getemployees() {
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee/', id]);
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure to delete ')) {
      this.employeeService
        .deleteEmployee(id)
        .subscribe(() => this.getemployees());
    }
  }
  viewEmployee(id: number) {
    this.router.navigate(['view-employee/', id]);
  }
}
