import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { DashboardButtonComponent } from "./shared/dashboard-button/dashboard-button.component";
import { DashboardRoutingModule, routedComponents } from "./dashboard-routing.module";

@NgModule({
  imports:[
    CommonModule,
    DashboardRoutingModule    
  ],
  declarations: [
    DashboardButtonComponent, 
    routedComponents
  ], 
})
export class DashboardModule{}