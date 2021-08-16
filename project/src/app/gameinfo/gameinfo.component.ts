import { Component, OnInit, Input } from '@angular/core';
import { TijdService } from '../tijd.service';
import { BoardService } from '../board/board.service';

@Component({
    selector: 'app-gameinfo',
    templateUrl: './gameinfo.component.html',
    styleUrls: ['./gameinfo.component.css'],
})
export class GameinfoComponent implements OnInit {
    gevonden: number;
    verlopenTijd: number;

    constructor(private tijdService: TijdService, private boardService: BoardService) {
        this.tijdService.getTijd().subscribe(value => { this.verlopenTijd = value; });
        this.boardService.getGevonden().subscribe(value => { this.gevonden = value; });
    }

    ngOnInit() {
        this.verlopenTijd = 0;
        this.gevonden = 0;
    }
}
