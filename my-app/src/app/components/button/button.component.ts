import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() item = ""
  @Input() target = ""

  // @Output() newItemEvent = new EventEmitter<string>();


  // addNewItem() {
  //   console.log("Working")
  // }

  printSmth() {
    console.log("Working")
  }

  

  ngOnInit(): void {
  }

}
