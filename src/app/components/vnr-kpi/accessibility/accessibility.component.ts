import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss'],
})
export class AccessibilityComponent implements OnInit {
  constructor() {}
  progress = 0;

  setProgress($event: Event) {
    this.progress = +($event.target as HTMLInputElement).value;
  }
  ngOnInit() {}
}
