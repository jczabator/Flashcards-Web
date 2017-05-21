import { Component, Input, OnInit } from '@angular/core';
import { FlashcardSet } from '../../../models/flashcard-set.model';

@Component({
  selector: 'flashcard-set-button',
  templateUrl: './flashcard-set-button.component.html',
  styleUrls: ['./flashcard-set-button.component.css']
})
export class FlashcardSetButtonComponent implements OnInit {
  @Input() flashcardSet: FlashcardSet;
  constructor() { }

  ngOnInit() {
  }

}
