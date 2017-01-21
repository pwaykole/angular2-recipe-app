import { Recipe } from './../recipe';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rb-recipe-tem',
  templateUrl: './recipe-tem.component.html',
  styles: [`
    .recipe-list-a{
      text-decoration: none;
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
