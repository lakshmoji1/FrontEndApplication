import { Injectable } from '@angular/core';
import {  CanActivate, Router} from '@angular/router';
import { EmployeeService } from './employee.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private empService : EmployeeService, private _router :Router) {}
  
  canActivate() : boolean {
    if(this.empService.loggedIn()) {
      return true;
    }
    else {
      this._router.navigate(['/login'])
      return false;
    }
  }
  
}
