import { Injectable } from '@angular/core';
import { Constants } from '../Constant/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacts, note } from '../DataClasses/contacts';
import { CreateContact } from '../DataClasses/create-contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private getContactApiUrl = Constants.BASE_URL+'contacts'
  private createContactApiUrl = Constants.BASE_URL+'addContact'
  // private getSpecificContactApiUrl = Constants.BASE_URL+`contacts/${id}`

  constructor(private http:HttpClient) { }

  getContacts(): Observable<Contacts>{
    return this.http.get<Contacts>(this.getContactApiUrl)
  }

  createContact(firstName:string, lastName:string,email:string, phoneNumber:number): Observable<CreateContact>{
    const body = {firstName:firstName, lastName:lastName, email:email, phoneNumber:phoneNumber}
    return this.http.post<CreateContact>(this.createContactApiUrl,body)
  }

  deleteContact(id:number):Observable<any>{
    const url =`${Constants.BASE_URL}deleteContact/${id}`; 
    return this.http.get(url)
  }

  getSpecificContact(id:number):Observable<Contacts>{
    return this.http.get<Contacts>(`http://127.0.0.1:8000/api/contacts/${id}`)

  }

  updateContact(){

  }
}
