import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./public/components/header/header.component";
import {FooterComponent} from "./public/components/footer/footer.component";
import {MealCardComponent} from "./meal/components/meal-card/meal-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MealCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PC1';
}
