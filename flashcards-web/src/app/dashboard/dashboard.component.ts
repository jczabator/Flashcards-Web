import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { FlashcardSet } from "../models/flashcard-set.model";
import { FlashcardSetService } from "../services/flashcard-set.service";

@Component({
  moduleId: module.id,
  selector: "flashcard-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  flashcardSets: FlashcardSet[]

  constructor(
    private route: ActivatedRoute,
    private flashcardSetService: FlashcardSetService,
    private router: Router) { }
          
  getFlashcardSets(){
    // console.log("Inside dashboard getFlashcardSets");
    // this.flashcardSets = this.flashcardSetService.getFlashcardSets();
    // console.log(this.flashcardSets);
    this.flashcardSetService.getFlashcardSets()
      .subscribe(flashcardSets => this.flashcardSets = flashcardSets)
  }


  ngOnInit() {
    this.getFlashcardSets();
  }
}
