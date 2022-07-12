import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OasysButtonComponent } from './button.component';

describe('OasysButtonComponent', () => {
  let component: OasysButtonComponent;
  let fixture: ComponentFixture<OasysButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OasysButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OasysButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
