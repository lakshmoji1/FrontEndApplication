import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private employeeService : EmployeeService, private router : Router) {}
  
  ngOnInit(): void {
    
  }

  public onLogin(loginForm : NgForm) : void {
    this.employeeService.checkLogin(loginForm.value).subscribe(
      (response : Boolean) => {
        if(response)
        {
          localStorage.setItem("isAuthenticated","true");
          localStorage.setItem("token","true");
          this.router.navigateByUrl("/home");
        }else
        {
          alert("Invalid credentials");
          localStorage.setItem("token","false");
          localStorage.setItem("isAuthenticated","false");
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


}

