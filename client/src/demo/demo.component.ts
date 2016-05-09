import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router'

@Component({
  selector: 'child',
  template: `<div>Child</div>`
})
class Child {}

@Component({
  selector: 'demo',
  template: `<div class='demo'>
    <h1>Hello Demo!</h1>
    <router-outlet></router-outlet>
  </div>`
})
@RouteConfig([
  {path: '/child', name: 'Child', component: Child, useAsDefault: true}
])
export class Demo {}
