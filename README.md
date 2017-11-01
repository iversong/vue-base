# 基于vue2 + vue-router + vuex + webpack + vant 快速构建项目脚手架

> spa webapp

## 脚手架指令

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080 (开发模式)
npm run dev

# build for production with minification (线上打包)
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 目录结构

    ·
    |-- build              （打包配置相关，无必要请勿动）
    |-- conifg             （打包配置相关，无必要请勿动）
    |-- dist               （发布目录）
    |-- mock               （mock接口相关）
    |-- node_modules       （node 依赖）
    |-- src                （工程目录）
        |-- assets         （动态资源文件，图片，css，每次都会走编译）
        |-- common         （业务组件）
        |-- components     （全局公用组件[此文件夹下单文件组件全部采用PascalCase命名规范]）
        |-- config         （项目请求配置）
        |-- pages          （页面逻辑[此文件夹下组件命名全部采用kebab-case规范]）
        |-- router         （路由配置）
        |-- service        （服务层）
        |-- store          （全局的 store 如登录信息）
        |-- utils          （工具层）
        |-- app.vue        （根vue节点）
        |-- main.js        （业务的根节点 js）


## 开发指南

* 按层级和功能划分目录，参考目录结构。
* 引入Eslint，统一代码编写规范，使用[Standard](https://standardjs.com/readme-zhcn.html)标准。
* [Vue风格指南](https://cn.vuejs.org/v2/style-guide/#单文件组件文件的大小写-强烈推荐)，建议使用。
* 路由支持异步组件加载
* Vuex 可以拆分至不同业务模块中，业务可自行选择是否使用 Vuex 来渐进增强开发

## vuex使用

[文档](https://vuex.vuejs.org/zh-cn/getting-started.html)

> Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？

视情况而定：
* 如果数据被多个组件共用，建议把对后端的请求都通过service/api中封装然后 Actions 中来调用，你业务代码里逻辑就只有对Action 的调用操作，更形象的就是直接对数据操作。而再不用管数据的返回之类的，因为数据返回直接会改变state，而state 的改变直接会触发 View 的更新。数据状态单向流动，提高效率。

* 如果数据只在当前组件使用，只需在当前组件methods中请求即可。（活动页单一，不用使用vuex）

## Git 分支管理实践 git-flow

git-flow 流程中包含 5 类分支，分别是 master、develop、新功能分支（feature）、发布分支（release）和 hotfix。这些分支的作用和生命周期各不相同。master 分支中包含的是可以部署到生产环境中的代码。develop 分支中包含的是下个版本需要发布的内容。从某种意义上来说，develop 是一个进行代码集成的分支。当 develop 分支集成了足够的新功能和 bug 修复代码之后，通过一个发布流程来完成新版本的发布。发布完成之后，develop 分支的代码会被合并到 master 分支中。

其余三类分支的描述如表 1所示。这三类分支只在需要时从 develop 或 master 分支创建。在完成之后合并到 develop 或 master 分支。合并完成之后该分支被删除。这几类分支的名称应该遵循一定的命名规范，以方便开发人员识别。

git-flow 分支类型

| 分支类型       |   命名规范   |   创建自   |  合并到   |  说明  |
| --------       |   -----:    |   -----:   |  -----:   |  :----: |
| feature        |   feature/* |   develop   |  develop |  新功能  |
| release        |   release/* |   develop   |  develop 和 master  |  一次新版本的发布  |
| hotfix         |   hotfix/*  |   develop   |  develop 和 master  |  生产环境中发现的紧急 bug 的修复  |

对于开发过程中的不同任务，需要在对应的分支上进行工作并正确地进行合并。每个任务开始前需要按照指定的步骤完成分支的创建。例如当需要开发一个新的功能时，基本的流程如下：

* 从 develop 分支创建一个新的 feature 分支，如 feature/my-awesome-feature。
* 在该 feature 分支上进行开发，提交代码，push 到远端仓库。
* 当代码完成之后，合并到 develop 分支并删除当前 feature 分支。

在进行版本发布和 hotfix 时也有类似的流程。当需要发布新版本时，采用的是如下的流程：

* 从 develop 分支创建一个新的 release 分支，如 release/1.4。
* 把 release 分支部署到持续集成服务器上进行测试。测试包括自动化集成测试和手动的用户接受测试。
* 对于测试中发现的问题，直接在 release 分支上提交修改。完成修改之后再次部署和测试。
* 当 release 分支中的代码通过测试之后，把 release 分支合并到 develop 和 master 分支，并在 master 分支上添加相应的 tag。