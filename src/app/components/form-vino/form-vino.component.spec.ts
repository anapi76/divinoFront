import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVinoComponent } from './form-vino.component';

describe('FormVinoComponent', () => {
  let component: FormVinoComponent;
  let fixture: ComponentFixture<FormVinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormVinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormVinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
