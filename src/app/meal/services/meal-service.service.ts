import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {
  baseUrl: string = environment.baseUrl; // Muestra una comida random
  baseUrl2: string = environment.baseUrl2; // Muestra una comida por nombre ingresado por el usuario

  constructor(private Http:HttpClient) { }

  getMeals(){
    return this.Http.get<any>(this.baseUrl);
  }
  getMealsByName(name:string){
    return this.Http.get<any>(`${this.baseUrl2}/search.php?s=${name}`);
  }
}
