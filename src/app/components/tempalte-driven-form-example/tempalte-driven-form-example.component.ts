import { Component } from '@angular/core';
import { EpersonTemplateDrivenFormComponent } from '../eperson-template-driven-form/eperson-template-driven-form.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';

@Component({
  selector: 'app-tempalte-driven-form-example',
  imports: [EpersonTemplateDrivenFormComponent, PersonTableComponent, SimpleDatatableComponent],
  templateUrl: './tempalte-driven-form-example.component.html',
  styleUrl: './tempalte-driven-form-example.component.css'
})
export class TempalteDrivenFormExampleComponent {

}
