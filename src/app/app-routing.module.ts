import { NgModule } from '@angular/core';
import {Routes, RouterModule, Resolve} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {ProductDescComponent} from "./product-desc/product-desc.component";
import {SellerInfoComponent} from "./seller-info/seller-info.component";
import {ChatComponent} from "./chat/chat.component";
import {LoginGuard} from "./guard/login.guard";
import {UnsavedGuard} from "./guard/unsaved.guard";
import {ProductResolve} from "./guard/product.resolve";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  // 重定向路由
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  // {path: 'product', component: ProductComponent},
  // 在路由路径传递数据因此路由配置也发生改变
  {path: 'product/:id', component: ProductComponent,children: [
    // 子路由的设置
    {path: '', component: ProductDescComponent},
    {path: 'seller/:id', component: SellerInfoComponent}], resolve: {product: ProductResolve},
    /*两种路由保护的设置,无论是路由保护还是resolve守卫（进入组件之前，将组建所需要的数据都加载好，
     如果拿不到信息，则跳过当前组件）的配置，都是直接在主路由的后面配置的，千万不要加在子路由后面*/
    canActivate: [LoginGuard],
    canDeactivate: [UnsavedGuard]},

  // 辅助路由的设置
  {path: 'chat', component: ChatComponent, outlet: "aux"},
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //上面路由守卫只是定义了一个LoginGuard的类型，并没有实例化该类的对象，因而需要在providers中声明
  providers: [LoginGuard,UnsavedGuard,ProductResolve]
})
export class AppRoutingModule { }
