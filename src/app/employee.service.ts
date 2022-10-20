import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';
import { Offer } from './Offer';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public checkLogin(login : any) : Observable<Boolean>{
    alert(login.email+" "+login.password);
    const value = this.http.post<Boolean>(`${this.apiServerUrl}/dbcheck`,login)
    return value
  }

  public getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`)
  }

  public addEmployee(employee : Employee) : Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`,employee)
  }

  public updateEmployee(employee : Employee) : Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`,employee)
  }

  public deleteEmployee(employeeId : number) : Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`)
  }

  public getEmployee(employeeId : number) : Observable<Employee> {
    return this.http.get<Employee>(`${this.apiServerUrl}/employee/find/${employeeId}`)
  }

  public getAllOffers() : Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiServerUrl}/offer/all`)
  } 

  public addOffer(offer : Offer) : Observable<Offer> {
    alert(offer.description+" "+offer.imageUrl);
    return this.http.post<Offer>(`${this.apiServerUrl}/addOffer`,offer)
  }

  loggedIn()
  {
    return localStorage.getItem('token') === "true";
  }
  
}
