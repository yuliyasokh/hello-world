import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

}
