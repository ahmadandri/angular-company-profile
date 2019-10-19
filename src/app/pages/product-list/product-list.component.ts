import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from 'src/environments/global';
import { ProductModel } from 'src/app/models/ProductModel';
import { ApiService } from 'src/app/services/base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private BASE_API = GlobalVariable;
  productList:Array<ProductModel>;
  constructor(
    private apiService: ApiService,
    private route: Router
  ) { }

  ngOnInit() {
    this.getAllProductList();
  }

  getAllProductList(){
    this.apiService.get(this.BASE_API.Product.GetAll).subscribe(
      result=>{
        this.productList = result;
        console.log(this.productList);
      }
    )
  }

  onActionDetail(productId:number){
    this.route.navigate(['/product/'+productId]);
  }

}
