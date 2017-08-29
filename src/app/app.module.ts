import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponent } from './components/cars/cars.component';

import { CarService } from './shared/services/car.service';
import { CarFormComponent } from './components/cars/car-form/car-form.component'



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent,
    CarFormComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
