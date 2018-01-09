import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../filter.pipe'; 
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  styleClass = {'blue': true, 'red': false, 'underlined': true};
  test = false;

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
