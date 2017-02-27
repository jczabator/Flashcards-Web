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
      { caption: "Strona główna", link: ["/dashboard"]},
      { caption: "Fiszki", link:["/flashcard-categories"]}
    ]
  }
}
