import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {


  sideBarOpen = true;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() { 
    
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
