import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test', 'https://cdn-icons-png.flaticon.com/512/5403/5403020.png'),
    new Recipe('A Test Recipe', 'This is a simply test', 'https://cdn-icons-png.flaticon.com/512/5403/5403020.png')
  ];
}
