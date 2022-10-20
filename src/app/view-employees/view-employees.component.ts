import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  public employees : Employee[] = [];
  public employee : Employee = {} as Employee
  public searchresult = ""

  constructor(private employeeService : EmployeeService) {
    this.getEmployees();
  }

  ngOnInit(): void {
      this.getEmployees();
  }

  public getEmployees() : void {
    this.employeeService.getEmployees().subscribe(
      (response : Employee[]) => {
        this.employees = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

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

  public deleteEmployee(emp : Employee) : void {
    this.employeeService.deleteEmployee(emp.id).subscribe(
      (response : void ) => {
        console.log(response);
        this.getEmployees();
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  
  public searchEmployee(key : string) : void {
    const results : Employee[] = [];

    for(const emp of this.employees)
    {
      if(emp.name.toLocaleLowerCase().startsWith(key.toLocaleLowerCase()))
      {
        results.push(emp);
      }
    }
    this.employees = results;
    if(results.length === 0 || !key) {
      this.getEmployees();
    }
  }

}
