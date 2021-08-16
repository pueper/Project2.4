import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
    letters: string[];
    _size: number;

    @Input()
    set size(size: number) {
        this.letters = Array(size).fill(size);
        this._size = size;
    }
    get size() {
        return this._size;
    }

  constructor() {
  }

  ngOnInit() {
  }

}
