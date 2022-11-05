import { Component, OnInit, Output } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoImage = '../../../../../img/logo.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
