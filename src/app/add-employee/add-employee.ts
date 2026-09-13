import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-add-employee',
  styleUrl: './add-employee.css',
  templateUrl: './add-employee.html',
})
export class AddEmployee {
  fb = inject(FormBuilder);
  httpClient = inject(HttpClient);
  message=signal<string>('');
  employeeForm = this.fb.group({
    name: ['', Validators.required],
    fatherName: ['', Validators.required],
    dob: ['', Validators.required]
  });

  addEmployee(): void {
    console.log(this.employeeForm.value);
    this.httpClient.post<any>("http://localhost:5106/api/Employees/Add_Employee", this.employeeForm.value)
      .subscribe((data) => {
        this.message.set(data.message);
        console.log(data);
      });
  }
}
