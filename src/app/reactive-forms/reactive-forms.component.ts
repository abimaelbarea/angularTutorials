import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { Mood } from './custom-component/custom-component.component';

enum Controls {
  Mood = 'mood',
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnDestroy {
  readonly controlsRef = Controls;
  readonly formGroup: FormGroup;
  private readonly componentDestroyed$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.buildForm();
    this.formSubscriptions(this.formGroup);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  /**
   * Updating the disabled/enabled state of the form control
   */
  updateComponent(): void {
    const control = this.formGroup.controls[Controls.Mood];
    const action = control.disabled ? 'enable' : 'disable';
    control[action]();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      [Controls.Mood]: new FormControl({
        value: Mood.Red,
        disabled: false,
      }),
    });
  }

  private formSubscriptions(form: FormGroup): void {
    form.valueChanges
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => {
        // Print the mood status
        console.info(
          'Disabled: ' + this.formGroup.controls[Controls.Mood].disabled
        );
        // Print the mood selection
        console.info(JSON.stringify(value.mood, null, 4));
      });
  }
}
