import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { CategoryButtonComponent } from "./category-button/category-button.component";
import { routedComponents, FlashcardCategoriesRoutingModule } from "./flashcard-categories-routing.module";

import { FlashcardCategoryService } from "../../services/flashcard-category.service"

@NgModule({
  imports: [
    CommonModule,
    FlashcardCategoriesRoutingModule,
    MaterialModule,
    FlexLayoutModule  
  ],
  declarations: [
    CategoryButtonComponent,
    routedComponents
  ],
  providers: [FlashcardCategoryService]
})
export class FlashcardCategoriesModule { }