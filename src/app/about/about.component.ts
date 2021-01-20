import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  constructor() { }
  topStories = [
    { picture : "img-9",title: "Sky" }, { picture : "img-8", title: "Rajasthan"},{ picture : "img-4", title: "Demo"}
  ]
    
  
  ngOnInit() {}

}
