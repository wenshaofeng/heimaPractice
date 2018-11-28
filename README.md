# heima

> A Vue.js project to learn vue 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

 
###由于教程比较早，纯从零开始搭建，学习的时候我用的是vue-cli搭建
(另外由于接口问题，很多图片都挂了，见谅) 

### 技术栈 vue+vue-router+vuex+axios  
###  UI框架 mint-ui 和 mui 
### 插件 vue-preview swiper(挺好用的) better-scroll moment.js（时间格式处理）




## 一：首页


1. 完成header区域，使用mint-UI组件
2. 完成底部tabbar区域，使用的是MUI。
 + MUI的图标在example文件夹中找，火狐对本地HTML支持不好，使用edge或Chrome打开
 + 需要拷贝扩展图标的样式库与字体库。
  ![](https://upload-images.jianshu.io/upload_images/9249356-1a973f693e63fcf3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


 + 为购物车图标添加类名。
mui-icon mui-icon-extra mui-icon-extra-cart
3. 要在中间区域放置一个router-view来展示路由组件

### 改造tabbar为router-link

###设置路由高亮
```
  linkActiveClass: 'mui-active'
```
###点击路由展示组件

### 制作首页轮播图
用的图片接口是必应公开接口
Swiper组件使用，踩了坑
- 无法显示底部swiper-pagination
- 无法无限轮播
  1. 配置错误，swiper4.0配置更新
  2. DOM动态渲染导致计算问题



### 加载轮播图数据

[轮播图API地址](https://github.com/xCss/bing)（原地址已经失效，使用公开的bing每日图片的api）

**使用axios加proxytable代理（踩坑)**
![](https://upload-images.jianshu.io/upload_images/9249356-cec54758701b059d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/9249356-d640ab99fcc14636.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


遇到奇怪的bug
修改了proxyTable 的配置后，跨域还是不成功，最后删了node_modules重新下载了一次，解决了
## 改造九宫格区域的样式(mui)

##切换组件的动画
![](https://upload-images.jianshu.io/upload_images/9249356-5985c3c9cf5d73aa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 时间的格式的处理
  
moment.js
1.npm install moment.js

`删掉依赖后重新 npm i 后报错`
（解决）
![image.png](https://upload-images.jianshu.io/upload_images/9249356-0c9a0c1f82389900.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

 
## 二：新闻详情
####绘制新闻资讯界面， 使用 MUI 中的 media-list.html
   1. 绘制界面， 使用 MUI 中的 media-list.html
   2. 使用 axios 获取数据
   3. 渲染真实数据
#### 实现 新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造为 router-link,同时，在跳转的时候应该提供唯一的Id标识符
2. 创建新闻详情的组件页面  NewsInfo.vue
3. 在 路由模块中，将 新闻详情的 路由地址 和 组件页面对应起来
4. 使用了better-scroll 实现新闻详情页面滚动
 - (踩的坑)样式穿透 
  **由于scoped的影响**
![](https://upload-images.jianshu.io/upload_images/9249356-10c526aa40ecd293.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/9249356-15b335e029261490.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
####(新闻评论区)单独封装一个 comment.vue 评论子组件
- 加载更多评论
- 发表评论




###[Vue中的scoped及穿透方法](https://www.cnblogs.com/karthuslorin/p/9038854.html)

##三：图片分享
### 使用mui的tab-top-webview-main完成顶部分类滑动栏
滑动的时候报警告：`Unable to preventDefault inside passive event listener due to target being treated as passive. See https://www.chromestatus.com/features/5093566007214080`
```
解决方法，可以加上* { touch-action: none; } 这句样式去掉。
```
原因：（是chrome为了提高页面的滑动流畅度而新折腾出来的一个东西） http://www.cnblogs.com/pearl07/p/6589114.html
https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action


### [使用vue-cli时引入mui.js时取消严格模式](https://www.cnblogs.com/Richard-Tang/p/9963563.html)
### [mui在vue_cli上使用](https://www.cnblogs.com/hss-blog/p/9482392.html)
![image.png](https://upload-images.jianshu.io/upload_images/9249356-4cd692388a257b0d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


**vue-preview插件使用的坑**
![image.png](https://upload-images.jianshu.io/upload_images/9249356-d050ee8a6affbd06.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

scoped 属性的影响，导致该组件的样式无法设置
![](https://upload-images.jianshu.io/upload_images/9249356-03d4eb8842c1073f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##四：商品购买

####商品详情
- 卡片视图
使用 mui 的mui-card
- 轮播图
swiper 
- 商品购买
自建一个numbox 组件
初始化
![](https://upload-images.jianshu.io/upload_images/9249356-dba0fc9dfd8d5774.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 商品参数 
**问题：路由跳转后，滚动条记录**
解决 :

- 购物车
     -  购物车小球动画
    getBoundingClientRec()方法获取位置
    ####[JavaScript中getBoundingClientRect()方法详解](https://www.cnblogs.com/leejersey/p/4127714.html)
    - 当商品数量改变时实时接收购买数量 (子传父)
      细节：传值转化为数字
![](https://upload-images.jianshu.io/upload_images/9249356-0461e254c995d64a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    - 根据父组件中的商品存储量改变数字选择框最大值（父传子）
mui 自带API
![](https://upload-images.jianshu.io/upload_images/9249356-8e8a63dc28a9cbcc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    - ###vuex的使用
      - 点击后商品加入购物车功能
      - 购物车徽标数量的相加
      - 购物车的本地化存储
       localStorage
      - 购物车页布局 元素渲染
      - 初始化购物车页面的各个商品数量值（从vuex里获取）
      - 在购物车中改变数量时 同步数据到store中
      - 购物车中删除商品
        1. 页面中删除
        2. store中删除
      - 同步store中的选择状态到页面
      - 商品勾选件数和勾选的总价计算
      - 全选/反选
      - 清空购物车
      - 打包部署至Apache
      -  使用ngrok把本机的网站端口映射到外网

##最后：这只是为了记录一下自己做该项目的过程的笔记，借鉴了[Vue.js-personal-note](https://github.com/zc910704/Vue.js-personal-note)和课程资料，也存在很多不足，希望各位给予一些指点