import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { Flashcard } from "../../models/flashcard.model";
import { FlashcardFirebaseService } from "../../services/flashcard-firebase.service";
import { FirebaseLoginService } from "../../services/firebase-login.service";
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  flashcards: Flashcard[];

  constructor(
    private route: ActivatedRoute,
    private flashcardFirebaseService: FlashcardFirebaseService,
    private firebaseLoginService: FirebaseLoginService,
    private router: Router) { }

  ngOnInit() {
    this.firebaseLoginService.login();
    this.flashcardFirebaseService.get()
      .subscribe(flashcards => this.flashcards = flashcards)    
  }

  getFlashcards(){  
    this.flashcardFirebaseService.get();           
  }
}
