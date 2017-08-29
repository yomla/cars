import { Injectable } from '@angular/core';
import { Cars } from '../models/cars.model';

@Injectable()
export class CarService {

  private cars = [
    {
      id: 1,
      mark: 'BMW',
      model: 'X4',
      year: 2015,
      maxSpeed: 300,
      isAutomatic: 'Yes',
      engine: 'Diesel',
      numberOfDoors: 4
    },
    {
      id: 2,
      mark: 'Audi',
      model: 'A6',
      year: 2014,
      maxSpeed: 280,
      isAutomatic: 'Yes',
      engine: 'Diesel',
      numberOfDoors: 4
    },
    {
      id: 3,
      mark: 'Mercedes',
      model: 'GLA',
      year: 2015,
      maxSpeed: 260,
      isAutomatic: 'Yes',
      engine: 'Diesel',
      numberOfDoors: 3
    }



  ];
  constructor() {}

  public getCars(){
    return this.cars;
  }

}
