import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrumplisComponent } from './krumplis.component';

describe('KrumplisComponent', () => {
  let component: KrumplisComponent;
  let fixture: ComponentFixture<KrumplisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrumplisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrumplisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
