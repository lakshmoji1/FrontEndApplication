import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-medicines',
  templateUrl: './view-medicines.component.html',
  styleUrls: ['./view-medicines.component.css']
})
export class ViewMedicinesComponent implements OnInit {

  public showAddButton = localStorage.getItem("isLoggedIn") === "true" || false;
  public currentDate = new Date();
  
  constructor(private medicineService : MedicineService) {
    this.getMedicines();
   }
  public medicines : Medicine[] = []
  public medicine : Medicine = {} as Medicine
  public cartItems : Item[] = []
  public newItem : Item = {} as Item
  public isPresent : boolean = false

  ngOnInit(): void {

  }

  counter(i: number) {
    return new Array(i);
  }

  setTotal(event:any, name: string) {
    for(var i = 0; i< this.medicines.length; i++)
    {
      if(this.medicines[i].name == name)
        this.medicines[i].quantity = event.target.value
    }
    for(var i = 0; i < this.cartItems.length; i++ )
    {
      if(this.cartItems[i].name == name) { 
        this.cartItems[i].total = event.target.value * 10
      }
    }
  }

  onSelectQuantity(event:any) {
    alert(event.target.value);
}

  public getMedicines() : void {
    this.medicineService.getMedicines().subscribe(
      (response : Medicine[]) => {
        this.medicines = response;
        for(var i = 0; i< this.medicines.length; i++)
          this.medicines[i].quantity = 0
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public updateQuantity(name: string, quantity : number) {
    for(var i = 0; i < this.cartItems.length; i++ )
    {
      if(this.cartItems[i].name == name) { 
        this.cartItems[i].quantity = quantity 
      }
    }
  }
  public removeFromCart(name : string) {
    this.cartItems = this.cartItems.filter(item => item.name != name); 
  }

  public addQuantityInCart(name : string) {
    for(var i = 0; i < this.cartItems.length; i++ )
    {
      if(this.cartItems[i].name == name) { 
        this.cartItems[i].quantity += 1;
      }
    }
  }

  public removeQuantityInCart(name : string) {
    for(var i = 0; i < this.cartItems.length; i++ )
    {
      if(this.cartItems[i].name == name) {
        this.cartItems[i].quantity -= 1;
      }
    }
  }

  public decreaseInCart(medicine : Medicine) {
    medicine.quantity-=1;
    for(var i = 0; i < this.cartItems.length; i++ )
    {
      if(this.cartItems[i].name == medicine.name) {
        this.cartItems[i].quantity -= 1;
      }
    }
  }

  public viewMedicine(name : string){
    alert(name);
  }

  public addToCart(medicine : Medicine) {
    medicine.quantity+=1;
    this.isPresent = false;
    for(let item of this.cartItems)
    {
      if(item.name == medicine.name)
      {
        item.quantity +=1;
        item.total+=medicine.price;
        this.isPresent=true;
      }
    }
    if(this.isPresent == false)
    {
        this.newItem.name = medicine.name;
        this.newItem.quantity = 1;
        this.newItem.total = medicine.price;
        this.cartItems.push(this.newItem);
        this.newItem = {} as Item
    }
    
  }

}
