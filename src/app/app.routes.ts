import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { MealLayoutComponent } from './components/meal-layout/meal-layout.component';
import { MealsComponent } from './components/meals/meals.component';
import { MealdetailsComponent } from './components/mealdetails/mealdetails.component';

export const routes: Routes = [
{ path:'',component:MealLayoutComponent ,children:[
    {
        path:'',redirectTo:'category/all',pathMatch:'full'
    },
    {
    path:'category/:categoryName', component:MealsComponent,
},
{
    path:'mealdetails/:mealId', component:MealdetailsComponent,
},

]}
];
