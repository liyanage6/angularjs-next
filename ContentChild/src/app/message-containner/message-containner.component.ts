import { Component, OnInit, AfterContentInit, ContentChild } from '@angular/core';
import {MessageComponent} from "../message/message.component";

@Component({
  selector: 'app-message-containner',
  templateUrl: './message-containner.component.html',
  styleUrls: ['./message-containner.component.css']
})
export class MessageContainnerComponent implements OnInit, AfterContentInit {

  greetMessage = 'Hello from Message Container';

  @ContentChild(MessageComponent)
  messageComponentContentChild: MessageComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.messageComponentContentChild);
  }

}
