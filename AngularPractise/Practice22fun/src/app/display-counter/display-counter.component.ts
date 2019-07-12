import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.css']
})
export class DisplayCounterComponent implements OnInit {
  counter = 0;
  constructor() { }

  ngOnInit() {
  }

}
