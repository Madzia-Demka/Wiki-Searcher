import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Article } from '../article';
import { Articles } from '../history';
import { SearchArticleService } from '../services/searchArticleService';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles$:Observable<Array<Article>>; 
  title$ = new Subject<string>();

  router: any;
  isModal: boolean = true;

  constructor(private searchArticleService: SearchArticleService){
    this.articles$ = this.searchArticleService.search(this.title$);
  }

  ngOnInit(): void {
  }

  navigateToArticle(articles: Article) {
    if (this.isModal) 
    this.router.navigate(["/article-details"], { queryParams: { id: this.articles$.id } });

  }


}
