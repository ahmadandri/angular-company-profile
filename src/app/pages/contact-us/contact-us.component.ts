import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  lat = -7.754584;
  lng = 110.395694;
  constructor() { }

  ngOnInit() {
  }

}
