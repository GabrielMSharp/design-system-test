import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OasysLibComponent } from './oasys-lib.component';

describe('OasysLibComponent', () => {
  let component: OasysLibComponent;
  let fixture: ComponentFixture<OasysLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OasysLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OasysLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
