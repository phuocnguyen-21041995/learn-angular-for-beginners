import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterExitDemoComponent } from './enter-exit.demo.component';
import { ContainersModule } from 'src/app/shared/components/containers';
import { ButtonsModule } from 'src/app/shared/components/buttons';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  declarations: [EnterExitDemoComponent],
  exports: [EnterExitDemoComponent],
  imports: [CommonModule, ContainersModule, ButtonsModule, ShareModule],
})
export class EnterExitDemoModule {
  static entry = EnterExitDemoComponent;
}
