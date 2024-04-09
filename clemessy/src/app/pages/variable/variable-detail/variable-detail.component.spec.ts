import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableDetailComponent } from './variable-detail.component';

describe('VariableDetailComponent', () => {
  let component: VariableDetailComponent;
  let fixture: ComponentFixture<VariableDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VariableDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VariableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
