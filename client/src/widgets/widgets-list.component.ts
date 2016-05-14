import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Widget} from './widgets.service';

@Component({
  selector: 'widgets-list',
  template: `
    <div *ngFor="let widget of widgets"
      class="item-card mdl-card mdl-shadow--2dp"
      (click)="selected.emit(widget)">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">{{widget.name}}</h2>
      </div>
      <div class="mdl-card__supporting-text">
        {{widget.description}}
      </div>
    </div>
  `
})
export class WidgetsList {
  @Input() widgets: Widget[];
  @Output() selected: EventEmitter<Widget> = new EventEmitter();
}
