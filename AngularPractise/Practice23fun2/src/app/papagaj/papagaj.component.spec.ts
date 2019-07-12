import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapagajComponent } from './papagaj.component';

describe('PapagajComponent', () => {
  let component: PapagajComponent;
  let fixture: ComponentFixture<PapagajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapagajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapagajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
