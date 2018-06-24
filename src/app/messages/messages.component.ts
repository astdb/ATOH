import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messageService has to be public because it will be bound to in the template. Angular only binds to public component properties.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
