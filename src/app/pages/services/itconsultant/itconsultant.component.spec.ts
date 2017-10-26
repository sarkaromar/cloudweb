import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItconsultantComponent } from './itconsultant.component';

describe('ItconsultantComponent', () => {
  let component: ItconsultantComponent;
  let fixture: ComponentFixture<ItconsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItconsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
