import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { routedComponents, FlashcardRoutingModule } from "./flashcard-routing.module";
import { FlashcardButtonComponent } from './flashcard-button/flashcard-button.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FlashcardRoutingModule
  ],
  declarations: [
    routedComponents,
    FlashcardButtonComponent
  ],  
})
export class FlashcardModule { }