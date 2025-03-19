import { Component } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [RouterLink],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
}) 
export class MealsComponent   {

  categories:any;
  meals:any;

  constructor(private _MealsService:MealsService,private _ActivatedRoute:ActivatedRoute ){}

  ngOnInit():void{
    if(typeof document!='undefined'){

      this._MealsService.getAllCategories().subscribe((res)=>{
        this.categories=res.meals;
      });

      this ._ActivatedRoute.paramMap.subscribe((params)=>{
        const categoryName=params.get('categoryName');

        if(categoryName){
            this._MealsService.getMealsByCategory(categoryName).subscribe((resp)=>{
              console.log(resp)
          this.meals=resp.meals;
        });}
      
  
      })

    }
  }

}
