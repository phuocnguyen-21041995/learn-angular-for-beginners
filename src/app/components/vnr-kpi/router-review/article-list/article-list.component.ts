import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles$: Observable<Article[]>;
  constructor(private _api: ArticleService) {}

  ngOnInit() {
    this.articles$ = this._api.getArticles();
    console.log(this.articles$);
  }
}
