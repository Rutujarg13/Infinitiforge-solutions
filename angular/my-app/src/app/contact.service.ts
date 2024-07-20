import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseURL="http://localhost:8080/api/v1/contact";
  constructor(private httpClient: HttpClient) { }

  
createContact(contact: Contact): Observable<object>{
  return this.httpClient.post(`${this.baseURL}`, contact);
}

}
