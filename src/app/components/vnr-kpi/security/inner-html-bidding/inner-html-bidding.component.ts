import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-html-bidding',
  templateUrl: './inner-html-bidding.component.html',
  styleUrls: ['./inner-html-bidding.component.scss'],
})
export class InnerHtmlBiddingComponent implements OnInit {
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  constructor() {}

  ngOnInit() {}
}
