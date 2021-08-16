import { Component, OnInit } from '@angular/core';
import { Topper, SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-topscores',
  templateUrl: './topscores.component.html',
  styleUrls: ['./topscores.component.css']
})
export class TopscoresComponent implements OnInit {
    toppers: Array<Topper>;

  constructor(private sidebarService: SidebarService) {  }

  ngOnInit() {
      this.sidebarService.getToppers().subscribe(value => { this.toppers = value; });
      this.sidebarService.fetchToppersData();
  }

}
