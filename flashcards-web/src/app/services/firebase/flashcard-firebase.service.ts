import { Injectable } from "@angular/core";
import { Observable } from "rxjs/observable";

import { Flashcard } from "./../../models/flashcard.model";
import { Config } from "./../../core/config";

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

const flashcardsUrl = Config.baseUrls.flashcardsFirebase;

@Injectable()
export class FlashcardFirebaseService {  
  flashcards: FirebaseListObservable<Flashcard[]>;
  flashcard: Flashcard;

  constructor(
    public firebaseDatabase: AngularFireDatabase) {};

  add(flashcard: Flashcard) {
    this.flashcards.push(flashcard)
  }
 
  get() {
    this.flashcards = this.firebaseDatabase.list(flashcardsUrl);
    return this.flashcards;
  }

  getByFlashcardSet(flashcardSetId: number){
    this.flashcards = this.firebaseDatabase.list(flashcardsUrl, {
        query: {
          equalTo: {
            key: "flashcardSetId",
            value: flashcardSetId
          }
      }
    });

    return this.flashcards;
  }
}