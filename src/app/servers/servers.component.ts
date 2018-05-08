import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'Test-Server';
  serverCreated = false;
  servers = ['Test-server 1', 'Test-server 2','Test-server 3'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated =true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server '+ this.serverName + ' was created!';
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
