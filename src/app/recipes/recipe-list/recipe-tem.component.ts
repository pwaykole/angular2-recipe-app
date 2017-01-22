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
      width: 656px;
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
