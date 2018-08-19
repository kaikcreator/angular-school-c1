import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'custom-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})
export class HelloComponent{
    @Input() name:string;
    @Output() sayHello:EventEmitter<string> = new EventEmitter<string>();

    constructor(){ }

    onClick(){
        this.sayHello.emit('Hello!');
    }
}