import { Component, inject } from '@angular/core';
import { Homedetails } from './homedetails/homedetails';
import { Person } from '../person';
import { PersonInterface } from '../person-interface';

@Component({
  selector: 'app-home',
  imports: [Homedetails],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  imageURL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZ7yaZvSEYwRxWMr6zGc05xNWRtoW_1XxMvqOF4XpEc3_Rz9UZp-bPRA5IP-_Bchu3LH147UJLt1Fui_LRDGYYTcxbfAB8EeiAOeikpQAiODD3Qfpyy2UTe79ObLf5WLZd8Zy2_Cy4P8OP/s1600/Untitled.jpg"

  personService = inject(Person);

  customer:PersonInterface = this.personService.customer;
}
