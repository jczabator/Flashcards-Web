import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlashcardCategoriesComponent } from './flashcard-categories/flashcard-categories.component';
import { FlashcardSetsComponent } from './flashcard-sets/flashcard-sets.component';
import { FlashcardComponent } from './flashcard/flashcard.component';

import { CoreModule } from "./core/core.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    FlashcardCategoriesComponent,
    FlashcardSetsComponent,
    FlashcardComponent,    
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
