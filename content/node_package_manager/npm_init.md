npm init
=======


## 前言


在一個空白的資料夾使用 `npm install [package]` 出現以下訊息：


```
npm WARN enoent ENOENT: no such file or directory, open '/資料夾路徑/package.json'
npm WARN [資料夾名稱] No description
npm WARN [資料夾名稱] No repository field.
npm WARN [資料夾名稱] No README data
npm WARN [資料夾名稱] No license field.
```


其實就是缺少 package.json 的設定檔，自行新增即可解決，不過想看看官方如何對此設定檔排版，於是就嘗試看看。



## 頁籤


* [簡介](#簡介)
* [演示](#演示)



## 簡介


引導創建 package.json 文件的實用程序。



## 演示


執行 `npm init` 命令：


```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

# 這實用程序將引導你創建的 package.json 文件。
# 它僅涵蓋最常用的物件，並試圖猜測合理的默認值。


See `npm help json` for definitive documentation on these fields and exactly what they do.

# 見 `npm help json` 以瞭解 Node 模組生態裡的設定檔和究竟它們能做什麼。


Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

# 使用 `npm install <pkg> --save` 在安裝軟體包後會將此軟體包依賴寫入 package.json 檔案。


Press ^C at any time to quit.

# 任何時候按 ^C 以退出。
```


```
name: [專案名稱]
version: [版本號]
description: [專案內容描述]
entry point: [模組進入檔案路徑]
test command: [test 命令的腳本語言]
（若留白則預設為： `echo "Error: no test specified" && exit 1`）
git repository: [Git 庫位置]（例：account/package）
keywords: [專案被搜尋關鍵字]（以 " " 或 "," 分開）
author: [作者]
license: (ISC) [授權許可]（必須以 SPDX 格式，關於 SPDX 見：https://spdx.org/licenses/）

{
  "name": "[專案名稱]",
  "version": "[版本號]",
  "description": "[專案內容描述]",
  "main": "[模組進入檔案路徑]",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "test": "[test 命令的腳本語言]"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/[Git 庫位置].git"
  },
  "keywords": [
    "[專案被搜尋關鍵字][0]",
    "[專案被搜尋關鍵字][1]",
    ...
  ],
  "author": "[作者]",
  "license": "[授權許可]",
  "bugs": {
    "url": "https://github.com/[Git 庫位置]/issues"
  },
  "homepage": "https://github.com/[Git 庫位置]#readme"
}


Is this ok? (yes) yes
```

