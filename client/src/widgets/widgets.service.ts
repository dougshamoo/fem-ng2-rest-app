import {Injectable} from 'angular2/core';

@Injectable()
export class WidgetsService {
  widgets = [
    {name: 'Widget 1', description: 'This is Widget 1'},
    {name: 'Widget 2', description: 'This is Widget 2'},
    {name: 'Widget 3', description: 'This is Widget 3'}
  ];
}