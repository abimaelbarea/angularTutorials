import { Component } from '@angular/core';
import { Person } from './row/row.component';

@Component({
  selector: 'app-component-as-directive',
  templateUrl: './component-as-directive.component.html',
  styleUrls: ['./component-as-directive.component.scss'],
})
export class ComponentAsDirectiveComponent {
  readonly people: Person[] = [
    {
      name: 'John',
      surname: 'Doe',
      birthDate: new Date(1980, 1, 1),
    },
    {
      name: 'Jane',
      surname: 'Doe',
      birthDate: new Date(1980, 2, 1),
    },
    {
      name: 'Jack',
      surname: 'Doe',
      birthDate: new Date(1980, 3, 1),
    },
  ];

}
