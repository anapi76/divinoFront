import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionVinoComponent } from './valoracion-vino.component';

describe('ValoracionVinoComponent', () => {
  let component: ValoracionVinoComponent;
  let fixture: ComponentFixture<ValoracionVinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoracionVinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValoracionVinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
