import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import  'hammerjs';

import "./core/rxjs-extensions";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FlashcardCategoriesComponent } from './flashcard-categories/flashcard-categories.component';
import { FlashcardSetsComponent } from './flashcard-sets/flashcard-sets.component';
import { FlashcardComponent } from './flashcard/flashcard.component';

import { FlashcardSetService } from './services/flashcard-set.service';

import { CoreModule } from "./core/core.module";
import { DashboardModule } from "./dashboard/dashboard.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    DashboardModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,    
    FlashcardCategoriesComponent,
    FlashcardSetsComponent,
    FlashcardComponent,    
  ],  
  providers: [FlashcardSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }