Heroku
=======


> 2017.03.03



## 前言


約莫在一年前因同事的介紹而得知這免費的雲端平台，但筆者尚未深入學習，只嘗試過網友的簡易操作而已，後又認識 OpenShift 而打算改用。



## 頁籤


* [簡介](#簡介)
* [安裝](#安裝)
* [歷程](#歷程)
* [未測試功能](#未測試功能)
* [參考](#參考)



## 簡介


[官網](https://devcenter.heroku.com/)


[關於定價](https://www.heroku.com/pricing)（__免費版閒置三十分鐘會休眠__）

> 網友表示： 不限制網站數，但總空間上限 5 MB。
  （見：[heroku是随意让免费用非创建无限个站吗？ · Ruby China](https://ruby-china.org/topics/1888)）



## 安裝


安裝用戶端軟體：
（[官方教學頁](https://devcenter.heroku.com/articles/heroku-command-line)）

```
wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
```



## 歷程


登入：

```
$ heroku login
Enter your Heroku credentials.
Email: mailname@example.com
Password (typing will be hidden):
Logged in as mailname@example.com
```


在 package.json 檔裡設定 Node 版本：（使用 v6.5.x 以上版本範例）

```json
"engines": {
  "node": "6.5.x"
}
```


在 Procfile 檔裡設定啟動指令：（Node 版範例）

```
web: node index.js
```


關於 Procfile 檔的相關閱讀：

  * [Procfile - \[ 云帮使用手册 \]](http://www.kancloud.cn/good-rain/manual/181955)
  * [Process Types and the Procfile | Heroku Dev Center](https://devcenter.heroku.com/articles/procfile)



## 未測試功能


建立 SSL 連線：

```
heroku keys:add
```


軟體升級：

```
$ heroku update
```



## 參考


* [\[NodeJS\] 將程式部署到 Heroku 上 - NodeJS on Heroku @ 賽拉維的秋天 :: 痞客邦 PIXNET ::](http://cire.pixnet.net/blog/post/37369672)
* [自己的網站自己寫 - 把 nodejs based website deploy 到 heroku 上 « Code Hard && Travel Hard](http://hiiamyes.logdown.com/posts/206488)
