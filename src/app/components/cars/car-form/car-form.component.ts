import { Component, OnInit } from '@angular/core';
import { Cars } from '../../../shared/models/cars.model';
import { CarService } from '../../../shared/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  private newCar: Cars = new Cars();
  public years: number[] = [];
  private id;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private carService: CarService) { 
      for (let i = 1990; i < 2018; i++) {
            this.years.push(i)
          }
      }

  ngOnInit() {
    this.route.params.subscribe(() => {
      const id = parseInt(this.route.snapshot.paramMap.get('id'));

      this.newCar = this.carService.getCarById(id) || new Cars();
    });
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
