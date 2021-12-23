import { Component } from '@angular/core';
import { Mood } from '../shared/custom-component/custom-component.component';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss'],
})
export class TemplateFormsComponent {
  selectedMood: Mood = Mood.Green;
  disabled: boolean = false;

  selectedMood2: Mood = Mood.Green;
  disabled2: boolean = false;

  /**
   * Updating the disabled/enabled state of the form item
   */
  updateComponent(): void {
    this.disabled = !this.disabled;
    this.disabled2 = !this.disabled2;
  }
}
