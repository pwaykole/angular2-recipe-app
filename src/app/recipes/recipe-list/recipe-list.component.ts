import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from './../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Chicken Over Rice', `Marinated in oregano, lemon, and coriander,
      chicken thighs are browned, chopped into chunks and served over a pile turmeric-yellow rice.
      Of course, it wouldn't be halal-cart style without the ubiquitous (and none too fancy) salad
      of iceberg and tomatoes, and that mysterious sweet-sour-tangy white sauce that just has to be
      ladled all over the chicken and rice for true street-style authenticity.`,
      '../../../assets/recipe-items/50820.jpg', []),
      new Recipe('Paneer Tikka Masala', `Chunks of marinated grilled paneer and capsicum in a
      creamy onion tomato masala a paneer tikka masala is one of the vegetarian Indian recipes
      that have found favour abroad. Soft grilled paneer and the flavours of the masala, blend
      together beautifully to give you a final dish which is a treat to all your senses.`,
      '../../../assets/recipe-items/50821.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
