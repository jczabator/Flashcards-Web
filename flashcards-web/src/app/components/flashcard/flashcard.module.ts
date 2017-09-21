import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { routedComponents, FlashcardRoutingModule } from "./flashcard-routing.module";



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FlashcardRoutingModule
  ],
  declarations: [
    routedComponents
  ],  
})
export class FlashcardModule { }