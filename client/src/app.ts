import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Items} from './items/items.component';
import {Widgets} from './widgets/widgets.component';
import {Demo} from './demo/demo.component';

@Component({
  selector: 'my-app',
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/items', name: 'Items', component: Items, useAsDefault: true},
  {path: '/widgets', name: 'Widgets', component: Widgets},
  {path: '/demo/...', name: 'Demo', component: Demo}
])
export class App {
  constructor(private _router: Router) {};
  links = {
    items: ['Items'],
    widgets: ['Widgets'],
    demo: ['Demo']
  }
  navigateToDemo() {
    this._router.navigate(this.links.demo);
  }
}
