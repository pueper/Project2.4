import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { TijdService } from 'src/app/tijd.service';

@Component({
  selector: 'app-gemiddelde',
  templateUrl: './gemiddelde.component.html',
  styleUrls: ['./gemiddelde.component.css']
})
export class GemiddeldeComponent implements OnInit {
    gemiddelde: number;
    verschil: number;
  constructor( private sidebarService: SidebarService, private tijdService: TijdService) { }

  ngOnInit() {
        this.sidebarService.getGemiddeld().subscribe(value => { this.gemiddelde = value; });
        this.tijdService.getTijd().subscribe(value => { this.verschil = value - this.gemiddelde; });
        this.sidebarService.fetchGemiddeldeData();
    }

}
