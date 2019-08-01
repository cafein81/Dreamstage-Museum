import { Component, Input } from '@angular/core';
import { VerticalTabsService } from './vertical-tabs.service';


@Component({
  selector: 'ng-vertical-tab',
  templateUrl: './vertical-tab.component.html',
  styles: [`
    .pane {
      padding: 1em;
    }
  `]
})
export class VerticalTabComponent {
  @Input() tabTitle: string;
  @Input() active = false;
  @Input() template;
  @Input() dataContext;
  @Input() isCloseable = false;

  constructor(public tabsService: VerticalTabsService) {
  }
}
