import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleHistoryComponent } from './article-history/article-history.component';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'article-list', component: ArticleListComponent},
  {path: 'article-details', component: ArticleDetailsComponent},
  {path: 'article-history', component: ArticleHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
