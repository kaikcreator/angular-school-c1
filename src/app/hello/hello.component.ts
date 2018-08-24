import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GreetingsService } from '../greetings.service';

@Component({
    selector: 'custom-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css'],
    providers: [GreetingsService]
})
export class HelloComponent{
    @Input() name:string;
    @Output() sayHello:EventEmitter<string> = new EventEmitter<string>();

    public namesList:Array<string> = [];
    public inputName:string = '';

    constructor(private greetings:GreetingsService){ }

    onClick(){
        console.log("counter in HelloComponent is: ", this.greetings.counter);
        this.sayHello.emit('Hello!');
    }

    addName(){
        this.namesList.push(this.inputName);
        this.inputName = '';
        console.log(this.namesList);
    }
}