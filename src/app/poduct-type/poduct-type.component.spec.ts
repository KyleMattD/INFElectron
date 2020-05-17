import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductTypeComponent } from './poduct-type.component';

describe('PoductTypeComponent', () => {
  let component: PoductTypeComponent;
  let fixture: ComponentFixture<PoductTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoductTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
