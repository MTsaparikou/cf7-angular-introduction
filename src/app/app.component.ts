import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PersonTableComponent } from './componets/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Magda';
  
  // Step 1: One way binding of data
   person = {
    givenName: 'Magda',
    surName: 'Tsaparikou',
    age:25,
    email: 'mtsaparikou@aueb.gr'
  }

  // Step 3: Component Input
person0: Person = { 
  givenName: 'Georgia',
  surName: 'Tsaparikou',
  age:27,
  email: 'gtsaparikou@aueb.gr',
  address: "Athens, Greece"
}
person1: Person = {
givenName: 'John',
surName: 'Doe',
age: 32,
email: 'john1@example.com',
address: "New York, USA"
}

users: Person[] = [
  {
    "givenName": "Aubert",
    "surName": "Carleman",
    "email": "acarleman0@1688.com",
    "age": 1,
    "address": "Suite 30"
  }, {
    "givenName": "Andria",
    "surName": "Thomason",
    "email": "athomason1@usatoday.com",
    "age": 2,
    "address": "Room 321"
  }, {
    "givenName": "Donielle",
    "surName": "Drover",
    "email": "ddrover2@list-manage.com",
    "age": 3,
    "address": "11th Floor"
  }, {
    "givenName": "Clari",
    "surName": "Biset",
    "email": "cbiset3@va.gov",
    "age": 4,
    "address": "Apt 1870"
  }, {
    "givenName": "Niko",
    "surName": "Bontein",
    "email": "nbontein4@latimes.com",
    "age": 5,
    "address": "15th Floor"
  }, {
    "givenName": "Dev",
    "surName": "Cawcutt",
    "email": "dcawcutt5@hhs.gov",
    "age": 6,
    "address": "Room 1855"
  }, {
    "givenName": "Gretal",
    "surName": "Danigel",
    "email": "gdanigel6@about.com",
    "age": 7,
    "address": "PO Box 83700"
  }, {
    "givenName": "Dedra",
    "surName": "Posthill",
    "email": "dposthill7@seattletimes.com",
    "age": 8,
    "address": "Room 732"
  }, {
    "givenName": "Andonis",
    "surName": "Ludovici",
    "email": "aludovici8@nps.gov",
    "age": 9,
    "address": "15th Floor"
  }, {
    "givenName": "Jaime",
    "surName": "Eustice",
    "email": "jeustice9@cnbc.com",
    "age": 10,
    "address": "PO Box 47094"
  }, {
    "givenName": "Corine",
    "surName": "Urwin",
    "email": "curwina@typepad.com",
    "age": 11,
    "address": "10th Floor"
  }, {
    "givenName": "Shandeigh",
    "surName": "Youngman",
    "email": "syoungmanb@e-recht24.de",
    "age": 12,
    "address": "PO Box 57749"
  }, {
    "givenName": "Allegra",
    "surName": "Izatson",
    "email": "aizatsonc@example.com",
    "age": 13,
    "address": "PO Box 51464"
  }, {
    "givenName": "Clemmie",
    "surName": "Oulett",
    "email": "coulettd@ow.ly",
    "age": 14,
    "address": "7th Floor"
  }, {
    "givenName": "Hinda",
    "surName": "McCloughen",
    "email": "hmccloughene@yale.edu",
    "age": 15,
    "address": "Room 1808"
  }, {
    "givenName": "Jorry",
    "surName": "Storck",
    "email": "jstorckf@theguardian.com",
    "age": 16,
    "address": "20th Floor"
  }, {
    "givenName": "Sidoney",
    "surName": "Odeson",
    "email": "sodesong@theguardian.com",
    "age": 17,
    "address": "Suite 87"
  }, {
    "givenName": "Pooh",
    "surName": "McComas",
    "email": "pmccomash@ucoz.ru",
    "age": 18,
    "address": "Room 1639"
  }, {
    "givenName": "Inessa",
    "surName": "Tomsu",
    "email": "itomsui@freewebs.com",
    "age": 19,
    "address": "Room 392"
  }, {
    "givenName": "Talbot",
    "surName": "Demead",
    "email": "tdemeadj@ask.com",
    "age": 20,
    "address": "Room 32"
  }]
  
  

}