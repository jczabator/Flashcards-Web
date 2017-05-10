import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { DashboardButtonComponent } from ".././shared/dashboard-button/dashboard-button.component";
import { DashboardRoutingModule, routedComponents } from "./dashboard-routing.module";

@NgModule({
  imports:[
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FlexLayoutModule  
  ],
  declarations: [
    DashboardButtonComponent, 
    routedComponents
  ], 
})
export class DashboardModule{}