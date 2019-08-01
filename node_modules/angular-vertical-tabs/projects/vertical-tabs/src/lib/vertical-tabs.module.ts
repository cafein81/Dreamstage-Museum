import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatDividerModule, MatListModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { VerticalTabsComponent } from './vertical-tabs.component';
import { VerticalTabComponent } from './vertical-tab.component';
import { DynamicTabAnchorDirective } from './dynamic-tab-anchor.directive';
import { VerticalTabsService } from './vertical-tabs.service';


@NgModule({
  imports: [
    CommonModule, FormsModule,
    FlexLayoutModule,
    MatListModule, MatDividerModule, MatButtonModule
  ],
  entryComponents: [VerticalTabComponent],
  declarations: [DynamicTabAnchorDirective, VerticalTabComponent, VerticalTabsComponent],
  exports: [VerticalTabComponent, VerticalTabsComponent]
})
export class VerticalTabsModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: VerticalTabsModule, providers: [VerticalTabsService] };
  }
}
