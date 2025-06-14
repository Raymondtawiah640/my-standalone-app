import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Recipes {
  id: number;
  name: string;
  ingredients: string;
  instructions: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerserving: number;
  tags: string;
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
})


export class App implements OnInit {
  recipes: Recipes | null = null;

  ngOnInit() {
      fetch('https://dummyjson.com/recipes/1')
      .then(res => res.json())
      .then((data: Recipes) => {
        this.recipes =data;
      })
      .catch(err => console.error( 'Fetch error', err))
  }
}

