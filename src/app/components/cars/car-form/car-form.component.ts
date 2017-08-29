import { Component, OnInit } from '@angular/core';
import { Cars } from '../../../shared/models/cars.model';
import { CarService } from '../../../shared/services/car.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  private newCar: Cars = new Cars();
  public years: number[] = [];

  constructor(private carService: CarService) { 
      for (let i = 1990; i < 2018; i++) {
            this.years.push(i)
          }
      }

  ngOnInit() {
  }

  addCars(newCar){
    this.carService.addCar(newCar);         
  }

  preview(preview){
    alert("Mark: " + preview.mark + "\n" +
          "Model: " + preview.model + "\n" +
          "Year: " + preview.year + "\n" +
          "Max Speed: " + preview.maxSpeed + "\n" +
          "Is Automatic: " + preview.isAutomatic + "\n" +
          "Engine: " + preview.engine + "\n" +
          "Doors: " + preview.numberOfDoors + "\n"  );
  }

 
}
