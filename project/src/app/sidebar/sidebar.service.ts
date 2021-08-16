import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export class Topper {
    name: string;
    time: number;

    constructor(name: string, time: number) {
        this.name = name;
        this.time = time;
     }
}

@Injectable({
    providedIn: 'root'
})
export class SidebarService {
    topScores: Array<Topper> = new Array<Topper>();
    topper: Topper;
    totaalTijd: number;
    aantalTijden: number;
    gemiddelde: number;
    kleuren: Array<string>;
    toppersChange: Subject<Array<Topper>> = new Subject<Array<Topper>>();
    gemiddeldeChange: Subject<number> = new Subject<number>();
    kleurChange: Subject<Array<string>> = new Subject<Array<string>>();

    constructor() {
        this.topper = new Topper('Barack Obama', 100);
        this.topScores[0] = this.topper;
        this.toppersChange.next(this.topScores);
        this.aantalTijden = 0;
        this.totaalTijd = 0;
        this.gemiddelde = 0;
        this.kleuren = [ '#ff0000\',\'#00ff00\',\'#ffff00'];
    }
    getToppers(): Observable<Array<Topper>> {
        return this.toppersChange.asObservable();
    }
    getGemiddeld(): Observable<number> {
        return this.gemiddeldeChange.asObservable();
    }
    getKleur(): Observable<Array<string>> {
        return this.kleurChange.asObservable();
    }
    fetchGemiddeldeData() {
        this.gemiddeldeChange.next(this.gemiddelde);
    }
    fetchToppersData() {
        this.toppersChange.next(this.topScores);
    }
    setKleur(value: Array<string>) {
        this.kleuren = value;
        this.kleurChange.next(this.kleuren);
    }
    fetchKleuren() {
        this.kleurChange.next(this.kleuren);
    }
    registreerScore(speelTijd: number) {
        this.totaalTijd += speelTijd;
        this.aantalTijden++;
        this.gemiddelde = Math.round(this.totaalTijd / this.aantalTijden);
        if (this.topScores.length < 4) {
            this.updateTopScores(speelTijd);
        } else {
            if (speelTijd <= this.topScores[this.topScores.length - 1].time) {
                this.updateTopScores(speelTijd);
            }
        }
    }
    updateTopScores(speelTijd: number) {
        const naam: string = prompt('Gefeliciteerd, je staat in de top vijf! Please enter your name', 'Harry Potter');
        let nieuweTopper = new Topper(naam, speelTijd);
        let idx = 0;
        for (const topscore of this.topScores) {
            if (speelTijd <= topscore.time) {
                const thisTopper = this.topScores[idx];
                this.topScores[idx] = nieuweTopper;
                nieuweTopper = thisTopper;
                speelTijd = topscore.time;
            }
            idx++;
        }
        if (idx <= 4) {
            this.topScores[idx] = nieuweTopper;
        }
        this.toppersChange.next(this.topScores);
        this.gemiddeldeChange.next(this.gemiddelde);
    }
}


