import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {
  }
  getEmployees() {
    return [
      {id: 1, name: 'Iuliia', age: 25},
      {id: 2, name: 'Kot', age: 5},
      {id: 3, name: 'Pies', age: 2},
      {id: 4, name: 'Kolka', age: 3}
    ];
  }
}
