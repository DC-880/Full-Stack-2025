import { Component } from '@angular/core';
import { HouseDetails } from "../house-details/house-details";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-houses',
  imports: [HouseDetails, FormsModule],
  templateUrl: './houses.html',
  styleUrl: './houses.css'
})
export class Houses {
  houses = [
    {
      id:1,
      name: "House 1",
      city: "Oklahoma"
    },

    {
      id: 2,
      name: "House 2",
      city: "Denver"
    }
  ]

  house = {id: 3, name: "House 3", city: "New York"}; 

  event_name = "";

  childFromVal(event:string) {
    console.log(event);
    this.event_name = event;
  }
}
