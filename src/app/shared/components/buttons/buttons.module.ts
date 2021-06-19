import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonBasicComponent } from './button-basic/button-basic.component';
import { ShareModule } from 'src/app/share.module';

const COMPONENTS = [ButtonBasicComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MatButtonModule, ShareModule],
  exports: [...COMPONENTS],
})
export class ButtonsModule {}
