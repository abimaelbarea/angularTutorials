import { Component, Input } from '@angular/core';

export interface Person {
  name: string;
  surname: string;
  birthDate: Date;
}

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent {

  @Input()
  person!: Person;
}
