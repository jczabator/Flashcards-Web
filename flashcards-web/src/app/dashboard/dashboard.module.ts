import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { DashboardButtonComponent } from "./shared/dashboard-button/dashboard-button.component";
import { DashboardRoutingModule, routedComponents } from "./dashboard-routing.module";

@NgModule({
  imports:[
    CommonModule,
    DashboardRoutingModule,
    MaterialModule    
  ],
  declarations: [
    DashboardButtonComponent, 
    routedComponents
  ], 
})
export class DashboardModule{}