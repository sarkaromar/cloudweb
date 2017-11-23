import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = 'Cloud Next Gen. Ltd.';
  lat: number = 23.746749;
  lng: number = 90.393047;

  constructor() { }

  ngOnInit() {
  }

}
