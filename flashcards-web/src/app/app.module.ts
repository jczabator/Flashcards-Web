import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';

import "./core/rxjs-extensions";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FlashcardSetService } from './services/flashcard-set.service';
import { FlashcardService } from "./services/flashcard.service";
import { FlashcardCategoryService } from "./services/flashcard-category.service";

import { CoreModule } from "./core/core.module";
import { DashboardModule } from "./components/dashboard/dashboard.module";
import { QuizModule } from './components/quiz/quiz.module';
import { FlashcardCategoriesModule } from "./components/flashcard-categories/flashcard-categories.module";
import { FlashcardSetsModule } from "./components/flashcard-sets/flashcard-sets.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    DashboardModule,
    QuizModule,
    FlashcardCategoriesModule,
    FlashcardSetsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,    
  ],
  providers: [
    FlashcardSetService,
    FlashcardService,
    FlashcardCategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }