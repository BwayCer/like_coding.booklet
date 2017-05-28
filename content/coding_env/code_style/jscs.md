爪哇腳本編寫風格
=======


> 民國 106.01.13



## 前言


或許很多人都像筆者一樣很在意語法的外觀。
即使它不影響程式運行，但多或少了個空白就是彆扭彆扭的。

不過規範定出來怎麼遵守，人工檢查嗎？
最近看到保哥的
[前端工程師必須學會的現代化前端開發工具](http://blog.miniasp.com/post/2015/08/13/essential-frontend-tools-2015.aspx)
這篇文章，就決定學爪哇腳本編寫風格
（[jscs.info](http://jscs.info/)）
，有高人指導總感到心安，之後也將在依這篇多學些好用工具。


另外最近看到
[適用於爪哇腳本的淨化程式碼觀念（英文）](http://github.com/ryanmcdermott/clean-code-javascript)
，先分享，還沒開始看。



## 頁籤


* [簡介](#簡介)
* [正文](#正文)
* [參考](#參考)



## 簡介


![爪哇腳本編寫風格標誌](/mmrepo/jscs_logo.png)

> [官網](http://jscs.info/)
> 、
> [節點軟體包管理器](http://www.npmjs.com/package/jscs)
> 、
> [輯倉儲](http://github.com/jscs-dev/node-jscs)


__爪哇腳本編寫風格已與 ESLint 合併！__


檢查爪哇腳本

`jscs file.js --preset=airbnb`

你能使用內置的預設選項來檢查，或者分享你擁有的風格。


支持 ECMAScript2015

編譯 ES6/7 支援 ECMAScript2015


自動修正被檢查出的錯誤

`jscs src --fix`


當關閉

`jscs --auto-configure src`



## 正文


Presets

Note: the easiest way to use a preset is with the preset option described below.

* Airbnb — https://github.com/airbnb/javascript
* Crockford — http://javascript.crockford.com/code.html
* Google — https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
* Grunt — http://gruntjs.com/contributing#syntax
* Idiomatic — https://github.com/rwaldron/idiomatic.js#idiomatic-style-manifesto
* jQuery — https://contribute.jquery.org/style-guide/js/
* MDCS — https://github.com/mrdoob/three.js/wiki/Mr.doob's-Code-Style™
* node-style-guide - https://github.com/felixge/node-style-guide
* Wikimedia — https://www.mediawiki.org/wiki/Manual:Coding_conventions/JavaScript
* WordPress — https://make.wordpress.org/core/handbook/coding-standards/javascript/



## 參考


* [參考資料](http://example.com)

