import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FlashcardSet } from '../../app/models/flashcard-set.model';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  flashcardSets: Observable<FlashcardSet[]>

  constructor() { }

  ngOnInit() {
  }

}
