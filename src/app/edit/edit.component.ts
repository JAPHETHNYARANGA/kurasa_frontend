import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../Api/ApiServices/contacts.service';
import { note } from '../Api/DataClasses/contacts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  contacts : note[]=[]

  constructor(private contactsService:ContactsService,private router:ActivatedRoute){}


  getSpecificContact(id:number){
    this.contactsService.getSpecificContact(id).subscribe((response=>{
      this.contacts = response.notes
      }))
}
  ngOnInit(): void {
    this.contactsService.getSpecificContact(this.router.snapshot.params['id']).subscribe((response=>{
      console.log(response)
      this.contacts = response.notes
    }))
  }
 

}
