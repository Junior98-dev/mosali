import { Injectable } from '@angular/core';
import { employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees : employee[] = [];

  addEmployee = (employee: employee) =>{this.employees.push(employee);}
  getEmployees = () => this.employees;
  getEmployee = (index: number) => this.employees[index]; // find the employee by index
  editEmployee = (i: number, employee: employee) => {this.employees[i] = employee;}
  deleteEmployee = (i: number) => {this.employees.splice(i, 1);} // delete the employee by index
  
}
