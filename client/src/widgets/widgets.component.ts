import {Component} from 'angular2/core';
import {WidgetsList} from './widgets-list.component';
import {WidgetDetail} from './widget-detail.component';
import {Widget, WidgetsService} from './widgets.service.ts';

@Component({
  selector: 'widgets',
  template: `
  <div class="mdl-grid widgets">
    <div class="mdl-cell mdl-cell--6-col">
      <widgets-list [widgets]="widgets"
        (selected)="selectWidget($event)">
      </widgets-list>
    </div>
    <div class="mdl-cell mdl-cell--6-col">
      <widget-detail [widget]="selectedWidget"
        (saved)="saveWidget($event)"
        (cancelled)="cancelWidget($event)">
      </widget-detail>
    </div>
  </div>
  `,
  styles: [`
    .widgets {
      padding: 20px;
    }
  `],
  providers: [WidgetsService],
  directives: [WidgetsList, WidgetDetail]
})
export class Widgets {
  widgets: Widget[];
  selectedWidget: Widget;
  constructor(_widgetsService: WidgetsService) {
    this.widgets = _widgetsService.widgets;
  }
  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }
  saveWidget(widget: Widget) {
    console.log(widget.name, 'has been saved.');
  }
  cancelWidget() {
    console.log("Cancelled.");
  }

}
