import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBoxComponent } from './layout-box.component';

describe('LayoutBoxComponent', () => {
  let component: LayoutBoxComponent;
  let fixture: ComponentFixture<LayoutBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
