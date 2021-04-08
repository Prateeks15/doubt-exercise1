
import { MainService } from './main.service';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {ChildComponent} from './child/child.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MainService]
})
export class AppComponent implements OnInit{
  title = 'first-app';
  @ViewChild(ChildComponent) child: ChildComponent;
  
  userInfo1: any = {
    name: '',
    phone: ''
  };

  

  ngAfterViewInit() {
    this.userInfo1 = this.child.userInfo;
    
  }
  
  constructor() {}

  ngOnInit() {
  }
}
