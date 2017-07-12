import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { Flashcard } from "../../models/flashcard.model";
import { FlashcardFirebaseService } from "../../services/flashcard-firebase.service";

@Component({
  selector: 'flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: FlashcardFirebaseService,
    private router: Router) { }

  ngOnInit() {
  }

}
