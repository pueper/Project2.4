import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    @Output() startGame = new EventEmitter<number>();

    constructor() { }

    ngOnInit() { }

    newGame(size: number) {
        this.startGame.emit(size);
    }
}
