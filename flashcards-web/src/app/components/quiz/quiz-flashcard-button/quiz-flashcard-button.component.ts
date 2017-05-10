import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'quiz-flashcard-button',
  templateUrl: './quiz-flashcard-button.component.html',
  styleUrls: ['./quiz-flashcard-button.component.css']
})
export class QuizFlashcardButtonComponent implements OnInit {
  @Input() text: string;
  @Input() backgroundColor: string;
  
  constructor() { }

  ngOnInit() {   
   }
}
