import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponent } from './components/cars/cars.component';
import { RouterModule, Routes } from '@angular/router';
import { CarService } from './shared/services/car.service'

const appRoutes = [
  {
    path: '',
    redirectTo: '/cars',
    pathMatch: 'full'
  },

  {
    path: 'cars',
    component: CarsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
