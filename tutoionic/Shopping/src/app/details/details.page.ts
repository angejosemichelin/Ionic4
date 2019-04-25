import { Component, OnInit } from '@angular/core';
import { Articles } from '../articles';
import { ActivatedRoute, Params } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  theArticle:any;
  articles:any[];
  idArticle:string;

  constructor(public article: Articles, private activatedRoute: ActivatedRoute){    
  }

  ngOnInit() {
    this.idArticle = this.activatedRoute.snapshot.paramMap.get("id");
    for (let article of this.article.articles) {
      if(article.id.toString() == this.idArticle){
        this.theArticle = article;
        console.log(article);
      }
    }
  }
}
