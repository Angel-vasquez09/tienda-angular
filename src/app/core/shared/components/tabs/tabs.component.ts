import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  url: string = '';

  constructor(private router: Router) {
    this.url = this.router.routerState.snapshot.url;
  }

  ngOnInit() {
  }

}
