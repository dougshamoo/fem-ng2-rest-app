import {Component} from 'angular2/core';
import {WidgetsService} from './widgets.service.ts';

@Component({
  selector: 'widgets',
  templateUrl: 'widgets.component.html',
  providers: [WidgetsService]
})
export class Widgets {
  widgets: any[];
  constructor(_widgetsService: WidgetsService) {
    this.widgets = _widgetsService.widgets;
  }
}
