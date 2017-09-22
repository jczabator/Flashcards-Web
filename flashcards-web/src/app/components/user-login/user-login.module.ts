import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { routedComponents, UserLoginRoutingModule } from "./user-login-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    UserLoginRoutingModule
  ],
  declarations: [
    routedComponents
  ]  
})
export class UserLoginModule {}