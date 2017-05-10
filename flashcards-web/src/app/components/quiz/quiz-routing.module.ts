import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { QuizComponent } from "./quiz.component";

const routes: Routes = [
  {
    path: ":id",
    component: QuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule{}

export const routedComponents = [QuizComponent];