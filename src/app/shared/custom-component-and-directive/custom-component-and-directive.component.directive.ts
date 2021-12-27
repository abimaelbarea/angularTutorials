import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Directive, OnDestroy, forwardRef } from '@angular/core';
import { Subject, filter, takeUntil } from 'rxjs';

import { CustomComponentAndDirectiveComponent } from './custom-component-and-directive.component';

@Directive({
  // Indicates the component that the directive is used on
  selector: 'app-custom-component-and-directive',
  providers: [
    // This part is very important to register the class as a ControlValueAccessor one
    {
      provide: NG_VALUE_ACCESSOR,
      // This reference the class that implements Control Value Accessor
      useExisting: forwardRef(() => CustomComponentDirective),
      multi: true,
    },
  ],
})
export class CustomComponentDirective
  implements ControlValueAccessor, OnDestroy
{
  private readonly destroyed$ = new Subject<void>();

  /**
   * @param element Reference to the component instance
   */
  constructor(private readonly element: CustomComponentAndDirectiveComponent) {
    this.listenComponentChanges();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  /**
   * Subscribes to the component output and updates the internal state
   */
  private listenComponentChanges(): void {
    if (!this.element) {
      return;
    }

    /**
     * Event emitter is an Observable that emits events.
     *
     * Take a look on the definition:
     *  - export declare interface EventEmitter<T> extends Subject<T> { }
     * */
    this.element.onChange
      .pipe(
        filter(() => this.onChange !== null), // check that we have the correct ref to the callback
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
    this.element.selected = obj; // Updating component internal state
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
    this.element.disable = isDisabled; // Updating component status
  }
}
