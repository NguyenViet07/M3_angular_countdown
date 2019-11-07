import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-quy',
  template: '<h1>{{message}}</h1>',
})

export class MessageComponent {

  @Input() message = 'Hello';

  ngOnInit() {
    console.log('MessageComponent started !');
  }

  ngOnDestroy() {
    console.log('MessageComponent ended !');
  }
}
