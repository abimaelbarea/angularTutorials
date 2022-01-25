import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-multi-content',
  templateUrl: './multi-content.component.html',
  styleUrls: ['./multi-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
