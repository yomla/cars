import { Injectable } from '@angular/core';
import { Cars } from '../models/cars.model';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class CarService {

  idCount: number = 3;

  private cars = [
                  new Cars (1, 'BMW', 'X4', 2015, 300, true, 'Diesel', 4 ),
                  new Cars (2, 'Audi', 'A6', 2014, 280, true, 'Diesel', 4 ),
                  new Cars (3, 'Mercedes', 'GLA', 2015, 260, true, 'Diesel', 4 )   
                 ];
  constructor(private router: ActivatedRoute,
    private routers: Router) {}

  public getCars(){
    return this.cars;
  }

  public idCounter() {
    return this.idCount++;
  }

  public addCar(newCar){
    let id = this.idCounter();
    let car = new Cars(id, newCar.mark, newCar.model, newCar.year, newCar.maxSpeed, newCar.isAutomatic, newCar.engine, newCar.numberOfDoors);
    this.cars.push(car);
    this.routers.navigate(['/cars']); 
    }

    public getCarById(id){
      return this.cars.find((car) => {
        return car['id'] == id;
      })
    }
 }


