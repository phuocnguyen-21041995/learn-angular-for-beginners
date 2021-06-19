import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  text = `trigger('enabledStateChange', [
  state(
    'default',
    style({
      opacity: 1,
    })
  ),
  state(
    'disabled',
    style({
      opacity: 0.5,
    })
  ),
  transition('* => *', [
    animate(
      '200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      style({ transform: 'scale(1.01)' })
    ),
    animate(
      '200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      style({ transform: 'scale(1)' })
    ),
    animate('300ms'),
  ]),
]),`;
  constructor() {}

  ngOnInit() {}
}
