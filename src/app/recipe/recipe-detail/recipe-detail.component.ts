import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../ingredient/Ingredient';


@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe | any;
  maxIngredient?: Ingredient;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}
  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');

  if (id) {
    this.recipeService.getRecipe(Number(id)).subscribe((recipe) => {
      this.recipe = recipe;
      this.maxIngredient = this.findMaxIngredient(recipe.ingredientes);
    });
  }
}

//función auxiliar
private findMaxIngredient(ingredients: Ingredient[]): Ingredient | undefined {
  if (!ingredients || ingredients.length === 0) {
    return undefined;
  }

  // Ignoramos unidades: solo comparamos la cantidad numérica
  return ingredients.reduce((max, current) =>
    current.cantidad > max.cantidad? current : max
  );
}
}
