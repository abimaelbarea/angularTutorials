import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Directive, OnDestroy, forwardRef } from '@angular/core';
import { Subject, filter, takeUntil } from 'rxjs';

import { CustomComponentAndDirectiveComponent } from './custom-component-and-directive.component';

@Directive({
  selector: 'app-custom-component-and-directive',
  providers: [
    // This part is very important to register the component as a ControlValueAccessor one
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomComponentDirective),
      multi: true,
    },
  ],
})
export class CustomComponentDirective
  implements ControlValueAccessor, OnDestroy
{
  private readonly destroyed$ = new Subject<void>();

  constructor(private readonly element: CustomComponentAndDirectiveComponent) {
    this.listenComponentChanges();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private listenComponentChanges(): void {
    if (!this.element) {
      return;
    }

    this.element.onChange
      .pipe(
        filter(() => this.onChange !== null), // check that we have the correct ref
        takeUntil(this.destroyed$)
      )
      .subscribe((value) => {
        this.onChange(value);
      });
  }

  /***********************************************************************
   * Control Value Accessor Implementation
   ***********************************************************************/

  private onChange: any;
  private onTouch: any;

  // Invoked by angular - update internal state
  writeValue(obj: any): void {
    this.element.selected = obj;
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
    this.element.disable = isDisabled;
  }
}
