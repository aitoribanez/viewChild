import { Component, ViewChild } from '@angular/core';
import { NumberComponent } from './number.component';

@Component({
  selector: 'app-number-parent',
  templateUrl: './number-parent.component.html'
})
export class NumberParentComponent {
  @ViewChild(NumberComponent) private numberComponent: NumberComponent;

  increase() {
    this.numberComponent.increaseByOne();
    console.log('increase', this.numberComponent);
  }
  decrease() {
    this.numberComponent.decreaseByOne();
    console.log('decrease', this.numberComponent);
  }
}
