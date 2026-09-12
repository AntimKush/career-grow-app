import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-update-employees',
  styleUrl: './update-employees.css',
  templateUrl: './update-employees.html',
})
export class UpdateEmployees {
  id!: number;
  employeeDetails=signal<Employee_detail_for_update>({} as Employee_detail_for_update);
  constructor(private route: ActivatedRoute, private httpclient: HttpClient) {
    this.id =this.route.snapshot.params['id'];
    this.getEmployeeForUpdate(this.id);
  }
  getEmployeeForUpdate(id:number)
  {
    this.httpclient.get<Employee_detail_for_update>('http://localhost:5106/api/employees/getforupdate/' + id)
    .subscribe(data => {
      this.employeeDetails.set (data);
    });
  }
  updateEmployee(){
     console.log("ok");
  }
}
