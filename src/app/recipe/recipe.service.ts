import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  //Base de las URLs que nos dieron en el enunciado
  private readonly baseUrl =
    'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas';

  constructor(private http: HttpClient) { }

  /**
   * Consulta el listado de recetas
   * GET https://.../2025-10%20Recetas/recipe.json
   */
  getRecipes(): Observable<Recipe[]> {
    const url = `${this.baseUrl}/recipe.json`;
    return this.http.get<Recipe[]>(url);
  }

  /**
   * Consulta el detalle de una receta por id
   * Ej: GET https://.../2025-10%20Recetas/1/recipe.json
   */
  getRecipe(id: number | string): Observable<Recipe> {
    const url = `${this.baseUrl}/${id}/recipe.json`;
    return this.http.get<Recipe>(url);
  }
}
