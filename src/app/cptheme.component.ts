import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cptheme',
  templateUrl: './cptheme.component.html'
})
export class CpThemeComponent implements AfterViewInit {
  @ViewChild('name') private elName: ElementRef;
  @ViewChild('city') private elCity: ElementRef;

  ngAfterViewInit() {
    console.log('theme init')
    this.elName.nativeElement.style.backgroundColor = 'cyan';
    this.elName.nativeElement.style.color = 'red';
    /* this.elCity.nativeElement.style.backgroundColor = 'cyan';
    this.elCity.nativeElement.style.color = 'red'; */
  }

  changeColor(backgroundColor, color) {
    this.elName.nativeElement.style.backgroundColor = backgroundColor;
    this.elName.nativeElement.style.color = color;
    console.log('change color to', color)
  }
}
