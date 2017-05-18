import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FlashcardCategoriesComponent } from "./flashcard-categories.component";

const routes: Routes = [
  {
    path: "",
    component: FlashcardCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlashcardCategoriesRoutingModule { }

export const routedComponents = [FlashcardCategoriesComponent];