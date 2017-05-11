import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  selector: 'flashcard-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menuItems: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = [
      { caption: "Kategorie", link: ["/flashcard-categories"] },
      { caption: "Quizy", link: ["/flashcard-sets"] },
      { caption: "Fiszki", link: ["/flashcards"] }
    ]
  }

  navigateToDashboard() {    
    const link = ['/dashboard'];
    console.log(link);
    this.router.navigate(link);
  }
}
