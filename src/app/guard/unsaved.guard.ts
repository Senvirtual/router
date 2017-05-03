import {ProductComponent} from "../product/product.component";
import {CanDeactivate} from "@angular/router";
/**
 * Created by Administrator on 2017/5/3.
 */
export class UnsavedGuard implements CanDeactivate<ProductComponent>{
  canDeactivate(component: ProductComponent){
    return window.confirm("你还没有保存设置,确认离开吗？");
  }



}
