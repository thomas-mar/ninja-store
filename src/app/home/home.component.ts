import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  homeTitle = "Welcome to the Ninja Store";


  constructor(private logger: LoggingService) { }

  logIt(){
    this.logger.log();
  } 
  ngOnInit() {
  }

}



  /*@Input() ninja;
  @Output() onYell = new EventEmitter();
  someString = "Fortnite";
  bool = true;
  
  alertMe(val){
    alert(val);
  }

  train = {
    name: "Thomas",
    colour: "Blue"
  };

  fireYellEvent(e){
    this.onYell.emit(e);
  }*/
