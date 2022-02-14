import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { TodoListComponent } from './todo-list/todo-list.component';
const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:"weather", component:MainContainerComponent},
  {path:"calculator", component:CalculatorComponent},
  {path:"todo-list",component:TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
