import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categorias: any = [
    {
      name: 'All',
    },
    {
      name: 'Categoria1',
    },
    {
      name: 'Categoria2',
    },
    {
      name: 'Categoria3',
    },
    {
      name: 'Categoria4',
    },
    {
      name: 'Categoria5',
    },
    {
      name: 'Categoria6',
    },
    {
      name: 'Categoria7',
    },
    {
      name: 'Categoria8',
    },
    {
      name: 'Categoria9',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
