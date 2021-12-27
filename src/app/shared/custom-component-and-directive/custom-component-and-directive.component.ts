import { Component, EventEmitter } from '@angular/core';

export enum Mood {
  Red = 'red',
  Green = 'green',
}

@Component({
  selector: 'app-custom-component-and-directive',
  templateUrl: './custom-component-and-directive.component.html',
  styleUrls: ['./custom-component-and-directive.component.scss'],
})
export class CustomComponentAndDirectiveComponent {
  /* Reference to the Enum to be used in the template */
  readonly moodRef = Mood;
  disable: boolean = false;
  selected: Mood = Mood.Green;

  /* Simulating an standard output of a component */
  onChange: EventEmitter<Mood> = new EventEmitter();

  updateState(selectedItem: Mood): void {
    this.selected = selectedItem; // Updating internal state
    this.onChange.emit(this.selected); // 'publish' the new state
  }
}
