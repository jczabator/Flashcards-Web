import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFlashcardButtonComponent } from './quiz-flashcard-button.component';

describe('QuizFlashcardButtonComponent', () => {
  let component: QuizFlashcardButtonComponent;
  let fixture: ComponentFixture<QuizFlashcardButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizFlashcardButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFlashcardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
