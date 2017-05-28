歷程
=======


## 前言


以過來人的視角敘述想對後進說的話...



## 頁籤


* [大鋼 / 簡介](#大鋼--簡介)
* [正文](#正文)
* [參考](#參考)



## 大鋼 / 簡介


文章的大鋼或文章內容物的簡介...



## 安裝用戶端軟體


[官方下載頁](https://devcenter.heroku.com/articles/heroku-command-line)


```
wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
```



## 正文


登入


```
$ heroku login
Enter your Heroku credentials.
Email: bwaycer@gmail.com
Password (typing will be hidden):
Logged in as bwaycer@gmail.com
```


在 package.json 檔裡設定 Node 版本：（使用 v6.5.x 以上版本範例）


```json
{
  "name": "package-name",
  "version": "0.0.1",
  "dependencies": {},
  "engines": {
    "node": "6.5.x"
  }
}
```


在 Procfile 檔裡設定啟動指令：（Node 版範例）


```
web: node index.js
```


關於 Procfile 檔的相關閱讀：

    * [Procfile 文件介绍 - Coding 演示平台](http://docs.coding.io/references/procfile/)
    * [Procfile - \[ 云帮使用手册 \]](http://www.kancloud.cn/good-rain/manual/181955)
    * [Process Types and the Procfile | Heroku Dev Center](https://devcenter.heroku.com/articles/procfile)




## 未測試功能


建立 SSL 連線


```
heroku keys:add
```


軟體升級


```
$ heroku update
```



## 參考


* [\[NodeJS\] 將程式部署到 Heroku 上 - NodeJS on Heroku @ 賽拉維的秋天 :: 痞客邦 PIXNET ::](http://cire.pixnet.net/blog/post/37369672)
* [自己的網站自己寫 - 把 nodejs based website deploy 到 heroku 上 « Code Hard && Travel Hard](http://hiiamyes.logdown.com/posts/206488)
