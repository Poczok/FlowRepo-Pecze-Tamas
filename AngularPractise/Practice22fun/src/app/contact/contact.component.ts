import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  receivedData: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.receivedData = this.data.getMockedData();
  }

}
