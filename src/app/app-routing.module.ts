import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterEmpComponent } from './register-emp/register-emp.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { ViewMedicinesComponent } from './view-medicines/view-medicines.component';

const routes: Routes = [
  { path: '', redirectTo: 'HomeComponent', pathMatch: 'full'},
  {path: 'add', component: RegisterEmpComponent,canActivate : [AuthGuard]},
  {path: 'viewEmployees', component : ViewEmployeesComponent},
  {path: 'update/:id', component : UpdateEmployeeComponent},
  {path: 'viewMedicines',component : ViewMedicinesComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register',component: SignupComponent},
  {path:'home',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
