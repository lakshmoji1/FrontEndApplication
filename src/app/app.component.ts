import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees : Employee[] = [];
  public isLoggedIn = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor(public employeeService : EmployeeService, private router : Router) {
    this.isLoggedIn = localStorage.getItem("isAuthenticated") === "true" || false
    if(this.isLoggedIn)
      localStorage.setItem("isLoggedIn","true")
  }

  ngOnInit(): void {
      this.getEmployees();
  }

  public logout() {
    alert("logged out");
    localStorage.setItem("isLoggedIn","false");
    localStorage.setItem("token","false");
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
  });
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
}
