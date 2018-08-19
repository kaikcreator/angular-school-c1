import { Component, Input } from '@angular/core';

@Component({
    selector: 'custom-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})
export class HelloComponent{
    @Input() name:string;

    constructor(){ }
}