import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Widget} from './widgets.service';

@Component({
  selector: 'widget-detail',
  template: `
  <div class="item-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text"
        *ngIf="selectedWidget.name">Editing {{selectedWidget.originalName}}</h2>
      <h2 class="mdl-card__title-text"
        *ngIf="!selectedWidget.name">Create New Widget</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <form novalidate (submit)="saved.emit(selectedWidget)">
        <div class="mdl-textfield mdl-js-textfield">
          <label>Widget Name</label>
          <input [(ngModel)]="selectedWidget.name"
            placeholder="Enter a name"
            class="mdl-textfield__input" type="text">
        </div>

        <div class="mdl-textfield mdl-js-textfield">
          <label>Item Description</label>
          <input [(ngModel)]="selectedWidget.description"
            placeholder="Enter a description"
            class="mdl-textfield__input" type="text">
        </div>

        <div class="mdl-card__actions">
            <button type="submit" (click)="cancelled.emit(selectedWidget)"
              class="mdl-button mdl-js-button mdl-js-ripple-effect">Cancel</button>
            <button type="submit"
              class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">Save</button>
        </div>

      </form>
    </div>
  </div>
  `,
})
export class WidgetDetail {
  originalName: string;
  selectedWidget: Widget;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set widget(widget: Widget) {
    if (widget) this.originalName = widget.name;
    this.selectedWidget = Object.assign({}, widget);
  }
}
