import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User, Game, Topscore } from './spring_objecten';

@Injectable( {providedIn: 'root'} )

export class CallApiService {

	private gameServerUrl = 'http://localhost:8080/wmsdemo';
	userCreated: Subject<User> = new Subject<User>();

	httpOptions = {
    	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  	};
	
	constructor(private http: HttpClient) { }

	getGames(): Observable<Game[]>  {
		const url = this.gameServerUrl+ '/games';
		return this.http.get<Game[]>(url);
	}
	
	getTopscoresGame(id: number): Observable<Topscore[]> {
		const url = this.gameServerUrl+ '/topscores/game/' + id;
		return this.http.get<Topscore[]>(url);
	}
	
	saveUser(name: string, age: number): void  {
		const url = this.gameServerUrl+ '/user';
		this.http.post<any>(url, { name: name, age: age }).subscribe(data => {
        this.userCreated.next(data);
    })
	}
	
	getUserCreated(): Observable<User> {
        return this.userCreated.asObservable();
    }
}
