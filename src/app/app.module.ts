import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PostComponent } from './post/post.component';
import { ProductsComponent } from './products/products.component';
import { ShortenPipe } from './shorten.pipe';
import { ProductService } from './products/products.service';
import { ObservableSampleComponent } from './observablesample.component';
import { ProductListComponent } from './products/list.component';
import { ApiSampleComponent } from './api-sample/api-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PostComponent,
    ProductsComponent,
    ShortenPipe,
    ObservableSampleComponent,
    ProductListComponent,
    ApiSampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
