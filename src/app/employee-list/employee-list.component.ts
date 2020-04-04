import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees = [
    {id: 1, name: 'Iuliia', age: 25}
  ];
  constructor() { }

  ngOnInit(): void {}
}
