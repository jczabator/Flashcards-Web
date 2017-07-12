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
  items: FirebaseListObservable<any[]>;
  flashcard: Flashcard;

  constructor(
    private http: Http,
    public firebaseAuth: AngularFireAuth,
    public firebaseDatabase: AngularFireDatabase) {
      this.items = this.firebaseDatabase.list(flashcardsUrl);
      this.user = this.firebaseAuth.authState;
  };

  login() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

  add(flashcard: Flashcard) {
    this.items.push(flashcard)
  }

  get() {
    return this.items;
  }
}

