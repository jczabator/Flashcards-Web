import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";

import { FlashcardSet } from "./../../models/flashcard-set.model";
import { Config } from "./../../core/config";

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth"; //TODO: continue
import * as firebase from "firebase/app";

const flashcardSetsUrl = Config.baseUrls.flashcardsFirebase;

@Injectable()
export class FlashcardSetFirebaseService {
  user: Observable<firebase.User>;
  flashcardSets: FirebaseListObservable<FlashcardSet[]>;
  flashcardSet: FlashcardSet;

  constructor(
    private http: Http,
    public firebaseAuth: AngularFireAuth,
    public firebaseDatabase: AngularFireDatabase) {
        this.user = this.firebaseAuth.authState;
  }
}
