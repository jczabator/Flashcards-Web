import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";

import { Flashcard } from "./../models/flashcard.model";
import { Config } from "./../core/config";

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

const flashcardsUrl = Config.baseUrls.flashcardsFirebase;

@Injectable()
export class FlashcardFirebaseService {
  user: Observable<firebase.User>;
  flashcards: FirebaseListObservable<Flashcard[]>;
  flashcard: Flashcard;

  constructor(
    private http: Http,
    public firebaseAuth: AngularFireAuth,
    public firebaseDatabase: AngularFireDatabase) {      
      this.user = this.firebaseAuth.authState;
  };

  login() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

  add(flashcard: Flashcard) {
    this.flashcards.push(flashcard)
  }
 
  get() {
    this.flashcards = this.firebaseDatabase.list(flashcardsUrl);
    return this.flashcards;
  }
}

