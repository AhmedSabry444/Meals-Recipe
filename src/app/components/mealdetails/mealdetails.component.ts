import { Component } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mealdetails',
  imports: [],
  templateUrl: './mealdetails.component.html',
  styleUrl: './mealdetails.component.css'
})
export class MealdetailsComponent {

  mealDetails:any

  constructor(private _MealsService:MealsService,private _ActivatedRoute:ActivatedRoute ){}

  ngOnInit():void{
    
    if(typeof document != 'undefined'){

      this._ActivatedRoute.paramMap.subscribe((params)=>{
        const mealId =params.get('mealId')
        if(mealId){
          this._MealsService.getMealdetails(mealId).subscribe(res=>{
        this.mealDetails=res.meals[0];
        })
        }
      })
      
    }
  }

  getIngredient(mealDetails:any):any{
    const ingredients =[];
    for(let i=1; i<=20;i++){
      const ingredient = `strIngredient${i}`
      const measure = `strMeasure${i}`

      if(mealDetails[ingredient]){
        ingredients.push({Ingredient:mealDetails[ingredient],measure:mealDetails[measure]})
      }else{
        return ingredients;
      }
    }
  }

  goYoutube(mealDetails:any):any{
    const Youtube = mealDetails.strYoutube
    window.open(Youtube);
  }

  goSource(mealDetails:any):any{
    const Source = mealDetails.strSource
    window.open(Source);
  }

  
}
