import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getMedicines() : Observable<Medicine[]> {
    return this.http.get<Medicine[]>(`${this.apiServerUrl}/medicines/all`)
  }

  public addMedicine(medicine : Medicine) : Observable<Medicine> {
    return this.http.post<Medicine>(`${this.apiServerUrl}/medicine/add`,medicine)
  }

  public updateEmployee(medicine : Medicine) : Observable<Medicine> {
    return this.http.put<Medicine>(`${this.apiServerUrl}/medicine/update`,medicine)
  }

  public deleteEmployee(medicineId : number) : Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/medicine/delete/${medicineId}`)
  }

  public getEmployee(medicineId : number) : Observable<Medicine> {
    return this.http.get<Medicine>(`${this.apiServerUrl}/medicine/find/${medicineId}`)
  }

}
