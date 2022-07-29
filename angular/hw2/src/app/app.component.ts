import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { ApiService } from './services/api.service';
import { CardInterface } from './interfaces';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private readonly apiService: ApiService) {}
  cards: CardInterface[];
  selectedCard: CardInterface;

  ngOnInit() {
    this.cards = this.apiService.datalist;
    this.selectedCard = this.cards[0];
  }

  setSelected(selectedCard: CardInterface) {
    this.selectedCard = selectedCard;
  }
}
