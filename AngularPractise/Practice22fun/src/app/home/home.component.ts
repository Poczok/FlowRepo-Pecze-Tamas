import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counter = 0;
  constructor() { }

  ngOnInit() {
  }
  increase() {
    this.counter++;
  }
  reset() {
    this.counter = 0;
  }
  increaseByFive() {
    this.counter += 5;
  }
  decreaseByFive() {
    this.counter -= 5;
  }
}
