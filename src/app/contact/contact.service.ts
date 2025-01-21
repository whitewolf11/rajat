import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root', // This makes the service available application-wide
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/contact'; // Your backend endpoint

  constructor(private http: HttpClient) {}

  sendContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }
}
