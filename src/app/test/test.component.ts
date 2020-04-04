import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{siteUrl}}</h2>

    <h2>{{greetUser()}}</h2>
    <input [id]="myId" type="text" value="Vishla">
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name= "Julia";
  public myId= "testId";
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  public greetUser(){
    return "Iuliia";
}

}
