import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {Article} from '../article';
import { Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class SearchArticleService {
  API_PATH = 'https://www.mediawiki.org/wiki/API:REST_API/Reference';

  constructor(private http: HttpClient) { }

  search(title$: Subject<string>){
    return title$
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(title => this.searchArticle(title))
      //map modyfikuje wartosc zewnetrz. obser. na to co zwroci wewnetrzny
    )
  }

private searchArticle(title: string): Observable<Array<Article>>{
  let params = new HttpParams({fromObject:{title}});

  return this.http.get<{results: Array<Article>}>(this.API_PATH,{params})
  .pipe(
    map(response=> response.results)
  )
}
}