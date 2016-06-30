/**
 * Created by huangmingchao on 2016/6/30.
 */
/**
 * 主页的头部
  */
angular.module('app').directive("hmcHeader",function(){
     return {
         restrict:'E',
         templateUrl:'../../Blog/view/header.html'
     }
 });

/**
 * 主页的内容区
 */
angular.module('app').directive('hmcContent',function(){
    return {
        restrict:'E',
        templateUrl:'../../Blog/view/content.html',
        replace:true
    }
});
//主页内容区分两部分，一部分是左侧导航栏，另一部分是右侧信息
//左侧导航
angular.module('app').directive('contentLeft',function(){
    return {
        restrict:'E',
        templateUrl:'../../Blog/view/left.html',
        replace:true
    }
});
//右侧信息

angular.module('app').directive('contentRight',function(){
    return {
        restrict:'E',
        templateUrl:'../../Blog/view/right.html',
        replace:'true'
    }
});

/**
 * 主页的底部
 */

angular.module('app').directive('hmcFooter',function(){
    return {
        restrict:'E',
        templateUrl:'../../Blog/view/footer.html',
        replace:true
    }
});