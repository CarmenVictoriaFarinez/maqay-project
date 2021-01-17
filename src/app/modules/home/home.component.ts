import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  viewMode = 'topic';
  
  constructor() { }

  ngOnInit(): void {
  }
hover = (target) => {
  console.log(target);
  target.classList.add('show-card');
}
}
