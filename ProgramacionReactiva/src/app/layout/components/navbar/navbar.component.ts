import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isActive = false;


  public checkActive(){
      this.isActive = !this.isActive;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
