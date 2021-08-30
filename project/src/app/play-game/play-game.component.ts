import { Component } from '@angular/core';
import { BoardService } from '../board/board.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent {
    size = 6;
    timeID: any;
    gameID: number = 1;  // dit is placeholder, moet eigenlijk achterhaald worden welk spel gespeeld word
    sidebar: boolean;

    constructor(private boardService: BoardService) {
        this.sidebar = false;
        this.newGame(this.size);
    }

    toggleSidebar() {
        if(this.sidebar) {
            this.sidebar = false;
        } else {
            this.sidebar = true;
        }
    }

    newGame(newSize: number) {
        this.size = 1;
        setTimeout(() => {
        this.boardService.initVars(newSize, this.gameID);
        this.size = newSize;
        }, 10);
    }
}
