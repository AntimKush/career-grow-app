import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './apply.html',
  styleUrls: ['./apply.css']
})
export class Apply implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  applyForm!: FormGroup;
  jobTitle: string = 'Software Engineer'; // Default job title

  ngOnInit(): void {
    // Read the query parameter passed from the careers list
    this.route.queryParams.subscribe(params => {
      if (params['job']) {
        // Format string from "software-engineer" to "SOFTWARE ENGINEER"
        this.jobTitle = params['job'].replace(/-/g, ' ').toUpperCase();
      }
    });

    // Initialize the Reactive Form with validators
    this.applyForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9+\\-\\s()]*$')]],
      experienceYears: ['', [Validators.required, Validators.min(0)]],
      coverLetter: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  onSubmit(): void {
    if (this.applyForm.valid) {
      const submissionData = {
        position: this.jobTitle,
        ...this.applyForm.value
      };
      
      console.log('Submitted Application Payload:', submissionData);
      alert('Application submitted successfully!');
      this.router.navigate(['/career']);
    } else {
      // Mark all fields as touched to trigger validation messages
      this.applyForm.markAllAsTouched();
    }
  }
}