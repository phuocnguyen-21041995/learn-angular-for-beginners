import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share.module';
import { ContainersModule } from 'src/app/shared/components/containers';
import { StateChangeDemoComponent } from './state-change.demo.component';

@NgModule({
  declarations: [StateChangeDemoComponent],
  exports: [StateChangeDemoComponent],
  imports: [CommonModule, ShareModule, ContainersModule],
})
export class StateChangeDemoModule {
  static entry = StateChangeDemoComponent;
}
