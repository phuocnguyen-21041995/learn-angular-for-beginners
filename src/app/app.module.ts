import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule, Actions } from '@ngrx/effects';
import { EmployeesEffects } from './store/employees/employees.effects';
import { employeeReducer } from './store/employees/employees.reducer';
import { VnrKpiComponent } from './components/vnr-kpi/vnr-kpi.component';
import { ShareModule } from './share.module';
import { AttributeDirectiveComponent } from './components/vnr-kpi/attribute-directive/attribute-directive.component';
import { HighlightDirective } from './components/vnr-kpi/attribute-directive/highlight.directive';
import { SecurityComponent } from './components/vnr-kpi/security/security.component';
import { InnerHtmlBiddingComponent } from './components/vnr-kpi/security/inner-html-bidding/inner-html-bidding.component';
import { BypassSecurityComponent } from './components/vnr-kpi/security/bypass-security/bypass-security.component';
import { AccessibilityComponent } from './components/vnr-kpi/accessibility/accessibility.component';
import { ProgressBarComponent } from './components/vnr-kpi/accessibility/progress-bar/progress-bar.component';
import { RouterReviewComponent } from './components/vnr-kpi/router-review/router-review.component';
import { ArticleDetailComponent } from './components/vnr-kpi/router-review/article-detail/article-detail.component';
import { ArticleListComponent } from './components/vnr-kpi/router-review/article-list/article-list.component';
import { RouterReviewRoutes } from './components/vnr-kpi/router-review/router-review.routing';
import { ArticleService } from './components/vnr-kpi/router-review/article.service';
import { TemplateDrivenFormsComponent } from './components/vnr-kpi/template-driven-forms/template-driven-forms.component';
import { PokemonModule } from './components/pokemon/pokemon.module';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeListComponent,
    VnrKpiComponent,
    AttributeDirectiveComponent,
    HighlightDirective,
    SecurityComponent,
    InnerHtmlBiddingComponent,
    BypassSecurityComponent,
    AccessibilityComponent,
    ProgressBarComponent,
    RouterReviewComponent,
    ArticleDetailComponent,
    ArticleListComponent,
    TemplateDrivenFormsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    NzIconModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('employees', employeeReducer),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([EmployeesEffects]),
    NzDrawerModule,
    ShareModule,
    FormsModule,
    RouterReviewRoutes,
    PokemonModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, ArticleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
