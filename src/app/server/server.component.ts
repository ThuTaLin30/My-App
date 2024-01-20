import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [`
  .online {
    color: white
  }
  `]

})
export class ServerComponent {
  severID: number=10; // Let severID=10;
  severStatus: string='offline'; // Let severStatus =" offline"
  constructor(){
    this.severStatus = Math.random() > 0.5? 'online': 'offline';
//ternary operator
  }
  getSeverStatus(){
    return this.severStatus;
  }
  getColor(){
    return this.severStatus=== 'online'? 'green':'red';
  }


}
