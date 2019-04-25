import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Articles } from '../articles';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  articles:any[];
  constructor(private router: Router, public article: Articles){
    this.articles = article.articles;
  }

  showDetails(idArticle:number):void{
    this.router.navigate(['/details/'+idArticle]);
  }
}
