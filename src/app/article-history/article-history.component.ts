import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { Articles } from '../history';

@Component({
  selector: 'app-article-history',
  templateUrl: './article-history.component.html',
  styleUrls: ['./article-history.component.css']
})
export class ArticleHistoryComponent implements OnInit {

  articles: Article[] = Articles; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
