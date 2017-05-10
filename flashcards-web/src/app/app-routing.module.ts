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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }