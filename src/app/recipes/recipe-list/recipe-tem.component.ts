import { Recipe } from './../recipe';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rb-recipe-tem',
  templateUrl: './recipe-tem.component.html',
  styles: [`
    .recipe-list-a{
      text-decoration: none;
    }
    .recipe-card-wide.mdl-card {
      width: 492px;
      margin-bottom:20px;
    }
    .recipe-list-bg {
      background:transparent;
    }
`]
})
export class RecipeTemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
