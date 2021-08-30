import { Injectable } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Subject, Observable } from 'rxjs';
import { TijdService } from '../tijd.service';
import { SidebarService } from '../sidebar/sidebar.service';

@Injectable({
    providedIn: 'root'
})
export class BoardService {
    firstCard: CardComponent;
    secondCard: CardComponent;
    intervalID: any;
    numberOfCardsLeft: number;
    gevonden: number;
    getLetter: any;
    size: number;
    achterkant: string;
    gevondenChange: Subject<number> = new Subject<number>();
    achterkantChange: Subject<string> = new Subject<string>();
    showTimeChange: Subject<boolean> = new Subject<boolean>();
    gameID: number;

    constructor(private tijdService: TijdService, private sidebarService: SidebarService) {
       // this.initVars();
    }
    getGevonden(): Observable<number> {
        return this.gevondenChange.asObservable();
    }
    getAchterkant(): Observable<string> {
        return this.achterkantChange.asObservable();
    }
    setAchterkant(value: string) {
        this.achterkant = value;
        this.achterkantChange.next(value);
    }
    fetchAchterkant() {
        return this.achterkant;
    }
    getShowTime(): Observable<boolean> {
        return this.showTimeChange.asObservable();
    }
    initVars(newSize: number, gameID: number) {
        this.size = newSize;
        this.firstCard = null;
        this.secondCard = null;
        this.numberOfCardsLeft = this.size * this.size;
        this.gevonden = 0;
        this.gevondenChange.next(this.gevonden);
        clearTimeout(this.intervalID);
        this.getLetter = this.nextLetter();
        this.tijdService.initTijd();
        this.showTimeChange.next(false);
        this.gameID = gameID;
    }
    nextLetter(): any {
        let letterArray = 'AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ'.substring(0, this.size * this.size).split('');
        let idx = 0;
        letterArray = this.shuffle(letterArray);
        return () => {
            const letter = letterArray[idx++];
            return letter;
        };
    }
    shuffle(array: string[]): string[] {
        let currentIndex = array.length;
        let temporaryValue: string;
        let randomIndex: number;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    checkDerdeKaart() {
        if (this.firstCard != null && this.secondCard != null) {
            this.deactivateCards();
            clearTimeout(this.intervalID);
        }
    }
    deactivateCards() {
        this.toggleCard(this.firstCard);
        this.toggleCard(this.secondCard);
        this.firstCard = null;
        this.secondCard = null;
        this.showTimeChange.next(false);
    }
    toggleCard(element: CardComponent) {
        if (element == null) { return; }
        if (element.selected === true) {
            element.selected = false;
        } else {
            element.selected = false;
        }
    }
    turnCard(card: CardComponent) {
        if (card.selected === true) { return 0; }
        this.toggleCard(card);
        card.selected = true;
        if (!this.firstCard) {
            this.firstCard = card;
            return 1;
        } else {
            this.secondCard = card;
            return 2;
        }
    }
    checkKaarten() {
        if (this.firstCard.karakter === this.secondCard.karakter) {
            this.firstCard.found = true;
            this.secondCard.found = true;
            this.numberOfCardsLeft -= 2;
            this.gevonden++;
            this.gevondenChange.next(this.gevonden);
            if (this.numberOfCardsLeft === 0) {
                this.endGame();
            }
        } else {
            this.showTimeChange.next(true);
            this.intervalID = setTimeout(() => { this.deactivateCards(); }, 2000);
        }
    }
    endGame() {
        let score:number = this.tijdService.stopTijd();
        this.sidebarService.registreerScore(score, this.gameID);
    }
}
