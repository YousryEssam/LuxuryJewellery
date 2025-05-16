import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
data:string='';

@Output() myEvent = new EventEmitter();

  sendData(str:string){
    this.data=str;
    this.myEvent.emit(this.data);
  }
}
