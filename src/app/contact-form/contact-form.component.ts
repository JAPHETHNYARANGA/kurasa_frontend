import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../Api/ApiServices/contacts.service';
import { CreateContact } from '../Api/DataClasses/create-contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  firstName:string='';
  lastName:string='';
  email:string='';
  phoneNumber:number=0;

  constructor(private createContactsService:ContactsService){}

 
  CreateNewContact(){
    console.log("clicked")
    this.createContactsService.createContact(this.firstName, this.lastName, this.email, this.phoneNumber)
    .subscribe((response:CreateContact)=>{
      if(response.success){
        console.log("success")
      }else{
        console.log("failed")
      }
      
    })
  }

}
