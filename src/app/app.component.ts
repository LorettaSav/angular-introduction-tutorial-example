import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'My fairhouse';
  selectedLocation: HousingLocation | undefined;


  housingLocationList: HousingLocation[] = [
    {
      name: 'whatever',
      city: 'whateverCity',
      state: 'whateverState',
      photo: '/assets/housing-1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: false,
    },
    {
      name: 'whatever1',
      city: 'whateverCity1',
      state: 'whateverState1',
      photo: '/assets/housing-2.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      name: 'whatever2',
      city: 'whateverCity2',
      state: 'whateverState2',
      photo: '/assets/housing-3.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
  ];

  updateSelectedLocation(housing: HousingLocation) {
    this.selectedLocation = housing;
   
 }
}
