import { NgModule } from "@angular/core";
import { PreloadAllModules, Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  { 
    path: "", 
    pathMatch: "full", 
    redirectTo: "dashboard", 
  },
  { 
    path: "dashboard", 
    loadChildren: "app/components/dashboard/dashboard.module#DashboardModule" 
  },
  { 
    path: "quiz",
    loadChildren: "app/components/quiz/quiz.module#QuizModule"
  },
  {
    path: "flashcard-categories",
    loadChildren: "app/components/flashcard-categories/flashcard-categories.module#FlashcardCategoriesModule"
  },
  {
    path:"flashcard-sets",
    loadChildren: "app/components/flashcard-sets/flashcard-sets.module#FlashcardSetsModule"
  },
  {
    path:"flashcard",
    loadChildren: "app/components/flashcard/flashcard.module#FlashcardModule"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }