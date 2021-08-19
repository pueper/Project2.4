import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private callApiService: CallApiService) { }

  name:string
  password:string

  ngOnInit(): void {
  }

  postLogin(): void {
    this.callApiService.login(this.name, this.password);
  }
}
