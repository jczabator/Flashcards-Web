import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";

import { Flashcard } from "./../models/flashcard.model";
import { Config } from "./../core/config";

const flashcardsUrl = Config.baseUrls.flashcards;

@Injectable()
export class FlashcardService {
  constructor(private http: Http) { };

  getFlashcards(flashcardSetId: number) {  
    return <Observable<Flashcard[]>>this.http
      .get(flashcardsUrl)
      .map((response: Response) => <Flashcard[]>response.json().data
        .filter(flashcard => flashcard.flashcardSetId === flashcardSetId))
      .catch(this.handleError);
  }  

  private handleError(error: Response) {
    console.log(error);
    const message = "Error status code ${error.status} at ${error.url}";
    return Observable.throw(message);
  }  
}
