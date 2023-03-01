import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  showForm = false;
  toggleForm() {
    this.showForm = !this.showForm;
  }

}
