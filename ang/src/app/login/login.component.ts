import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hello:String = '안녕하세요';
  name:String = '홍깅동';
  age:Number = 33;
  id:String = 'w';
  pw:String = 'manis';

  constructor(private http:HttpClient) {}

  ngOnInit() {
  }

  login(){
    alert(`id : ${this.id}`);
    alert(`pw : ${this.pw}`);
  }
}
