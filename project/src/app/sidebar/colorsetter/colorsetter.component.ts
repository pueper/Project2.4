import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
    selector: 'app-colorsetter',
    templateUrl: './colorsetter.component.html',
    styleUrls: ['./colorsetter.component.css']
})
export class ColorsetterComponent implements OnInit {

    kaart: string = "#ff0000";
    tonen: string = "#00ff00";
    gevonden: string = "#ffff00";
    kleuren: Array<string> = [this.kaart, this.tonen, this.gevonden];

    constructor(private sidebarService: SidebarService) {
        this.kleuren = [this.kaart, this.tonen, this.gevonden];
        this.sidebarService.setKleur(this.kleuren);
    }
    ngOnInit() { }

    setKaart() {
        this.kleuren = [this.kaart, this.tonen, this.gevonden];
        this.sidebarService.setKleur(this.kleuren);
    }
}
