import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspumososComponent } from './espumosos.component';

describe('EspumososComponent', () => {
  let component: EspumososComponent;
  let fixture: ComponentFixture<EspumososComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspumososComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspumososComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
