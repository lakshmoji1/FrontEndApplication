import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  public id : any
  constructor(private employeeService : EmployeeService, private activatedRoute :ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getEmpById(this.id)
  }

  public employee : Employee = {} as Employee

  public onUpdateEmployee(addForm : NgForm) : void {
    this.employeeService.updateEmployee(addForm.value).subscribe(
      (response : Employee) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    addForm.reset();
    this.router.navigateByUrl("/index");
  }

  public getEmpById(id : number) : void {
    alert("Selected id "+id);
    this.employeeService.getEmployee(id).subscribe(
      (response : Employee) => {
        this.employee = response
        console.log(response);
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
