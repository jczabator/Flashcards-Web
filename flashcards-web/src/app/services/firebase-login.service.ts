import { Injectable } from "@angular/core";
import { Observable } from "rxjs/observable";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

@Injectable()
export class FirebaseLoginService{
  user:  Observable<firebase.User>;
  isSignedIn: boolean = false;
  
  constructor(
    public firebaseAuth: AngularFireAuth) {
      this.user = this.firebaseAuth.authState;
      firebase.auth().onAuthStateChanged(this.setLoginStatus);
  };

  setLoginStatus(user){
    if(user){
      this.isSignedIn = true;
    }
    else{
      this.isSignedIn = false;
    }
  }

  login() {
    if(this.isSignedIn === false){
      this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }    
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }  
}