
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: 'search.component.html'
})

export class SearchComponent {


    @Input() search: string= '';
    
    
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    
    searchClick(): void{
        this.notify.emit('Enjoy your reading time!');
    }

   

}