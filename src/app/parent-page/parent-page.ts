import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Employee } from '../models/employee';

@Component({
  imports: [RouterLink],
  selector: 'app-parent-page',
  styleUrl: './parent-page.css',
  templateUrl: './parent-page.html',
})
export class ParentPage implements OnInit {
  employees = signal<Employee[]>([]);


  loading = false;
  errorMessage = '';
   
  constructor(private httpclient: HttpClient) {}

  ngOnInit(): void {
  }

  getEmployees(): void {
    this.loading = true;
    this.errorMessage = '';
    this.httpclient.get<Employee[]>('http://localhost:5106/api/employees/getall')
      .subscribe({
        next: data => {
          this.employees.set(data);
          this.loading = false; // Add this 
        },
        error: () => {
          this.errorMessage = 'Unable to load employees.';
          this.loading = false; // Add this
        }
      });
  }
}
