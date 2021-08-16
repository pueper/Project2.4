import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TijdService {
    starttijd: number;
    tijdID: any;
    verlopenTijd: number;
    verlopenTijdChange: Subject<number> = new Subject<number>();

    constructor() {
        this.initTijd();
    }
    initTijd() {
        this.verlopenTijd = 0;
        this.starttijd = 0;
        clearInterval(this.tijdID);
        this.verlopenTijdChange.next(this.verlopenTijd);
    }
    checkStartTijd() {
        if (this.starttijd === 0) {
            this.starttijd = this.getSeconds();
            this.tijdID = setInterval(() => { this.tijdBijhouden(); }, 500);
        }
    }
    getSeconds() {
        const tijd = new Date();
        return Math.round(tijd.getTime() / 1000);
    }
    tijdBijhouden() {
        this.verlopenTijd = this.getSeconds() - this.starttijd;
        this.verlopenTijdChange.next(this.verlopenTijd);
    }
    stopTijd() {
        clearInterval(this.tijdID);
        return this.getSeconds() - this.starttijd;
    }
    getTijd(): Observable<number> {
        return this.verlopenTijdChange.asObservable();
    }
}
