import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from 'src/environments/global';
import { ApiService } from 'src/app/services/base.service';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/ProductModel';

@Component({
  selector: 'app-detail-product-list',
  templateUrl: './detail-product-list.component.html',
  styleUrls: ['./detail-product-list.component.css']
})
export class DetailProductListComponent implements OnInit {
  private BASE_API = GlobalVariable;
  listProduct:Array<ProductModel> = [];
  productModel:ProductModel;
  productId:number;
  constructor(
    private apiService : ApiService,
    private activatedRouter : ActivatedRoute
  ){}

  ngOnInit(){
    this.productId = +this.activatedRouter.snapshot.paramMap.get('productId');
    this.getListProduct();
  }

  //Karena pakai data statis jadi tidak bisa filter dibelakang
  getListProduct(){
    this.apiService.get(this.BASE_API.Product.GetAll).subscribe(
      (result:any)=>{
        this.listProduct = result;
        console.log(this.listProduct)
        this.getLisProductById(this.productId);
      },
      error=>{
        alert(error);
      }
    )
  }

  getLisProductById(productId:number){
    this.listProduct.forEach(product=>{
      if(product.productId == productId){
        this.productModel = product;
        console.log(this.productModel);
      }
    })
  }
}
