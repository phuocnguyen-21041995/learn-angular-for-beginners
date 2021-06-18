import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
interface ItemData {
  id: number;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-vnr-kpi',
  templateUrl: './vnr-kpi.component.html',
  styleUrls: ['./vnr-kpi.component.scss'],
})
export class VnrKpiComponent implements OnInit {
  listOfData;
  dataTest: Observable<any> = of(VNR_KPI_Data);
  constructor() {}

  ngOnInit() {
    this.dataTest.subscribe((data) => {
      this.listOfData = data;
    });
  }
}
const VNR_KPI_Data = [
  {
    id: 1,
    target:
      ' Các khái niệm chính trong Angular (Components, Templates, Directives, Dependency Injection)',
    future: '',
    status: '',
    notes: '',
    link: '',
  },
  {
    id: 4,
    target: '',
    future: 'Components',
    status: 'Done',
    notes: '',
    link: 'https://github.com/phuocnguyen210495/angular-interview-questions-and-Answers#what-are-components',
  },
  {
    id: 4,
    target: '',
    future: 'Templates',
    status: 'Done',
    notes: '',
    link: 'https://github.com/phuocnguyen210495/angular-interview-questions-and-Answers#what-is-a-template',
  },
  {
    id: 4,
    target: '',
    future: 'Directives',
    status: 'Done',
    notes: '',
    link: 'http://localhost:4200/attribute-directive',
  },
  {
    id: 4,
    target: '',
    future: 'Dependency Injection',
    status: 'Done',
    notes: '',
    link: 'https://github.com/phuocnguyen210495/angular-interview-questions-and-Answers#what-is-dependency-injection-in-angular',
  },
  {
    id: 2,
    target:
      ' Các tính năng tích hợp (Routing & Navigation, Form, HTTPClient, i18n, Animation)',
    future: '',
    status: '',
    notes: '',
    link: '',
  },
  {
    id: 4,
    target: '',
    future: 'Form',
    status: 'Done',
    notes: '',
    link: '',
  },
  {
    id: 4,
    target: '',
    future: 'Routing & Navigation',
    status: 'Done',
    notes: '',
    link: '',
  },
  {
    id: 4,
    target: '',
    future: 'HTTPClient',
    status: 'Done',
    notes: '',
    link: '',
  },
  {
    id: 4,
    target: '',
    future: 'i18n',
    status: 'Done',
    notes: '',
    link: '',
  },
  {
    id: 4,
    target: '',
    future: 'Animation',
    status: 'Done',
    notes: '',
    link: '',
  },
  {
    id: 3,
    target:
      ' Best Practice (Security, Accessibility, Keeping Up-to-Date, Property Binding Best Practices)',
    future: '',
    status: '',
    notes: '',
    link: '',
  },
  {
    id: 4,
    target: '',
    future: 'Security',
    status: 'Done',
    notes: '',
    link: '',
  },
  {
    id: 5,
    target: '',
    future: 'Accessibility',
    status: 'Done',
    notes: '',
    link: '',
  },
  {
    id: 6,
    target: '',
    future: 'Keeping Up-to-Date',
    status: 'Done',
    notes: '',
    link: '',
  },
  {
    id: 7,
    target: '',
    future: 'Property Binding Best Practices',
    status: 'Done',
    notes: '',
    link: '',
  },
];
