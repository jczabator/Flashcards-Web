import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'quiz-next-button',
  templateUrl: './quiz-next-button.component.html',
  styleUrls: ["./../quiz.component.css", './quiz-next-button.component.css']
})
export class QuizNextButtonComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
