import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service'; 




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  homeTitle = "Welcome to the Ninja Store";

  ninjas = [];

  constructor(private logger: LoggingService, private dataService: DataService) { }

  logIt(){
    this.logger.log();
  } 
  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => this.ninjas = data
    );
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
