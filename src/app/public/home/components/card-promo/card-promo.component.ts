import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-promo',
  templateUrl: './card-promo.component.html',
  styleUrls: ['./card-promo.component.css']
})
export class CardPromoComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
