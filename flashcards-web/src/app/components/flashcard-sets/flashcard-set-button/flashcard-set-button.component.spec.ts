import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardSetButtonComponent } from './flashcard-set-button.component';

describe('FlashcardSetButtonComponent', () => {
  let component: FlashcardSetButtonComponent;
  let fixture: ComponentFixture<FlashcardSetButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardSetButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardSetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
