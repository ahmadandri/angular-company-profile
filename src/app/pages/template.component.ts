import { Type } from '@angular/core';

import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ArticleListComponent } from '../pages/article-list/article-list.component';
import { ProductListComponent } from '../pages/product-list/product-list.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { DetailArticleListComponent } from '../pages/detail-article-list/detail-article-list.component'
import { DetailProductListComponent } from './detail-product-list/detail-product-list.component';
import { FooterComponent } from './footer/footer.component';


export const TEMPLATE_COMPONENT = {
    'HomePageComponent':HomePageComponent,
    'ArticleListComponent':ArticleListComponent,
    'ProductListComponent':ProductListComponent,
    'AboutUsComponent':AboutUsComponent,
    'ContactUsComponent':ContactUsComponent,
    'DetailArticleListComponent':DetailArticleListComponent,
    'DetailProductListComponent':DetailProductListComponent,
}

export const COMPONENTS = [
    HomePageComponent,
    ArticleListComponent,
    ProductListComponent,
    AboutUsComponent,
    ContactUsComponent,
    DetailArticleListComponent,
    DetailProductListComponent,
    FooterComponent
]