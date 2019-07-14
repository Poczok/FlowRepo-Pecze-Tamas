import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  country = 'Magyarország';
  city = '6723 Szeged';
  address = 'Szilléri sor 1/30';
  telephone = '06702396174';

getMockedData() {
  return [this.country, this.city, this.address, this.telephone];
}
}
