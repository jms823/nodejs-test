import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang';
  constructor(private _router:Router){
    
  }
  goLoginPage(){
    this._router.navigate(['/login']);
  }
}
