import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'home',
    templateUrl: 'app/home.component.html',
    styleUrls: ['app/home.component.css']
})

export class HomeComponent implements OnInit {
  ngOnInit() {
    var urlString = window.location.href;
    var token = urlString.substring(urlString.lastIndexOf("=")+1,urlString.lastIndexOf("&"))
    localStorage.setItem("userid", token);
  }


}
