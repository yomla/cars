import { Component, OnInit } from '@angular/core';
import { CarService } from '../../shared/services/car.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  private allCars: any[] = [];
  
  constructor(private cars: CarService) {}

  ngOnInit() {
    this.allCars = this.cars.getCars();
  }

  
}
