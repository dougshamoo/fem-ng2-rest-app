import {Component} from 'angular2/core';
import {WidgetsService} from './widgets.service.ts';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'widgets',
  template: require('./widgets.component.html'),
  providers: [WidgetsService]
})
export class Widgets {
  widgets: any[];
  activeWidget = {};
  constructor(_widgetsService: WidgetsService, private _params: RouteParams) {
    this.widgets = _widgetsService.widgets;
    this.activeWidget = this.widgets.find(widget =>
      widget.id === parseInt(this._params.get('id'))
    );
  }
}
