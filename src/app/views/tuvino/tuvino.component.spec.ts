import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuvinoComponent } from './tuvino.component';

describe('TuvinoComponent', () => {
  let component: TuvinoComponent;
  let fixture: ComponentFixture<TuvinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuvinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TuvinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
