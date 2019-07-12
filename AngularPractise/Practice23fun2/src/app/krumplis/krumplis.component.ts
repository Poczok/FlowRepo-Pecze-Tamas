import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-krumplis',
  templateUrl: './krumplis.component.html',
  styleUrls: ['./krumplis.component.css']
})
export class KrumplisComponent implements OnInit {
  krumpliszamlalo = 0;
  megjelenit = false;
  szoveg = 'MUTASD A KRUMPLI ERTEKEKET!';
  constructor() { }

  ngOnInit() {
  }

  krumplinovelo() {
    this.krumpliszamlalo++;
  }
  krumplicsokkento() {
    this.krumpliszamlalo--;
  }
  krumpliRESET() {
    this.krumpliszamlalo = 0;
  }
  mutatas() {
    if (this.megjelenit) {
      this.megjelenit = false;
      this.szoveg = 'MUTASD A KRUMPLI ERTEKEKET!';
    } else {
      this.megjelenit = true;
      this.szoveg = 'REJTSD EL A KRUMPLI ERTEKEKET!';
    }
  }
}
