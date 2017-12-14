import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";

import { FlashcardCategory } from "./../../models/flashcard-category.model";
import { Config } from "./../../core/config";

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

const flashcardCategoriesUrl = Config.baseUrls.flashcardCategoriesFirebase;

@Injectable()
export class FlashcardCategoryFirebaseService{
  user: Observable<firebase.User>;
  flashcardCategories: FirebaseListObservable<FlashcardCategory[]>;
  flashcardCategory: FlashcardCategory;

  constructor(
    private http: Http,
    public firebaseAuth: AngularFireAuth,
    public firebaseDatabase: AngularFireDatabase) {
      this.user = this.firebaseAuth.authState
    }        
}