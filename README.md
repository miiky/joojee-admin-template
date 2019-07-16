# 简介

joojee-admin-template 是基于 Vue 框架和 iView 组件生态，为聚集优研发团队定制的一套基于的后台管理系统的前端解决方案。joojee-admin-template 脱离 1.x 版本进行重构，换用 Webpack4.0 + Vue-cli3.0 作为基本开发环境。内置了开发后台管理系统常用的逻辑功能，和开箱即用的业务组件，旨在让公司员工能够以最小的成本开发后台管理系统，降低开发量。

**如果对 Vue 技术栈开发还有技术盲点的，为了扫清开发所需知识点，请前往一下网站学习相关基础知识：**

- vue 官网：https://cn.vuejs.org/v2/guide/
- iview 官网：https://www.iviewui.com/docs/guide/install
- vue-router 官网：https://router.vuejs.org/zh/guide/
- vuex 官网：https://vuex.vuejs.org/zh/

# 目录结构

```
.
├── config  开发相关配置
├── public  打包所需静态资源
└── src
    └── assets  项目静态资源
        ├── icons  自定义图标资源
        └── images  图片资源
    ├── components  业务组件
    ├── config  项目运行配置
    ├── directive  自定义指令
    ├── libs  封装工具函数
    ├── locale  多语言文件
    ├── mock  mock模拟数据
    ├── network  网络请求
    ├── router  路由配置
    ├── store  Vuex数据仓库配置
    ├── view  页面文件
    └── tests  测试相关
```
# joojee-admin-template
