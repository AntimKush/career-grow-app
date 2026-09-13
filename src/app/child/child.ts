import { HttpClient } from '@angular/common/http';
import { Component, input, output, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetail } from '../models/employeedetail';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  id!: number;
  employeeDetails = signal<EmployeeDetail | null>(null);
  constructor(private route: ActivatedRoute, private httpclient: HttpClient) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getEmployeeDetails(this.id);
  }
  getEmployeeDetails(empId: number): void {
    this.httpclient.get<EmployeeDetail>('http://localhost:5106/api/employees/' + empId)
      .subscribe(data => {
        this.employeeDetails.set(data);
        console.log(data);
      });
  }
}
