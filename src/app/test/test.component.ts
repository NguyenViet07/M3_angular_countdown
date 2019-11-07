import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {
  private intervalID;
  message = '';
  remainingTime: number;

  @Input() second;

  constructor() {
    console.log('TestComponent constructor()' + this.second);
  }

  ngOnInit(): void {
    console.log('TestComponent ngOnInit()' + this.second);
    this.start();
    this.reset();
  }

  clearTimer() {
    clearInterval(this.intervalID);
  }

  start() {
    this.clearTimer();
    this.countDown();
  }

  stop() {
    this.clearTimer();
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.second;
  }

  private countDown() {
    this.intervalID = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'time is 0';
        this.clearTimer();
      }
    }, 1000);
  }

}
