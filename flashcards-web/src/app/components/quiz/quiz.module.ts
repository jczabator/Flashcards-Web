import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { QuizRoutingModule, routedComponents } from "./quiz-routing.module";

import { QuizService } from "./service/quiz.service";
import { QuizButtonComponent } from './quiz-button/quiz-button.component';
import { QuizFlashcardButtonComponent } from './quiz-flashcard-button/quiz-flashcard-button.component';
import { QuizEndButtonComponent } from './quiz-end-button/quiz-end-button.component';
import { QuizNextButtonComponent } from './quiz-next-button/quiz-next-button.component';

@NgModule({
  imports: [
    CommonModule,
    QuizRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    routedComponents,
    QuizButtonComponent,
    QuizFlashcardButtonComponent,
    QuizEndButtonComponent,
    QuizNextButtonComponent
  ],
  providers:[QuizService],
})
export class QuizModule { }
