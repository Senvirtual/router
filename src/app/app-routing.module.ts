import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
 // {path: 'product', component: ProductComponent},
  // 在路由路径传递数据因此路由配置也发生改变
  {path: 'product/:id', component: ProductComponent},
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
