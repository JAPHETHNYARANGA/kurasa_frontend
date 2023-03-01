import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../Api/ApiServices/contacts.service';
import { Contacts, note } from '../Api/DataClasses/contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{
  contacts : note[]=[]

  loadContacts(){
    this.contactsService.getContacts().subscribe(response =>{
      this.contacts = response.notes
    })
  }

  constructor(private contactsService: ContactsService){}
ngOnInit(): void {
  this.loadContacts()
}

deleteContact(id:number){
  this.contactsService.deleteContact(id).subscribe(()=>{
    this.loadContacts()
  })
}

}
