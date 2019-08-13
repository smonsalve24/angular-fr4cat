import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {
  constructor(private _router: Router){}

  irPerfil(){
    this._router .navigate(['perfil'])
  }
}
