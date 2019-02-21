import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-message',
  templateUrl: './parent-message.component.html',
  styleUrls: ['./parent-message.component.css']
})
export class ParentMessageComponent implements OnInit {

  messages: any;

  constructor() { }

  ngOnInit() {
    this.messages = this.getMessages();

  }

  getMessages() {
    return [
      'Mon 1er message',
      'Mon 2eme message',
      'Mon 3eme message',
      'Mon 4eme message',
    ];
  }

}
