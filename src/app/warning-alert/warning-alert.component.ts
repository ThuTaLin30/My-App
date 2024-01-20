import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  // templateUrl: './warning-alert.component.html',
  template:`
  <p>This is warning,you are in danger!</p>`,
  // 
  styles:[`
  p{
    padding: 20px;
    background-color:yellow;
    border:1px solid red;
  }
  `]
})
export class WarningAlertComponent {

}
