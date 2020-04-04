import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-test',
  template: `
    <h2>{{parentData}}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  public color = 'gg';
  public name = '';
  constructor() { }
  public fireEvent(){
    this.childEvent.emit(this.color);
  }
  ngOnInit(): void {
  }

}
