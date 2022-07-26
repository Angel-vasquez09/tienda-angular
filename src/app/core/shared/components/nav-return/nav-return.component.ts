import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-return',
  templateUrl: './nav-return.component.html',
  styleUrls: ['./nav-return.component.css']
})
export class NavReturnComponent implements OnInit {

  @Input() nombre: String = '';

  constructor(private location: Location) { }

  ngOnInit() {
  }

  return(){
    this.location.back();
  }



}
