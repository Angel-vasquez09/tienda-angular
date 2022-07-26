import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-recommended',
  templateUrl: './list-recommended.component.html',
  styleUrls: ['./list-recommended.component.css']
})
export class ListRecommendedComponent implements OnInit, AfterViewInit {

  @ViewChild('scroll2') scroll2!: ElementRef;
  totalScroll: number = 0;
  scrollWidth: number = 0;
  numberScroll: number = 490;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.scrollWidth = this.scroll2.nativeElement.scrollWidth;
  }

  right(){
    this.totalScroll = this.scroll2.nativeElement.scrollLeft += this.numberScroll;
    this.totalScroll += (this.scroll2.nativeElement.clientWidth);
  }

  left(){
    this.totalScroll = this.scroll2.nativeElement.scrollLeft -= this.numberScroll;
    this.totalScroll -= (this.scroll2.nativeElement.clientWidth);
  }

}
