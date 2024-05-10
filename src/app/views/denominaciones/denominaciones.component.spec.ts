import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenominacionesComponent } from './denominaciones.component';

describe('DenominacionesComponent', () => {
  let component: DenominacionesComponent;
  let fixture: ComponentFixture<DenominacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DenominacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DenominacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
