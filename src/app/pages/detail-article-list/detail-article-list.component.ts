import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/base.service';
import { GlobalVariable } from '../../../environments/global'
import { ArticleModel } from 'src/app/models/ArticleModel';

@Component({
  selector: 'app-detail-article-list',
  templateUrl: './detail-article-list.component.html',
  styleUrls: ['./detail-article-list.component.css']
})
export class DetailArticleListComponent implements OnInit {
  private BASE_API = GlobalVariable;
  articleId:number;
  listArticleModel: Array<ArticleModel>=[];
  articleModel : ArticleModel;
  constructor(
    private activatedRoute : ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.articleId = +this.activatedRoute.snapshot.paramMap.get('articleId');
    this.getArticle();
  }

  getArticle(){
    this.apiService.get(this.BASE_API.Article.GetAll).subscribe(
      (result:ArticleModel[])=>{
        result.forEach(data => {
          if(data.articleId == this.articleId){
            this.articleModel = data;
          }
        });
      }
    )
  }

}
