import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
color = '';

red(){
  this.color = '#dc3545'
};
blue(){
  this.color = '#0d6efd'
}
}
