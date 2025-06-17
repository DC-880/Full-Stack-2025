import { Injectable } from '@angular/core';
import { PersonInterface } from './person-interface';

@Injectable({
  providedIn: 'root'
})
export class Person {

  constructor() { }
  persons:PersonInterface[] = [
    { id: 1, name: "Harsh", age: 29 }, 
    { id: 2, name: "John", age: 52 }, 
    { id: 3, name: "Bill", age: 78 },
   
  ];

 person =  { id: 4, name: "Gordon", age: 34};

customer: PersonInterface = {id:5, name: "jeremy", age:33};


  getPersons() {
    return this.persons;
  }
}
