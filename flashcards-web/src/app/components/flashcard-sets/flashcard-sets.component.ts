import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { FlashcardSetService } from "../../services/flashcard-set.service";
import { FlashcardSet } from "../../models/flashcard-set.model";


@Component({
  selector: 'app-flashcard-sets',
  templateUrl: './flashcard-sets.component.html',
  styleUrls: ['./flashcard-sets.component.css']
})
export class FlashcardSetsComponent implements OnInit {

  private categoryId: any;
  private flashcardSets: FlashcardSet[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flashcardSetService: FlashcardSetService) { }

  ngOnInit() {
    this.route
      .params
      .map(params => params["id"])
      .do(id => this.categoryId = +id)
      .subscribe(id => this.prepareView());
  }

  prepareView() {
    if (this.categoryId === 0) {
      //TODO: provide get all flashcardSets
       return; 
      }    
    this.flashcardSetService.getByFlashcardCategory(this.categoryId)
      .subscribe(flashcardSets => this.flashcardSets = flashcardSets);      
  }

   goToQuiz(flashcardSet: FlashcardSet){
    let link = ['/quiz', flashcardSet.id];
    this.router.navigate(link);
  }
}
