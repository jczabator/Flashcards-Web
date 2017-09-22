import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { routedComponents, FlashcardSetsRoutingModule } from "./flashcard-sets-routing.module";

import { FlashcardSetService } from "../../services/flashcard-set.service";
import { FlashcardSetButtonComponent } from './flashcard-set-button/flashcard-set-button.component';
  
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FlashcardSetsRoutingModule
  ],
  declarations: [
    routedComponents,
    FlashcardSetButtonComponent
  ],
  providers: [FlashcardSetService]
})
export class FlashcardSetsModule { }
