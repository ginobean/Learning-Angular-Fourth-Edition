import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsArrayExampleComponent } from './forms-array-example.component';

describe('FormsArrayExampleComponent', () => {
  let component: FormsArrayExampleComponent;
  let fixture: ComponentFixture<FormsArrayExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsArrayExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsArrayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
