import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinosComponent } from './vinos.component';

describe('VinosComponent', () => {
  let component: VinosComponent;
  let fixture: ComponentFixture<VinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
