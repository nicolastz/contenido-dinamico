import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output()
  buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {

  }

  clickButton(){
    this.buttonClicked.emit("hijo");
  }

}
