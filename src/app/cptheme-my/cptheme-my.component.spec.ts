import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpthemeMyComponent } from './cptheme-my.component';

describe('CpthemeMyComponent', () => {
  let component: CpthemeMyComponent;
  let fixture: ComponentFixture<CpthemeMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpthemeMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpthemeMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
