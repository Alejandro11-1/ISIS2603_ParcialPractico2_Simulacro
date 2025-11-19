import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipe(Number(id)).subscribe((recipe) => {
        this.recipe = recipe;
      });
    }
  }
}
