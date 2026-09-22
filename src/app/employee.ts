import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Employee } from './models/employee';

@Service()
export class EmployeeService {
 private readonly httpclient=inject(HttpClient);

 getEmployees()
 {
   return this.httpclient.get<Employee[]>('http://localhost:5106/api/employees/getall');
 }
}
