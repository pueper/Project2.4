import { Directive, Input, ElementRef } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
//import { INJECTOR_BLOOM_PARENT_SIZE } from '@angular/core/src/render3/interfaces/injector';

@Directive({
  selector: '[appCardlayout]'
})
export class CardlayoutDirective {
    _gevonden: boolean;
    _geselecteerd: boolean;
    kleuren: Array<string>;

    @Input()size;

    @Input()
    set gevonden(gevonden: boolean) {
        this._gevonden = gevonden;
        this.setBackground();
    }
    get gevonden() {
        return this._gevonden;
    }
    @Input()
    set geselecteerd(geselecteerd: boolean) {
        this._geselecteerd = geselecteerd;
        this.setBackground();
    }
    get geselecteerd() {
        return this._geselecteerd;
    }

    constructor(private el: ElementRef, private sidebarService: SidebarService) {
        this.sidebarService.getKleur().subscribe(value => { this.kleuren = value; this.setBackground(); });
        this.sidebarService.fetchKleuren();
    }
    setBackground() {
        let cardSize: string = Math.round(25 / this.size) + 'vh';
        this.el.nativeElement.style.width = cardSize;
        this.el.nativeElement.style.height = cardSize;
        cardSize = Math.round(23 / this.size) + 'vh';
        this.el.nativeElement.style.fontSize = cardSize;
        if (this._gevonden) {
            this.el.nativeElement.style.backgroundColor = this.kleuren[2];
        } else if (this._geselecteerd) {
            this.el.nativeElement.style.backgroundColor = this.kleuren[1];
        } else {
            this.el.nativeElement.style.backgroundColor = this.kleuren[0];
        }
    }
}
