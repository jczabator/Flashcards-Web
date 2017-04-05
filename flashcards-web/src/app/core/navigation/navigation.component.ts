import { Component, OnInit } from '@angular/core';

class MenuItem {
  constructor(public caption: string, public link: any[]){ }
}

@Component({
  selector: 'flashcard-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      { caption: "Start", link: ["/quiz"]},
      { caption: "Kategorie", link: ["/flashcard-categories"]},
      { caption: "Quizy", link: ["/flashcard-sets"]},
      { caption: "Fiszki", link:["/flashcards"]}
    ]
  }
}
