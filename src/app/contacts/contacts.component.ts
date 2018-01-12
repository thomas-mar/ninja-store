import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Phillip', 'Sarah', 'Finn', 'Joe'];
   }

  ngOnInit() {
  }

}
