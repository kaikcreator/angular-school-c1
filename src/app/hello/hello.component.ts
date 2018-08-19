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
    public inputName:string = 'Jhon';

    constructor(){ }

    onClick(){
        this.sayHello.emit('Hello!');
    }

    addName(){
        this.namesList.push(this.inputName);
        console.log(this.namesList);
    }

    updateInputName(event:any){
        this.inputName = event.target.value;
        console.log(this.inputName);
    }
}