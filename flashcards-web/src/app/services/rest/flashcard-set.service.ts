import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";

import { FlashcardSet } from "./../../models/flashcard-set.model";
import { Config } from "../../core/config";

const flashcardSetsUrl = Config.baseUrls.flashcardSets;

@Injectable()
export class FlashcardSetService {
  constructor(private http: Http) { };

  getFlashcardSets() {    
    return <Observable<FlashcardSet[]>>this.http
      .get(flashcardSetsUrl)
      .map((response: Response) => <FlashcardSet[]>response.json().data)
      .catch(this.handleError);
  }

  getByFlashcardCategory(flashcardCategoryId: number){
    return <Observable<FlashcardSet[]>>this.http
      .get(flashcardSetsUrl)
      .map((response: Response) => <FlashcardSet[]>response.json().data
        .filter(flashcardSet => flashcardSet.flashcardCategoryId === flashcardCategoryId))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    const message = "Error status code ${error.status} at ${error.url}";
    return Observable.throw(message);
  }  
}