import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CityService} from './city.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { TextareaAutoresizeDirective } from './textarea-autoresize.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContainerComponent,
    HomeComponent,
    CalculatorComponent,
    TodoListComponent,
    FooterComponent,
    TextareaAutoresizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
