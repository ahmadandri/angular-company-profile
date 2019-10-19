import { Component, OnInit, Injector} from '@angular/core';
import { Router } from '@angular/router';
import { TEMPLATE_COMPONENT } from './pages/template.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-test';
  isToggle:boolean = false;
  parentMenu:Array<any>=[];
  public menuArray : Array<any> = [
    {"navigationId":1,"navigationTitle":"Home","routeUrl":"/home","path":"home","component":"HomePageComponent","isParent":true},
    {"navigationId":2,"navigationTitle":"Product","routeUrl":"/product","path":"product","component":"ProductListComponent","isParent":true},
    {"navigationId":3,"navigationTitle":"Article","routeUrl":"/article","path":"article","component":"ArticleListComponent","isParent":true},
    {"navigationId":4,"navigationTitle":"About Us","routeUrl":"/about-us","path":"about-us","component":"AboutUsComponent","isParent":true},
    {"navigationId":5,"navigationTitle":"Contact Us","routeUrl":"/contact-us","path":"contact-us","component":"ContactUsComponent","isParent":true},
    {"navigationId":6,"navigationTitle":"Article Details","routeUrl":"/article/:articleId","path":"article/:articleId","component":"DetailArticleListComponent","isParent":false},
    {"navigationId":7,"navigationTitle":"Product Details","routeUrl":"/product/:productId","path":"product/:productId","component":"DetailProductListComponent","isParent":false}
  ];


  constructor(
    private _injector: Injector
  ){
  }

  ngOnInit(){
    this.setRoute();
  }

  menuToggle(){
    console.log(this.isToggle);
    this.isToggle = !this.isToggle;
  }

  setRoute(){
    var router:Router = this._injector.get(Router);
    this.menuArray.forEach(menu =>{
      console.log(menu);
      router.config.unshift({path:menu.path, component:TEMPLATE_COMPONENT[menu.component]});
      if(menu.isParent){
        this.parentMenu.push(menu);
      }
    });
  }


}
