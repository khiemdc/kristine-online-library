import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FavoriteComponent } from './favorites/favorite.component';
import { SearchComponent } from './search/search.component';

import { BookService } from './book.service';

import { FormsModule } from '@angular/forms';

 import { TruncatePipe } from './shared/pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksListComponent,
    BookDetailsComponent,
    HeaderComponent,
    NavComponent,
    FavoriteComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'books', component: BooksListComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
