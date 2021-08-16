import { Component, OnInit } from '@angular/core';
import { User, Game, Topscore } from '../../spring_objecten'
import { CallApiService } from '../../call-api.service'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] = [];

  constructor(private callApiService: CallApiService) { }

  ngOnInit() {
    this.getGames()
  }

  getGames(): void {
    this.callApiService.getGames().subscribe(games => this.games = games);
  }
}
