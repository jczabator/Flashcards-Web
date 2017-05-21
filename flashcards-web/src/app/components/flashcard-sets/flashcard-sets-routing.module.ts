import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FlashcardSetsComponent } from "./flashcard-sets.component";

const routes: Routes = [
  {
    path: ":id",
    component: FlashcardSetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlashcardSetsRoutingModule { }

export const routedComponents = [FlashcardSetsComponent];
