import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVinoComponent } from './card-vino.component';

describe('CardVinoComponent', () => {
  let component: CardVinoComponent;
  let fixture: ComponentFixture<CardVinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardVinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardVinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
