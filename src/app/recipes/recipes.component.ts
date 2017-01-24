import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../app/recipes/recipe';
import { RecipeService } from './recipe.service'
@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
