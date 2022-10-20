import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegisterEmpComponent } from './register-emp/register-emp.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewMedicinesComponent } from './view-medicines/view-medicines.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { EmployeeService } from './employee.service';
import {NgxPrintModule} from 'ngx-print';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { HomeComponent } from './home/home.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    RegisterEmpComponent,
    ViewEmployeesComponent,
    UpdateEmployeeComponent,
    ViewMedicinesComponent,
    SignupComponent,
    LoginComponent,
    ImageSliderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule,
    NgbModule,
    NgxPrintModule
  ],
  providers: [AuthGuard,EmployeeService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
