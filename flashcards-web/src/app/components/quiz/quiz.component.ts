import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { FlashcardService } from "../../services/flashcard.service";
import { QuizService } from "./service/quiz.service";

import { Flashcard } from "../../models/flashcard.model";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  private id: any;
  currentFlashcard: Flashcard = new Flashcard();
  textVisible: Boolean = false;
  isAllAnswered: Boolean = false;

  Learned: string = "Umiem";
  Next: string = "Następne";
  End: string = "Zakończ";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flashcardService: FlashcardService,
    private quizService: QuizService) { }

  ngOnInit() {
    this.route
      .params
      .map(params => params["id"])
      .do(id => this.id = +id)
      .subscribe(id => this.prepareQuiz());
  }

  private prepareQuiz() {
    if (this.id === 0) { return; }
    this.flashcardService.getFlashcards(this.id)
      .subscribe(flashcards => {
        this.quizService.flashcards = flashcards;
        this.getNextFlashcard();
      });
  }

  private getNextFlashcard() {
    this.textVisible = false;
    this.isAllAnswered = this.quizService.isAllAnswered();   
    if (!this.isAllAnswered) {
      this.currentFlashcard = this.quizService.getFlashcard();
    }
  }

  private toggleFlashcardText() {
    this.textVisible = !this.textVisible;
  }

  private toggleRandomFlashcards(){
    this.quizService.isRandomMode = !this.quizService.isRandomMode;
  }

  private flashcardLearned() {
    this.quizService.setFlashcardLearned();
    this.getNextFlashcard();
  }

  private goBackToDashboard() {
    let link = ['/dashboard'];
    this.router.navigate(link);
  }
}
