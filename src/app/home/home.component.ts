import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  favoriteMessage: string = '';
  searchMessage: string = '';


  constructor() { }


  ngOnInit() {
  }

  onNotifyClicked(messages: string): void {
    this.searchMessage = messages; 
  }

  onFavoriteClicked(message: string): void {
    this.favoriteMessage = message;
  }
}
