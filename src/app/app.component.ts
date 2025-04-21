import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './componets/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Magda';

  person = {
    givenName: 'Magda',
    surName: 'Tsaparikou',
    age:25,
    email: 'mtsaparikou@aueb.gr'
  }
}
