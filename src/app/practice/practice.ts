import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, JsonPipe],
  selector: 'app-practice',
  styleUrl: './practice.css',
  templateUrl: './practice.html',
})
export class Practice {
  FirstName!: string;
  MiddleName!: string;
  LastName!: string;
  FatherName!: string;
  DOB!: string;
  Gender!: string;
  Category!: string;
}
