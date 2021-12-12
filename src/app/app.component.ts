import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Article } from './article';
import { SearchArticleService } from './services/searchArticleService';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles$:Observable<Array<Article>>; 
  title$ = new Subject<string>();

  constructor(private searchArticleService: SearchArticleService){
    this.articles$ = this.searchArticleService.search(this.title$);
  }

  getFooter(): string{
    return "***** ***";
  } 

  getDate(): Date{
    return new Date();
  }

  identifyArticle(article: Article){
    return article.id;
  }
}
