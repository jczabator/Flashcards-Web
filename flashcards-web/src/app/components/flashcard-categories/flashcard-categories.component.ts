import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { FlashcardCategory } from "../../models/flashcard-category.model";
import { FlashcardCategoryService } from "../../services/flashcard-category.service";

@Component({
  selector: 'flashcard-categories',
  templateUrl: './flashcard-categories.component.html',
  styleUrls: ['./flashcard-categories.component.css']
})
export class FlashcardCategoriesComponent implements OnInit {

  categories: FlashcardCategory[];

  constructor(
    private route: ActivatedRoute,
    private service: FlashcardCategoryService,
    private router: Router) { }

  getFlashcardCategories(){
    this.service.getFlashcardCategories()
      .subscribe(categories => this.categories = categories);
  }

  ngOnInit() {
    this.getFlashcardCategories();
  }

  goToFlashcardSets(flashcardCategory: FlashcardCategory){
    let link = ['/flashcard-sets', flashcardCategory.id];    
    this.router.navigate(link);
  }
}
