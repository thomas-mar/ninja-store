import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  log(){
    console.log('Testing logging service');
  }
  constructor() { }

}
