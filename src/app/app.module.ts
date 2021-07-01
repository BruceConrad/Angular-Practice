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
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { VehiclesComponent } from 'src/project/vehicles/vehicles.component';
import { InventoryComponent } from 'src/project/inventory/inventory.component';
import { HomeComponent } from './routes/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductInfoComponent } from './product/productinfo.component';
import { NotFoundComponent } from './routes/notfound.component';
import { AuthGuardService } from './routes/authguard.service';

const appRoutes: Routes = [
  {path:'', component:HomeComponent, children:[{path:'products/:id', component:ProductInfoComponent}]},
  {path:'products', component:ProductsComponent, canActivate: [AuthGuardService]},
  {path: 'not-found', component:NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PostComponent,
    ProductsComponent,
    ShortenPipe,
    ObservableSampleComponent,
    ProductListComponent,
    ApiSampleComponent,
    SignupComponent,
    LoginComponent,
    VehiclesComponent,
    InventoryComponent,
    HomeComponent,
    ProductInfoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
