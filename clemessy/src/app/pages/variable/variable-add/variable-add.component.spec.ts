import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableAddComponent } from './variable-add.component';

describe('VariableAddComponent', () => {
  let component: VariableAddComponent;
  let fixture: ComponentFixture<VariableAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VariableAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VariableAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
