import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardButtonComponent } from './flashcard-button.component';

describe('FlashcardButtonComponent', () => {
  let component: FlashcardButtonComponent;
  let fixture: ComponentFixture<FlashcardButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
