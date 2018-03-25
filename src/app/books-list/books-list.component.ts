import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service';

@Component({
    //moduleId: module.id,
    selector: 'books-list',
    templateUrl: 'books-list.component.html'
})

export class BooksListComponent implements OnInit{

    books: IBook[];

    favoriteMessage: string = '';

    imageWidth: number = 200;

    showImage: boolean = true;

    bookInStock: number=2;

    errorMessage: string;

    constructor(private _bookService: BookService){}

    ngOnInit(){ this.getBooks() }

    getBooks(){
        this._bookService.getBooks()
        .subscribe(
            books => this.books = books,
            error => this.errorMessage = <any>error
        );
    }

    // books: any[] = [{
    //         bookAuthor: "Tom Jones",
    //         bookTitle: "War and Peace 2",
    //         bookPrice: 29.95,
    //         bookDescription: "Book of Historical fiction",
    //         publishedOn: new Date('04/30/1975'),
    //         inStock: "yes",
    //         bookReviews: 15,
    //         bookImageUrl: "./assets/images/656.jpg"
    //     },
        
    //     {
    //         bookAuthor: "Mike Jones",
    //         bookTitle: "War and Peace 3",
    //         bookPrice: 15.95,
    //         bookDescription: "Book of Historical fiction",
    //         publishedOn: new Date('04/30/1975'),
    //         inStock: "yes",
    //         bookReviews: 18,
    //         bookImageUrl: "./assets/images/656.jpg"
    //     }
    // ]

    onFavoriteClicked(message: string): void{
        this.favoriteMessage = message;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

}