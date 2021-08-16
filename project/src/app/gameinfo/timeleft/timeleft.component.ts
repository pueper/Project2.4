import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BoardService } from 'src/app/board/board.service';

@Component({
    selector: 'app-timeleft',
    animations: [
        trigger('showTime', [
            // ...
            state('open', style({
                width: '183px'
            })),
            state('closed', style({
                width: '0px'
            })),
            transition('open => closed', [
                animate('2s')
            ]),
            transition('closed => open', [
                animate('0.05s')
            ]),
        ]),
    ],
    templateUrl: './timeleft.component.html',
    styleUrls: ['./timeleft.component.css']
})
export class TimeleftComponent implements OnInit {
    running = false;

    constructor(private boardService: BoardService) {
        this.boardService.getShowTime().subscribe(value => { this.running = value; });
    }

    ngOnInit() {
    }

}
