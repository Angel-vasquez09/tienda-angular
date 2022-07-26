import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-promo',
  templateUrl: './list-promo.component.html',
  styleUrls: ['./list-promo.component.css']
})
export class ListPromoComponent implements OnInit, AfterViewInit {

  @ViewChild('scroll') scroll!: ElementRef;
  totalScroll: number = 0;
  scrollWidth: number = 0;
  numberScroll: number = 470;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.scrollWidth = this.scroll.nativeElement.scrollWidth;
  }

  right(){
    this.totalScroll = this.scroll.nativeElement.scrollLeft += this.numberScroll;
    this.totalScroll += (this.scroll.nativeElement.clientWidth);
  }

  left(){
    this.totalScroll = this.scroll.nativeElement.scrollLeft -= this.numberScroll;
    this.totalScroll -= (this.scroll.nativeElement.clientWidth);
  }


}
