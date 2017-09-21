import { Component, Input, OnInit } from "@angular/core";
import { Flashcard } from "../../../models/flashcard.model";

@Component({
  selector: "flashcard-button",
  templateUrl: "./flashcard-button.component.html",
  styleUrls: ["./flashcard-button.component.css"]
})
export class FlashcardButtonComponent implements OnInit {
  @Input() flashcard: Flashcard;
  constructor() { }

  ngOnInit() {
  }

}
