import { Component, Input, OnInit } from '@angular/core';
import { FlashcardSet } from '../../../models/flashcard-set.model';

@Component({
  moduleId: module.id,
  selector: 'flashcard-dashboard-button',
  templateUrl: './dashboard-button.component.html',
  styleUrls: ['./dashboard-button.component.css']
})
export class DashboardButtonComponent implements OnInit {
  @Input() flashcardSet: FlashcardSet;

  constructor() { }

  ngOnInit() {
  }

}
