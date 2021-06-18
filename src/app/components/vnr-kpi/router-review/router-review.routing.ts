import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: ':slug',
    component: ArticleDetailComponent,
  },
  {
    path: 'router-review',
    component: ArticleListComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
// = RouterModule.forChild(routes);
export class RouterReviewRoutes {}
