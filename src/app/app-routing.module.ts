import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { AccessibilityComponent } from './components/vnr-kpi/accessibility/accessibility.component';
import { AttributeDirectiveComponent } from './components/vnr-kpi/attribute-directive/attribute-directive.component';
import { ArticleDetailComponent } from './components/vnr-kpi/router-review/article-detail/article-detail.component';
import { ArticleListComponent } from './components/vnr-kpi/router-review/article-list/article-list.component';
import { RouterReviewComponent } from './components/vnr-kpi/router-review/router-review.component';
import { SecurityComponent } from './components/vnr-kpi/security/security.component';
import { TemplateDrivenFormsComponent } from './components/vnr-kpi/template-driven-forms/template-driven-forms.component';
import { VnrKpiComponent } from './components/vnr-kpi/vnr-kpi.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'vnr-kpi' },
  {
    path: 'vnr-kpi',
    component: VnrKpiComponent,
    children: [],
  },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'attribute-directive', component: AttributeDirectiveComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'accessibility', component: AccessibilityComponent },
  {
    path: 'router-review',
    component: RouterReviewComponent,
    children: [
      {
        path: ':slug',
        component: ArticleDetailComponent,
      },
      {
        path: 'router-review',
        component: ArticleListComponent,
      },
    ],
  },
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
  { path: 'pokemon', component: PokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
