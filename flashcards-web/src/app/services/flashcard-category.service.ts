import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";

import { FlashcardCategory } from "./../models/flashcard-category.model";
import { Config } from "../core/config";

const flashcardCategoriesUrl = Config.baseUrls.flashcardCategories;

@Injectable()
export class FlashcardCategoryService {
  constructor(private http: Http) { };

  getFlashcardCategories() {
    return <Observable<FlashcardCategory[]>>this.http
      .get(flashcardCategoriesUrl)
      .map((response: Response) => <FlashcardCategory[]>response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    const message = "Error status code ${error.status} at ${error.url}";
    return Observable.throw(message);
  }  
}