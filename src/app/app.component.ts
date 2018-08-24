import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myName:string = 'Enrique';
  public counter = 0;
  public titleStyles:{};

  constructor(private logger:LoggerService){}
  
  onSayHello(message){
    this.logger.log(message);
    this.counter++;
    this.updateTitleStyles();
  }

  updateTitleStyles(){
    this.titleStyles = {
      'margin-top': '40px',
      'color': this.counter < 3 ? 'green' : 'goldenrod'
    }
  }  

  updateNameClasses(name:string){
    return {
      'error': name.length <= 3,
      'warning': name.length >3 && name.length <=6,
      'success': name.length > 6,
      'bold': name.length > 8
    }
  }
}
