import {Component, Input, Output} from 'angular2/core';
import {Widget} from './widgets.service';

@Component({
  selector: 'widget-detail',
  template: `
  <div class="item-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text"
        *ngIf="widget">Editing {{widget.name}}</h2>
      <h2 class="mdl-card__title-text"
        *ngIf="!widget">Create New Widget</h2>
    </div>
    <div class="mdl-card__supporting-text"
      *ngIf="widget">
      {{widget.description}}
      <hr>
      Let's pretend that we are editing this widget...
    </div>
    <div class="mdl-card__supporting-text"
      *ngIf="!widget">
      We're going make a new widget soon...
    </div>
  </div>
  `,
})
export class WidgetDetail {
  @Input() widget: Widget;
}
