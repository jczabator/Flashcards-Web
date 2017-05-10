import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'quiz-button',
  templateUrl: './quiz-button.component.html',
  styleUrls: ["./../quiz.component.css"]
})
export class QuizButtonComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
