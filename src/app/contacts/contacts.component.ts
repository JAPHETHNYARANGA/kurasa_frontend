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

  constructor(private contactsService: ContactsService){}
ngOnInit(): void {
  this.contactsService.getContacts().subscribe(response =>{
    this.contacts = response.notes
  })
}
}
