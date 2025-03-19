import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MealLayoutComponent } from './components/meal-layout/meal-layout.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
