import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  enteredValue: string = '';

  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearch(){
    this.searchTextChange.emit(this.enteredValue);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
