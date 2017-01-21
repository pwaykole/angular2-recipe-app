import { Recipe } from './../recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'https://s-media-cache-ak0.pinimg.com/236x/7f/fd/c9/7ffdc9cfc486c9e1100e612ac52b2ae5.jpg');
  constructor() { }

  ngOnInit() {
  }

}
