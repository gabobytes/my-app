import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [`
  .online
  { color:white; } `]
})
export class WarningAlertComponent implements OnInit {
  allowNewServer =false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverId: number = 10;
  serverStatus: string = 'offline'
  userName = '';
  serverCreated =false ;

  arrayDetails: Array<number> = [];

  itemCounter = 1;
  showDetails = true;


  getServerStatus(){
    return this.serverStatus;
  }

  constructor() {

    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'The server was created!';
    this.serverStatus = 'online';
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  checkEmptyName(){
      return this.userName.length == 0 ? false:true;
  }


  getColor(){
    return this.serverStatus === 'online' ? 'green':'red';
  }

  setBackgroundColor(index){
    return index >=4 ? 'blue':'';
  }

  getDetails(){
    this.arrayDetails.push(this.itemCounter);
    this.itemCounter++;
    this.showDetails=!this.showDetails;
  }


}
