import { CpThemeComponent } from './cptheme.component';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NumberComponent } from './number.component';
import { StopwatchComponent } from './stopwatch.component';
import { CpColorDirective } from './cpcolor.directive';

@Component({
  selector: 'app-ui-element',
  templateUrl: './ui-element.component.html'
})
export class UIElementComponent implements AfterViewInit {
  @ViewChild(NumberComponent) private numberComponent: NumberComponent;
  @ViewChild(StopwatchComponent) private stopwatchComponent: StopwatchComponent;
  @ViewChild(CpColorDirective) private cpColorDirective: CpColorDirective;
  @ViewChild(CpThemeComponent) private cpThemeComponent: CpThemeComponent;
  @ViewChild('name') private elTitle: ElementRef;

  ngAfterViewInit() {
    this.elTitle.nativeElement.style.backgroundColor = 'cyan';
    this.elTitle.nativeElement.style.color = 'red';
      console.log('sale', this)
  }

  increase() {
    this.numberComponent.increaseByOne();
  }

  decrease() {
    this.numberComponent.decreaseByOne();
  }

  startStopwatch() {
    this.stopwatchComponent.start();
  }

  stopStopwatch() {
    this.stopwatchComponent.stop();
  }

  changeColor(color: string) {
    console.log('ona', this.cpColorDirective)
    this.cpColorDirective.change(color);
  }

   changeColor2(background, color: string) {
     console.log('sale', this)
    this.cpThemeComponent.changeColor('red', 'green')
   // this.elTitle.nativeElement.style.color =  'pink'
    // this.cpThemeComponent.changeColor('red', color);
  }
}
