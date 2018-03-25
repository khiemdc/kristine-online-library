
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: 'favorite.component.html'
})

export class FavoriteComponent {

    fave: boolean = false;

    @Input() favorite: string;
    @Input() thanks: string="Thank you!";
    

    @Output() favoriteClicked: EventEmitter<string> = new EventEmitter<string>();



    onClick(): void{
        this.favoriteClicked.emit(`Thank you! I love you too!`);
        this.fave = !this.fave;
    }

    isSelected(fave:boolean): boolean{
        if(!fave || !this.fave){
            return false;
        }
        if(fave){
            return true;
        }
    }

}