文章標題
=======


## 前言


以過來人的視角敘述想對後進說的話...



## 頁籤


* [大鋼 / 簡介](#大鋼--簡介)
* [正文](#正文)
* [參考](#參考)



## 大鋼 / 簡介


文章的大鋼或文章內容物的簡介...



## 正文


```
npm install -g yo generator-hubot
```


```
# yo hubot
node node_modules/yo/lib/cli.js hubot
```


__注意！這只會輸入一次，即是重新安裝也如此，真不知道它把值常到哪裡？__


```
? ==========================================================================
We're constantly looking for ways to make yo better!
May we anonymously report usage statistics to improve the tool over time?
More info: https://github.com/yeoman/insight & http://yeoman.io
========================================================================== (Y/n)

# 是否提供匿名數據來使 yo 軟體更好？ (Y/n)
```


為了查找上面的問題，我刪除、安裝多次，最後重開機後出現了問題：


```
Error hubot

You don't seem to have a generator with the name hubot installed.
You can see available generators with npm search yeoman-generator and then insta
ll them with npm install [name].
To see the 0 registered generators run yo with the --help option.
```


參考 [Error occurs when execute "yo hubot" · Issue #1 · github/generator-hubot](https://github.com/github/generator-hubot/issues/1) 來解決：


```
npm install https://github.com/github/generator-hubot/archive/master.tar.gz
```


```
 //////\  /_____\   \                             /                                                                                                   [16/266]
 ======= |[^_/\_]|   /----------------------------
  |   | _|___@@__|__
  +===+/  ///     \_\
   | |_\ /// HUBOT/\\
   |___/\//      /  \\
         \      /   +---+
          \____/    |   |
           | //|    +===+
            \//      |xx|

? Owner BwayCer <bwaycer@gmail.com>
? Bot name toolman
? Description 專屬工具人
? Bot adapter campfire
   create bin/hubot
   create bin/hubot.cmd
   create Procfile
   create README.md
   create external-scripts.json
   create hubot-scripts.json
   create .gitignore
 conflict package.json
? Overwrite package.json? overwrite
    force package.json
   create scripts/example.coffee
   create .editorconfig
                     _____________________________
 _____              /                             \
 \    \             |   Self-replication process   |
 |    |    _____    |          complete...         |
 |__\\|   /_____\   \     Good luck with that.    /
   |//+  |[^_/\_]|   /----------------------------
  |   | _|___@@__|__
  +===+/  ///     \_\
   | |_\ /// HUBOT/\\
   |___/\//      /  \\
         \      /   +---+
          \____/    |   |
           | //|    +===+
            \//      |xx|

toolman@0.0.0 /home/bwaycer/Documents/Source/chatbot
├── hubot@2.19.0
├── hubot-diagnostics@0.0.1
├── hubot-google-images@0.2.6
├── hubot-google-translate@0.2.0
├── hubot-help@0.2.0
├── hubot-heroku-keepalive@1.0.2
├── hubot-maps@0.0.2
├── hubot-pugme@0.1.0
├─┬ hubot-redis-brain@0.0.3
│ └── redis@0.8.4
├── hubot-rules@0.1.1
├── hubot-scripts@2.17.2
└── hubot-shipit@0.2.0
```



## 參考


* [參考資料](//bwaycer.github.io)

