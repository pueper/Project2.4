import { APP_ID, Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CallApiService } from '../call-api.service';

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
    gameID: number;

    constructor(private callapiservice: CallApiService) {
        this.gameID = 1;
        this.toppersChange.next(this.topScores);
        this.refreshScores();
        this.aantalTijden = 0;
        this.totaalTijd = 0;
        this.gemiddelde = 0;
        this.kleuren = [ '#ff0000\',\'#00ff00\',\'#ffff00'];
    }
    refreshScores() {
        this.callapiservice.getTopscoresGame(this.gameID).subscribe(scores => { 
            let i = 0;
            this.totaalTijd = 0;
            this.aantalTijden = 0;
            for(i; i<scores.length;i++) {
                if(scores[i]['game']['id'] == this.gameID) {
                    this.topScores[i] = new Topper(scores[i]['user']['name'], scores[i]['score']);
                    this.totaalTijd += this.topScores[i]['time'];
                    this.aantalTijden++;
                }
            }
            this.gemiddelde = Math.round(this.totaalTijd / this.aantalTijden);
            })
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
    registreerScore(speelTijd: number, gameID: number) {
        this.totaalTijd += speelTijd;
        this.aantalTijden++;
        if (this.topScores.length < 4) {
            this.updateTopScores(speelTijd, gameID);
        } else {
            if (speelTijd <= this.topScores[this.topScores.length - 1].time) {
                this.updateTopScores(speelTijd, gameID);
            }
        }
    }
    updateTopScores(speelTijd: number, gameID: number) {
        this.gameID = gameID;
        this.callapiservice.postTopscore(this.gameID, speelTijd);
        this.refreshScores();
        this.toppersChange.next(this.topScores);
        this.gemiddeldeChange.next(this.gemiddelde);
    }
}


