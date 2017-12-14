import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import 'hammerjs';

import "./core/rxjs-extensions";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FlashcardSetFirebaseService } from './services/firebase/flashcard-set-firebase.service';
import { FlashcardFirebaseService } from "./services/firebase/flashcard-firebase.service";
import { FlashcardCategoryFirebaseService } from "./services/firebase/flashcard-category-firebase.service";
import { FirebaseLoginService } from "./services/firebase/firebase-login.service";

import { CoreModule } from "./core/core.module";
import { DashboardModule } from "./components/dashboard/dashboard.module";
import { QuizModule } from './components/quiz/quiz.module';
import { FlashcardCategoriesModule } from "./components/flashcard-categories/flashcard-categories.module";
import { FlashcardSetsModule } from "./components/flashcard-sets/flashcard-sets.module";
import { FlashcardModule } from "./components/flashcard/flashcard.module";
import { UserLoginModule } from "./components/user-login/user-login.module";

export const firebaseConfig = {
  apiKey: "AIzaSyCZrajeWksDA4Ql1bCBE2SHu64jSYMgMYg",
  authDomain: "flashcards-a2831.firebaseapp.com",
  databaseURL: "https://flashcards-a2831.firebaseio.com",
  projectId: "flashcards-a2831",
  storageBucket: "flashcards-a2831.appspot.com",
  messagingSenderId: "287378865619"
};

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
    UserLoginModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,    
  ],
  providers: [
    FlashcardSetFirebaseService,
    FlashcardFirebaseService,
    FlashcardCategoryFirebaseService,
    FlashcardFirebaseService,
    FirebaseLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }