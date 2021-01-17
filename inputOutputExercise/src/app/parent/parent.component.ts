import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  inputFromParent = 'Angular';
  output = '';
  upCase(inputFromChild:string): void {​​
    this.output = "This is the Parent component. I received a string '" + inputFromChild + "' from the child component" 
    + " and I capitalize it here " + inputFromChild.toUpperCase()}
  ngOnInit(): void {
  }
}
