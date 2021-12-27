import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export enum Mood {
  Red = 'red',
  Green = 'green',
}

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.scss'],
  providers: [
    // This part is very important to register the class as a ControlValueAccessor one
    {
      provide: NG_VALUE_ACCESSOR,
      // This reference the class that implements Control Value Accessor
      useExisting: forwardRef(() => CustomComponentComponent),
      multi: true,
    },
  ],
})
export class CustomComponentComponent implements ControlValueAccessor {
  /* Reference to the Enum to be used in the template */
  readonly moodRef = Mood;
  disable: boolean = false;
  selected: Mood = Mood.Green;

  updateState(selectedItem: Mood): void {
    this.selected = selectedItem; // Updating internal state
    this.onChange(this.selected); // 'publish' the new state
  }

  /***********************************************************************
   * Control Value Accessor Implementation
   ***********************************************************************/

  private onChange: any;
  private onTouch: any;

  // Invoked by angular - update internal state
  writeValue(obj: any): void {
    this.selected = obj;
  }

  // Invoked by angular - callback function for changes
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Invoked by angular - callback function for touch events
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  // Invoked by angular - update disabled state
  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }
}
