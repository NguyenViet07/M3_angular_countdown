import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  isHidden = false;

  toggle() {
    this.isHidden = ! this.isHidden;
  }
}
