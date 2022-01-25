import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-simple-content',
  templateUrl: './simple-content.component.html',
  styleUrls: ['./simple-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
