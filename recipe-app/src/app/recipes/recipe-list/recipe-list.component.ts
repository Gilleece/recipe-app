import { Component } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A love test description', 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'),
    new Recipe('Test Recipe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt/', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1280px-Test-Logo.svg.png'),
    new Recipe('Test Recipe', 'A love test description', 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'),
    new Recipe('Test Recipe', 'A love test description', 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'),
  ];
  constructor() {
  }

  ngOnInit() {

  }
}
