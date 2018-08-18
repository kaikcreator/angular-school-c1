import { Component } from '@angular/core';

@Component({
    selector: 'custom-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})
export class HelloComponent{
    public name:string;

    constructor(){
        this.name = 'Enrique';
    }
}