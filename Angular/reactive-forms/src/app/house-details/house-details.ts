import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { HouseInterface } from '../house-interface';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-house-details',
  imports: [FormsModule],
  templateUrl: './house-details.html',
  styleUrl: './house-details.css'
})
export class HouseDetails {
  @Input() all_houses!: HouseInterface[];

  @Input() one_house!: HouseInterface;

  @Input() house_description = '';

  @Output() newEvent = new EventEmitter();


  ngOnChanges(changes: SimpleChanges){
    console.log(changes['house_description']);
  }

  submitVal(value:string) {
    if(value) {
      console.log('working');
      this.newEvent.emit(value);
      
    }
    
  }
}
