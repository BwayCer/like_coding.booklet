文章標題
=======


## 前言


目標是完成可封閉執行的讀者樹而開始試驗，
先前測試過節點的沙盒卻卡在安全性的阻擋了某些功能而放棄，
也轉向至異步模組的研究，
進而發現其可做為我欲創作的「標籤元素管理器」框架中的底層環境。




## 頁籤


* [大綱 / 簡介](#大綱--簡介)
* [正文](#正文)
* [異步模組定義](#異步模組定義)
  * [識別碼](#識別碼)
  * [依賴模組](#依賴模組)
  * [工廠](#工廠)
  * [自定義屬性](#自定義屬性)
  * [多次定義模組在同一文件](#多次定義模組在同一文件)
  * [範例](#範例)
* [參考 require.js 腳步](#參考-requirejs-腳步)
  * [發展緣由](#發展緣由)
  * [入口文件](#入口文件)
  * [載入模組](#載入模組)
  * [載入不符規範的模組](#載入不符規範的模組)
* [參考](#參考)



## 簡介


此文主要為完成異步模組定義前的前哨介面定義，由於編寫耗時，先做定義以安於一時。


若對異步模組定義不熟悉，或想了解其與 CommonJS 規範有何差異，可閱讀
[AMD 規範 - html5jscss](http://www.html5jscss.com/amd-js.html)
文章。

若對以異步模組定義規範所實現的框架有興趣，可閱讀
[RequireJS 教程 - 阮一峰](http://javascript.ruanyifeng.com/tool/requirejs.html)
文章。


## 異步模組定義


異步模組定義，原文為「Asynchronous Module Definition（AMD）」，定義模組與其依賴能異步加載的規範。

本規範圍繞於 `define()` 函式的建設：

```
define( id?, dependencies?, factory );
```


### 識別碼


* `id`： 指定模組的識別碼。
* 可選。
* 型別： 文字。


如果省略，該模組的識別碼默認為請求文件的路徑作為名稱。
若有指定，則必須是「頂級」（top-level）或者「絕對的」識別碼（不允許相對的識別碼）。


##### 識別碼格式


模組識別碼可用於區分模組，這也在指定依賴模組的參數上被使用。

[CommonJS 模組識別碼](http://wiki.commonjs.org/wiki/Modules/1.1.1#Module_Identifiers)
中的規範也是異步模組定義規範的一部分，引用該頁說明：

  * 模組識別碼以正斜線（`/`）來分隔拼接的「字詞」。
  * 「字詞」可為 `.`、`..` 或符合駝峰式書寫的名稱。
  * 模組識別碼可忽略 `.js` 的擴展名。
  * 模組識別碼可能為「頂級」（top-level）或「相對的」。
    若以 `.` 或 `..` 開頭的即為「相對的」識別碼。
  * 「頂級」（top-level）的識別碼是被解析藉由概念（conceptual）模組命名空間的根。
  * 「相對的」識別碼被解析基於送出請求的模組的識別碼。


**簡單來說，模組識別碼如同網址路徑般的組成和用途。**
單就相對路徑的請求，做以下的解析說明：

  * 如果 `a/b/c` 的模組送出 `../d` 請求，則被請求的模組被解析為 `a/d`。
  * 如果 `a/b/c` 的模組送出 `./e` 請求，則被請求的模組被解析為 `a/b/e`。



### 依賴模組


* `dependencies`： 請求所依賴的模組。
* 可選，預設： `[ 'require', 'exports', 'module' ]`。
* 型別： 數組陣列。


為數個識別碼所組成的數組陣列，為正在建立的模組請求其所依賴的相關模組。
其請求在執行模組工廠函式之前，並把所得結果依數組陣列的排序傳入模組工廠函式的參數中。

欲請求得模組可使用相對的識別碼，它會被解析相對於正在建立模組的模組識別碼。
其中規範了 `require`、`exports` 和 `module` 三個名稱具特殊用途，依照 CommonJS 規範給予相對應的參數。



### 工廠


* `factory`： 請求所依賴的模組。
* 型別： 任意型別。


工廠為該模組賦予意義，其直可能為任意物件，亦或是用於初始化的函式。
若為物件，就分配給模組作為其值。
若為函式，則執行並將 `return` 回傳的物件分配給模組作為其值。


**不確定是否不允許物件陣列和函式以外的型態作為模組值，若非上述兩者則強行轉換相應的布林值（any value that coerces to true）。**

**不確定是否使用了 `exports` 或 `module` 的依賴時，原邏輯的 `return` 回傳值失效。



### 自定義屬性

define.amd property


為了擴展使用面並當使用瀏覽器時能符合異步模組定義的規範，
允許在全域的 `define` 函式中加入 `define.amd` 物件陣列，用於設定自定義的值來擴展不符合規範的程式介面。


如何實現在同一環境載入多個版本的範例：

```
define.amd = {
    multiversion: true
};
```



### 多次定義模組在同一文件


`define` 函式可以在相同的腳本文件中多次調用，
位置影響的5執行順序並不重要，
較早送出的依賴模組請求，可以在晚些的才被定義。



### 範例


##### 使用 `require` and `exports`


創建一個名為 `alpha` 的模組，使用了 `require`、`exports` 和一個 `beta` 的模組：

```
define( 'alpha', [ 'require', 'exports', 'beta' ], function ( require, exports, beta ) {
    exports.verb = function() {
        return beta.verb();
        // Or:
        return require( 'beta' ).verb();
    }
} );
```


一個返回物件陣列的匿名模組：

```
define( [ 'alpha' ], function ( alpha ) {
    return {
        verb: function (){
            return alpha.verb() + 2;
        }
    };
} );
```


一個沒依賴性的模組能直接定義其物件：


```
define({
    add: function( x, y ) {
        return x + y;
    }
} );
```


簡單使用 CommonJS 的模組：

```
   define(function (require, exports, module) {
     var a = require('a'),
         b = require('b');

     exports.action = function () {};
   });
```



## 參考 require.js 腳步


### 發展緣由

過往，這是我們載入爪哇腳本最普遍的方式：

```html
<script src="js/example.js"></script>
```

但其缺點就是文件載入期間網頁會停止呈現，若花費在此的時間過長用戶就會有當機的感覺。

為了解決這問題，較新的瀏覽器開始支援以下寫法：

```html
<script src="js/example.js" defer async="true"></script>
```

  * `defer`： 如同將 `<script>` 移至網頁底部，等到超文本標記語言中的 `document` 解析完後才開始執行。
  * `async="true"`： 如同將「AJAX」異步執行，不會造成執行程式的阻塞。



### 入口文件


假設入口文件為 `main.js`，和 `require.js` 放於相同的資料夾，則需被寫成：

```html
<script src="js/require.js" data-main="js/main"></script>
```

  * `data-main`： 指定入口文件網址，`.js` 副檔名可被省略。

**網址的相對路徑是以該網頁網址為基準。**



### 載入模組


在主模組（main.js）上使用 `require.config` 來宣告欲使用的物件模組，
其模組的路徑相對於主模塊，若模組在其他網域上則需提供完整路徑，使用如下：

```
require.config( {
　　paths: {
        // 網整路徑
    　　jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min'
        // 相對於主模組的路徑
　　　　underscore: 'lib/underscore.min',
　　　　backbone: 'lib/backbone.min',
　　}
} );
```


而你也可以使用 `baseUrl` 改變相對路徑的基準路徑：

```
require.config( {
　　baseUrl: "js/lib",
　　paths: {
　　　　underscore: 'underscore.min',
　　　　backbone: 'backbone.min',
* 更了解異步模組定義：
  * [網站前端開發上一些名詞： requireJS, Browserify, AMD, commonJS, npm, Bower « Yulin](http://yulin-learn-web-dev.logdown.com/posts/306644)
　　}
} );
```



### 載入不符規範的模組


除了上述 `paths` 要提供外，還要填寫 `shim` 來描述模組的相依性和「特徵」，如下：

```
require.config({
　　shim: {
　　　　underscore: {
　　　　　　exports: '_',
　　　　},
　　　　backbone: {
　　　　　　deps: ['underscore', 'jquery'],
　　　　　　exports: 'Backbone',
　　　　}
　　}
});
```

  * `deps`： 該模組的相依模組。
  * `exports`： 該模組的特徵（調用名稱）。



## 參考


* [Javascript模块化编程（三）：require.js的用法 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2012/11/require_js.html)
* [RequireJS和AMD规范 -- JavaScript 标准参考教程（alpha）](http://javascript.ruanyifeng.com/tool/requirejs.html)
* [amdjs/amdjs-api: Houses the Asynchronous Module Definition API - GitHub](https://github.com/amdjs/amdjs-api)
* [script - HTML（超文本标记语言） | MDN](http://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script)

