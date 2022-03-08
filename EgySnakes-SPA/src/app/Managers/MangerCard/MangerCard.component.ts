import { Component, Input, OnInit } from '@angular/core';
import { Manager } from 'src/app/_models/Manager';

@Component({
  selector: 'app-MangerCard',
  templateUrl: './MangerCard.component.html',
  styleUrls: ['./MangerCard.component.css']
})
export class MangerCardComponent implements OnInit {
  @Input() manager: Manager;

  constructor() { }

  ngOnInit() {
  }

}
