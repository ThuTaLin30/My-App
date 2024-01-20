import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  implements OnInit{
   allowNewServer = false; // allowNewServer : boolean= False;
   severCreationStatus = "No sever was created";
   serverName="Test Server";
   serverCreated = false;
   servers = ['Testserver ', 'Testserver2', 'Testserver3 ']


   
   constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
    
   }
 
  ngOnInit(): void {
     
   }
   onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.severCreationStatus="Sever was created Name is"+this.serverName;
   
   
  //  onupdateServerName(event: Event) {
  //   this.serverName= (<HTMLInputElement>event.target).value;
  //  }
   }
   userName = '';
  disable = true;
  onReset(){
    this.userName = '';
    this.disable = true;
  }
  Input(){
    this.disable = false;
  }

}














