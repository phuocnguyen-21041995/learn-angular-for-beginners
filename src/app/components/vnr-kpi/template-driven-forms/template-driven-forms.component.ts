import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss'],
})
export class TemplateDrivenFormsComponent implements OnInit {
  userInfo = {
    userName: 'tiepphan',
    password: '',
    rememberMe: true,
  };
  constructor() {}

  ngOnInit() {}
  onSubmit(form: NgForm): void {
    console.log(form);
  }
}
