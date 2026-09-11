import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  imports: [Child],
  selector: 'app-parent-page',
  styleUrl: './parent-page.css',
  templateUrl: './parent-page.html',
})
export class ParentPage {
  employees: employee[] = [
    { id: 1, name: 'John', fatherName: 'Jane', dob: '1990-01-01' },
    { id: 2, name: 'Alice', fatherName: 'Bob', dob: '1992-05-15' },
    { id: 3, name: 'Charlie', fatherName: 'David', dob: '1988-12-10' },
    { id: 4, name: 'Eve', fatherName: 'Frank', dob: '1995-08-20' },
    { id: 5, name: 'Grace', fatherName: 'Henry', dob: '1993-03-25' },
    { id: 6, name: 'Ivy', fatherName: 'Jack', dob: '1991-11-30' },
    { id: 7, name: 'Kevin', fatherName: 'Liam', dob: '1989-07-12' },
    { id: 8, name: 'Maria', fatherName: 'Noah', dob: '1994-04-18' },
    { id: 9, name: 'Olivia', fatherName: 'Peter', dob: '1990-09-22' },
    { id: 10, name: 'Quinn', fatherName: 'Ryan', dob: '1992-02-14' },];

}
