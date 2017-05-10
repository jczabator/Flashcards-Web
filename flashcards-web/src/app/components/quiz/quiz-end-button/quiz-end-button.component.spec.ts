import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizEndButtonComponent } from './quiz-end-button.component';

describe('QuizEndButtonComponent', () => {
  let component: QuizEndButtonComponent;
  let fixture: ComponentFixture<QuizEndButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizEndButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizEndButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
