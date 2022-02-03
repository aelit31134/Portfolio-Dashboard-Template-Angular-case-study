import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  imgSrc = 'assets/profilepic.jpeg';
  imgAlt = 'Aayush Goel';

  constructor() { }

  ngOnInit() {
  }

}
