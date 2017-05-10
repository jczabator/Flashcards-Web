import { Injectable } from "@angular/core";

import { Flashcard } from "../../../models/flashcard.model";

@Injectable()
export class QuizService {
  private randomNumber: number;
  private flashcard: Flashcard;
  private isLastFlashcard: boolean;

  public flashcards: Flashcard[];
  public isRandomMode: Boolean;
  public counter;

  constructor() {
    this.isRandomMode = false;
    this.counter = -1;
  }

  isAllAnswered() {
    let notAnsweredNumber = this.getNotAnsweredFlashcardsCount();
    if (notAnsweredNumber > 0) {
      return false;
    }

    return true;
  }

  getNotAnsweredFlashcardsCount() {
    let notAnsweredCounter = 0;
    this.flashcards.forEach(element => {
      if (element.isLearned === false) {
        notAnsweredCounter++;
      }
    });

    return notAnsweredCounter;
  }

  isLastFlashcardStanding() {
    let notAnsweredNumber = this.getNotAnsweredFlashcardsCount();
    if (notAnsweredNumber === 1) {
      return true;
    }

    return false;
  }

  setFlashcardLearned() {
    this.flashcards[this.counter].isLearned = true;
  }

  getFlashcard(): Flashcard {
    if (this.isRandomMode) {
      return this.getRandomFlashcard();
    }
    else {
      return this.getNextFlashcard();
    }
  }

  private getRandomFlashcard() {
    this.randomNumber = this.getRandomNumber();
    this.flashcard = this.flashcards[this.randomNumber];

    while (this.isDrawingRequired()) {
      this.randomNumber = this.getRandomNumber();
      this.flashcard = this.flashcards[this.randomNumber];
    }

    this.counter = this.randomNumber;
    console.log("Counter: " + this.counter);

    return this.flashcard;
  }

  private isDrawingRequired() {
    this.isLastFlashcard = this.isLastFlashcardStanding();
    console.log("Is Lastflashcard: " + this.isLastFlashcard);

    if(this.isLastFlashcard){
      return this.flashcard.isLearned;
    }

    return this.randomNumber === this.counter || this.flashcard.isLearned;
  }

  private getRandomNumber() {
    return Math.floor((Math.random() * this.flashcards.length));
  }

  private getNextFlashcard() {
    this.setCounter();
    let flashcard: Flashcard = this.flashcards[this.counter];

    while (flashcard.isLearned) {
      this.counter++;
      flashcard = this.flashcards[this.counter];
    }

    return flashcard;
  }

  private setCounter() {
    this.counter++;
    if (this.counter === this.flashcards.length) {
      this.counter = 0;
    }
  }
};