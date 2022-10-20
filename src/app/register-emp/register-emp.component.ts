import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-register-emp',
  templateUrl: './register-emp.component.html',
  styleUrls: ['./register-emp.component.css']
})
export class RegisterEmpComponent implements OnInit {

  constructor(private employeeService : EmployeeService, private router : Router) {}
  
  ngOnInit(): void {
  }

  public onAddEmployee(addForm : NgForm) : void {
    document.getElementById("add-employee-form")?.click();
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response : Employee) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    addForm.reset();
    this.router.navigateByUrl("index");
  }


}
