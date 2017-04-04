import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'dashboard', },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },  
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],  
})
export class AppRoutingModule { }