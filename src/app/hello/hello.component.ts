import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'custom-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})
export class HelloComponent{
    @Input() name:string;
    @Output() sayHello:EventEmitter<string> = new EventEmitter<string>();

    public namesList:Array<string> = [];
    public inputName:string = '';

    constructor(){ }

    onClick(){
        this.sayHello.emit('Hello!');
    }

    addName(){
        this.namesList.push(this.inputName);
        this.inputName = '';
        console.log(this.namesList);
    }
}