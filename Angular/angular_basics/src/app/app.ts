import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Person } from './person';
import { PersonInterface } from './person-interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, NgClass, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  constructor(personService: Person) {
    this.persons = personService.getPersons();
  } 
  // OR
  personService: Person = inject(Person);
  persons = this.personService.getPersons();

  person = this.personService.person;
  
  protected title = 'angular_basics';
  my_name: string = "Dan";
  my_age: number = 27;

  


  color_purple = "bg_color";
  color_yellow = "green";
  errors = true;

  isDisabled = false;

  img1 = "https://lumiere-a.akamaihd.net/v1/images/hb_disneyplus_skywalkersaga_mobile_19267_e964ed2c.jpeg?region=0,0,640,400";
  img2 = "https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg"
  disabled(val: boolean) {
    this.isDisabled = val;

  }
};