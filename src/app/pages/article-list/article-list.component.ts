import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/ArticleModel';
import { ApiService } from 'src/app/services/base.service';
import { GlobalVariable } from "../../../environments/global";
import { Router } from '@angular/router';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  private BASE_API = GlobalVariable;
  listArticle:Array<ArticleModel>;
  articleModel:ArticleModel;
  constructor(
    private apiService : ApiService,
    private route: Router
  ) { }

  ngOnInit() {
    this.getListArticle();
  }

  getListArticle(){
    this.apiService.get(this.BASE_API.Article.GetAll).subscribe(
      result=>{
        this.listArticle = result;
      }
    )
  }
  onActionDetail(navigationId:number){
    this.route.navigate(['article/'+navigationId]);
  }

}
