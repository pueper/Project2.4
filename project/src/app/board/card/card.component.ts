import { Component, OnInit, Input } from '@angular/core';
import { TijdService } from '../../tijd.service';
import { BoardService } from '../board.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    selected: boolean;
    found: boolean;
    kleur: string;
    _karakter: string;
    achterkant: string;
    _size: number;
    numbers: any[];

    @Input()
    set size(size: number) {
        this.numbers = Array(size).fill(1);
        this._size = size;
    }
    get size(): number {
        return this._size;
    }
    @Input()
    set karakter(karakter: string) {
        this._karakter = this.boardService.getLetter();
    }
    get karakter() {
        return this._karakter;
    }

    constructor(private tijdService: TijdService, private boardService: BoardService) {
        this.selected = false;
        this.found = false;
        this.boardService.getAchterkant().subscribe(value => { this.achterkant = value; });
    }

    ngOnInit() {
        this.achterkant = this.boardService.fetchAchterkant();
    }

    onSelect() {
        if (!this.found) {
            this.tijdService.checkStartTijd();
            this.boardService.checkDerdeKaart();
            const draaiKaartOm = this.boardService.turnCard(this);
            if (draaiKaartOm === 2) {
                this.boardService.checkKaarten();
            }
        }
    }
}
