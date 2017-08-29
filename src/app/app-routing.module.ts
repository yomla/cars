import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from './components/cars/cars.component';
import { CarFormComponent } from './components/cars/car-form/car-form.component';

const appRoutes = [
    {
      path: '',
      redirectTo: '/cars',
      pathMatch: 'full'
    },
    {
      path: 'cars',
      component: CarsComponent,     
    },
    { path: 'add',
      component:CarFormComponent
    }      
  ]

  @NgModule({
	imports: [
		RouterModule.forRoot(
  			appRoutes
  		),
	],

	exports: [
		RouterModule
	]
})

export class AppRoutingModule {}