import {CanActivate} from "@angular/router";
/**
 * Created by Administrator on 2017/5/3.
 */
//登陆守卫，实现此功能必须有类来实现Angular的CanActivate接口
 export class LoginGuard implements  CanActivate{
  canActivate(){
    //CanActivate接口返回一个布尔值
    let loggedIn: boolean = Math.random() < 0.5;
    if(!loggedIn){console.log("用户未登录");}
  return loggedIn;
  }

}
