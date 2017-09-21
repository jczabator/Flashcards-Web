import { Component, Input, OnInit } from '@angular/core';
import { FlashcardCategory } from "../../../models/flashcard-category.model";

@Component({  
  selector: 'category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.css']
})
export class CategoryButtonComponent implements OnInit {  
  @Input() category: FlashcardCategory;
  constructor() { }

  ngOnInit() {
  }

}
