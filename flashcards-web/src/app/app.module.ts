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

import { FlashcardCategoriesComponent } from './components/flashcard-categories/flashcard-categories.component';
import { FlashcardSetsComponent } from './components/flashcard-sets/flashcard-sets.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';

import { FlashcardSetService } from './services/flashcard-set.service';
import { FlashcardService } from "./services/flashcard.service";

import { CoreModule } from "./core/core.module";
import { DashboardModule } from "./components/dashboard/dashboard.module";
import { QuizModule } from './components/quiz/quiz.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    DashboardModule,
    QuizModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    FlashcardCategoriesComponent,
    FlashcardSetsComponent,
    FlashcardComponent,
  ],
  providers: [
    FlashcardSetService,
    FlashcardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }