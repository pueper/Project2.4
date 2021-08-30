import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from "moment";
import { User } from './spring_objecten';

@Injectable({ providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient) {

    }

    login(user:string, password:string ) {
        return this.http.post<User>('http://localhost:8080/wmsdemo/login', {user, password})
            .subscribe(res => this.setSession(res)) 
    }
          
    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');
        localStorage.setItem('user_id', authResult.user_id);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
        localStorage.setItem("token", authResult.token)
    }          

    logout() {
        localStorage.removeItem("user_id");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getUserid(): number {
        return parseInt(localStorage.getItem('user_id'));
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    
}
