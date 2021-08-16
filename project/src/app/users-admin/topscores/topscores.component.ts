import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User, Game, Topscore } from '../../spring_objecten'
import { CallApiService } from '../../call-api.service'

@Component({
  selector: 'app-topscores',
  templateUrl: './topscores.component.html',
  styleUrls: ['./topscores.component.css']
})

export class TopscoresComponent implements OnInit {

	topscores: Topscore[] =[];
		
    constructor( private route: ActivatedRoute,
    	private callApiService: CallApiService) { }

	ngOnInit(): void {
  		this.getScores()
	}

	getScores(): void {
		const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    	this.callApiService.getTopscoresGame(id)
      	.subscribe(topscores => this.topscores = topscores);
	}
}
