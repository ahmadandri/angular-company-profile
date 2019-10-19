import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/base.service';
import { GlobalVariable } from 'src/environments/global';
import { ImageSilderModel } from 'src/app/models/ImageSliderModel';
import { ProductModel } from 'src/app/models/ProductModel';
import { Router } from '@angular/router';
import { ArticleModel } from 'src/app/models/ArticleModel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  private BASE_API = GlobalVariable;
  listImage: Array<ImageSilderModel>=[];
  listProduct: Array<ProductModel> = [];
  listArticle: Array<ArticleModel> = [];

  constructor(
    private apiService : ApiService,
    private route : Router
  ) { }

  ngOnInit() {
    this.getImage();
    this.getProduct();
    this.getArticle();
  }

  getImage(){
    this.apiService.get(this.BASE_API.Home.GetAllImage).subscribe(
      result=>{
        this.listImage = result;
        console.log(this.listImage)
      },
      error=>{
        alert(error);
      }
    )
  }

  getProduct(){
    this.apiService.get(this.BASE_API.Product.GetAll).subscribe(
      result=>{
        for(let i = 0;i < 3;i++){
          this.listProduct.push(result[i]);
        }
        console.log(this.listProduct)
      },
      error=>{
        alert(error);
      }
    )
  }

  getArticle(){
    this.apiService.get(this.BASE_API.Article.GetAll).subscribe(
      result=>{
        for(let i = 0; i<1 ;i++){
          this.listArticle.push(result[i]);
        }
        console.log(this.listArticle)
      },
      error=>{
        alert(error);
      }
    )
  }

  redirectProductList(){
    this.route.navigate(['/product'])
  }


}
