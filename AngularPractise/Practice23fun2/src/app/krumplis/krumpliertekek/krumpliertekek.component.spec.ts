import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrumpliertekekComponent } from './krumpliertekek.component';

describe('KrumpliertekekComponent', () => {
  let component: KrumpliertekekComponent;
  let fixture: ComponentFixture<KrumpliertekekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrumpliertekekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrumpliertekekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
