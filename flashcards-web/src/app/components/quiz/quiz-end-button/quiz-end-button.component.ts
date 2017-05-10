import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'quiz-end-button',
  templateUrl: './quiz-end-button.component.html',
  styleUrls: ["./../quiz.component.css"]
})
export class QuizEndButtonComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
