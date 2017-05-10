import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizNextButtonComponent } from './quiz-next-button.component';

describe('QuizNextButtonComponent', () => {
  let component: QuizNextButtonComponent;
  let fixture: ComponentFixture<QuizNextButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizNextButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizNextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
