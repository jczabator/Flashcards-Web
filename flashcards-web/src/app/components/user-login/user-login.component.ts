import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { FirebaseLoginService } from "../../services/firebase/firebase-login.service";

@Component({
  selector: "user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public firebaseLoginService: FirebaseLoginService,
    private router: Router) { }

  ngOnInit() {
  }

  private afterSignIn(): void {
    this.router.navigate(['/']);
  }

  signInWithFacebook(): void {
    this.firebaseLoginService.facebookLogin()
      .then(() => this.afterSignIn());
  }
}
