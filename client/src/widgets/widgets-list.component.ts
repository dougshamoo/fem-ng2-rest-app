import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Widget} from './widgets.service';
import {highlight} from '../shared/highlight.directive';

@Component({
  selector: 'widgets-list',
  template: `
    <div *ngFor="let widget of widgets"
      class="item-card mdl-card mdl-shadow--2dp"
      (click)="select(widget)"
      highlight [pos]="widget.id">
      <div *ngIf="selectedWidget === widget" class="mdl-card__title"
        style="background-color:red;">
        <h2 class="mdl-card__title-text">{{widget.name}}</h2>
      </div>
      <div *ngIf="selectedWidget !== widget" class="mdl-card__title">
        <h2 class="mdl-card__title-text">{{widget.name}}</h2>
      </div>
      <div class="mdl-card__supporting-text">
        {{widget.description}}
      </div>
    </div>
  `,
  styles: [`
    .item-card {
      transition: background-color .4s;
    }
  `],
  directives: [highlight]
})
export class WidgetsList {
  @Input() widgets: Widget[];
  @Output() selected: EventEmitter<Widget> = new EventEmitter();
  selectedWidget: Widget;

  select(widget: Widget) {
    this.selectedWidget = widget;
    this.selected.emit(widget);
  }
}
