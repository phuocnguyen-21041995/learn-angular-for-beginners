import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { ToolbarComponent } from './toolbar';
import { SidenavComponent } from './sidenav';
import { MatButtonModule } from '@angular/material/button';
// import { FlexLayoutModule } from '@angular/flex-layout';

const COMPONENTS = [ToolbarComponent, SidenavComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    // FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [...COMPONENTS],
})
export class NavigationsModule {}
