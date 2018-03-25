import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'; 

import { IBook } from './book';


@Injectable()


export class BookService{

    constructor(private _http: Http){} 

    getBooks(): Observable<IBook[]> {
        return this._http
        .get('/assets/books.json')
        .map((response: Response) => <IBook[]> response.json());
    }

}