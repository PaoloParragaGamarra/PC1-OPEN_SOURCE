import { Component,OnInit } from '@angular/core';
import { MatCardModule} from "@angular/material/card";
import { Meal } from "../../model/meal.model";
import { MealServiceService } from "../../services/meal-service.service";
import {  NgForOf, NgOptimizedImage} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    NgOptimizedImage,
    MatFormField,
    MatInput,
    MatLabel
  ],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.css'
})
export class MealCardComponent implements OnInit{

   mealData: Meal;
   meals: Meal[] = [];

  constructor(private mealService: MealServiceService){
    this.mealData = {} as Meal;
  }

  ngOnInit() {

    this.getMeals();
  }


  getMeals(){
    this.mealService.getMeals().subscribe((data:any) => {
      this.meals = [];
      data.meals.forEach((meal:any) =>{
        this.mealData =  new Meal(meal.strMealThumb,meal.strMeal, meal.strInstructions, meal.strIngredient1, meal.strIngredient2,meal.strCategory);
        this.meals.push(this.mealData);
      });
    });
  }

  getMealsByName(name:string){
    this.mealService.getMealsByName(name).subscribe((data:any) => {
      this.meals = [];
      data.meals.forEach((meal:any) =>{
        this.mealData =  new Meal(meal.strMealThumb,meal.strMeal, meal.strInstructions, meal.strIngredient1, meal.strIngredient2,meal.strCategory);
        this.meals.push(this.mealData);
      });
    });
  }

  ApplyFilter(event:Event){
      const inputElement = event.target as HTMLInputElement;
      const filteredValue = inputElement.value.replace(/[^a-zA-Z ]/g, '');
      inputElement.value = filteredValue;

      this.getMealsByName(inputElement.value);

  }
}
