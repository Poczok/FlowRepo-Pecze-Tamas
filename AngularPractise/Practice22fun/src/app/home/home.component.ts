import { Component, OnInit } from '@angular/core';
import { DataService } from ''

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counter = 0;
  constructor(private service: DataService) { }

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
  sent() {

  }
}
