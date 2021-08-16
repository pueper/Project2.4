import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BoardService } from 'src/app/board/board.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    @Output() startGame = new EventEmitter<number>();
    achterkant: string;
    size: number;
    achterkantOpties: string[] = ['*', '%', '#', '@', 'X'];
    sizeOpties: number[] = [2, 4, 6];

    constructor(private boardService: BoardService ) {
        this.achterkant = '*';
        this.size = 6;
        this.boardService.setAchterkant('*');
    }
    ngOnInit() {
    }
    setAchterkant() {
        this.boardService.setAchterkant(this.achterkant);
    }
}
