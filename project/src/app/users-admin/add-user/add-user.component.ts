import { Component, OnInit } from '@angular/core';
import { User, Game, Topscore } from '../../spring_objecten'
import { CallApiService } from '../../call-api.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  name:string
  password:string
  age:number
  user:User
  created=false
  	
  constructor(private callApiService: CallApiService) {
     this.callApiService.getUserCreated().subscribe(value => {this.user = value; this.created=true;})}

  ngOnInit() {
  }

  save():void {
  	this.callApiService.saveUser(this.name, this.password, this.age);
  }
}
