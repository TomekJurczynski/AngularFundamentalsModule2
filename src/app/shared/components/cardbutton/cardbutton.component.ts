import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardbutton',
  templateUrl: './cardbutton.component.html',
  styleUrls: ['./cardbutton.component.css']
})
export class CardbuttonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() buttonText = '';

  @Input() iconDelete: any;

  @Input() iconEdit: any;

}
