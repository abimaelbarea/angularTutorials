import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export enum Mood {
  Red = 'red',
  Yellow = 'yellow',
  Green = 'green',
}

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
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
    // Updating the internal state
    this.selected = selectedItem;
    // Invoke the onChange callback to 'publish' the new state
    this.onChange(this.selected);
  }

  /***********************************************************************
   * Control Value Accessor Implementation
   ***********************************************************************/

  private onChange: any;
  private onTouch: any;

  writeValue(obj: any): void {
    this.selected = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }
}
