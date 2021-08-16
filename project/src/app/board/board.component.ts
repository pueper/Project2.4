import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    numbers: any[];
    _size: number;

    constructor() { }
    @Input()
    set size(size: number) {
      this.numbers = Array(size).fill(1);
      this._size = size;
    }
    get size(): number {
        return this._size;
    }

  ngOnInit() {
  }
}
