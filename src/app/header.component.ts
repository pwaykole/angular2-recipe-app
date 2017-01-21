import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styles: [`.mdl-button > .mdl-header-span{color:#fff}`]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
