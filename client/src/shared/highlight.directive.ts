import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
  selector: '[highlight]',
  host: {
    '(mouseenter)': 'highlightIt()',
    '(mouseleave)': 'removeHighlight()'
  }
})
export class highlight {
  @Input() pos: number;
  constructor(private _el: ElementRef) {}
  highlightIt() {
    console.log('Highlighting Widget', this.pos);
    this._el.nativeElement.style.backgroundColor = 'yellow';
  }
  removeHighlight() {
    this._el.nativeElement.style.backgroundColor = 'white';
  }
}
