import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-krumpliertekek',
  templateUrl: './krumpliertekek.component.html',
  styleUrls: ['./krumpliertekek.component.css']
})
export class KrumpliertekekComponent implements OnInit {
  @Input()
  kurmpli: number;
  constructor() { }

  ngOnInit() {
  }

}
