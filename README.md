### 1.什么是Apidoc

> Apidoc是一款可以由源代码中的注释直接自动生成api接口文档的工具，它几乎支持目前主流的所有风格的注释。可以在C#, Go, Dart, Java, JavaScript, PHP, TypeScript等语言中使用

### 2.友好的文档展示页面



### 3.注释生成接口文档的原理

> apidoc的原理是扫描你的代码文件，提取出注释部分，根据一些规则生成相应的文档。默认的模板久简洁美观，十分适合作为api文档的生成器。

## 4.Apidoc安装

> 环境：需要使用npm安装，如果没有安装npm，请先去[https://www.npmjs.com/](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.npmjs.com%2F)下载npm并且安装。npm官网需要注册账号，另一种方式是安装node，会自动安装npm工具  [安装node教程](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.liaoxuefeng.com%2Fwiki%2F001434446689867b27157e896e74d51a89c25cc8b43bdb3000%2F00143450141843488beddae2a1044cab5acb5125baf0882000)

①安装：



```undefined
npm install apidoc -g
```

②验证安装是否成功：



```undefined
apidoc -h          出现帮助信息则安装成功
```

③配置apidoc.json文件

> 在项目的根目录建立apidoc.json文件



```json
{
  "name": "appleFarm",                  //文档项目名
  "title": "appleFarmAPI",              //html标题
  "description":"API接口文档",           //文档描述
  "url" : "https://www.google.com",     //公共接口地址
  "version": "0.1.0"                    //文档版本
}
```

### 5.Apidoc使用



```cpp
apidoc -i ./api/  -o ./docs/       生成文档的命令 
```

> /src  ： 生成接口文档的源文件
>  public/static  ： 生成的接口文档地址（一般放在静态文件夹下）

### 6.常用Apidoc注释规则举例

> @api {post} add_team  新建球队   =>    {请求方式}  路由  接口名称
>  @apiGroup  team                             =>     分组的名称，方便管理分组
>  @apiParam {String}   name     名字. =>  {参数类型} [参数名]  参数描述
>  @apiSuccess {String} msg 详细信息.   =>  {响应的类型}  参数 响应描述
>  @apiSuccessExample Success-Response: =>  成功返回的示例，可返json
>  @apiErrorExample {json} Error-Response:  =>  失败返回的示例，可返json
>  @apiDescription This is the Description   =>   接口的描述
>  [1.官方手册](https://links.jianshu.com/go?to=http%3A%2F%2Fapidocjs.com%2F%23params)    
>  [2.中文说明](https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fhjh15827475896%2Farticle%2Fdetails%2F79398369)



