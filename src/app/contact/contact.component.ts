// contact.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact: Contact = new Contact();

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:8080/api/contacts', this.contact)
      .subscribe(response => {
        alert('Message sent successfully!');
        console.log(response);
      }, error => {
        alert('There was an error sending your message.');
        console.error(error);
      });
  }
}
