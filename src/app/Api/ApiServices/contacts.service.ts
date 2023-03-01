import { Injectable } from '@angular/core';
import { Constants } from '../Constant/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacts, note } from '../DataClasses/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private apiUrl = Constants.BASE_URL+'contacts'

  constructor(private http:HttpClient) { }

  getContacts(): Observable<Contacts>{
    return this.http.get<Contacts>(this.apiUrl)
  }
}
