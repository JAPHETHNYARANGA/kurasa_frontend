import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../Api/ApiServices/contacts.service';
import { note } from '../Api/DataClasses/contacts';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  form!: FormGroup;
  contacts : note[] = []

  // noteData: any;

  constructor(private contactsService:ContactsService,private router:ActivatedRoute, private fb:FormBuilder, private navRoute:Router){}

  editContact = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email:new FormControl(''),
    phoneNumber: new FormControl('')
  })

  getSpecificContact(id:number){
    this.contactsService.getSpecificContact(id).subscribe((response=>{
      this.contacts = response.notes
      }))
}
  ngOnInit(): void {
    
    
    this.contactsService.getSpecificContact(this.router.snapshot.params['id']).subscribe((response:any)=>{
     
      
      this.editContact = new FormGroup({
        firstName: new FormControl(response.note['firstName']),
        lastName: new FormControl(response.note['lastName']),
        email:new FormControl(response.note['email']),
        phoneNumber: new FormControl(response.note['phoneNumber'])
      })
      
    })
    
  }
 
  updateContact(){
    
    this.contactsService.updateContact(this.router.snapshot.params['id'],this.editContact.value).subscribe((response)=>{
     
        if(response.success){
          console.log("success")
          this.navRoute.navigate(['']);
        }else{
          console.log("failed")
          alert('An error occurred while editing the data.');
        }
      
    })
  }

}
