import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { COMPONENTS } from './pages/template.component';
import { AppRoutingModule } from './app.routing.module';
import { ApiService } from './services/base.service';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey : ''
    })
  ],
  entryComponents:[COMPONENTS],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
