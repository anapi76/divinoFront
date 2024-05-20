import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVinoComponent } from './modal-vino.component';

describe('ModalVinoComponent', () => {
  let component: ModalVinoComponent;
  let fixture: ComponentFixture<ModalVinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalVinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalVinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
