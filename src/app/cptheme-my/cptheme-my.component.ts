import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cptheme-my',
  templateUrl: './cptheme-my.component.html',
  styleUrls: ['./cptheme-my.component.css']
})
export class CpthemeMyComponent implements OnInit, AfterViewInit {
  @ViewChild('name') private elName: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('theme init')
    this.elName.nativeElement.style.backgroundColor = 'green';
    this.elName.nativeElement.style.color = 'green';
  }

  changeColor(color) {
    this.elName.nativeElement.style.backgroundColor = color;
    this.elName.nativeElement.style.color = 'blue';
  }

}
