摩卡
=======


> 2017.05.28



## 前言


在爪哇腳本編寫風格 [JSCS](/appendix/bilingual.md#爪哇腳本編寫風格)
的 [node-jscs/test](https://github.com/jscs-dev/node-jscs/tree/master/test)
測試文件發現這好用的測試框架。



## 頁籤


* [簡介](#簡介)
* [安裝](#安裝)
* [測試模式](#測試模式)
* [命令用法](#命令用法)
* [紀錄者](#紀錄者)
* [參考](#參考)


## 簡介


![摩卡標識](/mmrepo/mocha_logo.svg)

> [官網](https://mochajs.org/)


摩卡 [Mocha](/appendix/bilingual.md#摩卡)
是個功能豐富且可運行於節點和瀏覽器的爪哇腳本測試框架。



## 安裝


##### 節點


```
$ npm install --global mocha
```

```
$ npm install --save-dev mocha
```


執行方式：

```
$ mocha example.test.js
```




##### 瀏覽器


[官網說明](https://mochajs.org/#running-mocha-in-the-browser)

<a href="/mmrepo/mocha_example/run_in_browser" target="_blank">演示</a>


```
<link href="https://cdn.rawgit.com/mochajs/mocha/2.2.5/mocha.css" rel="stylesheet" />
<script src="https://cdn.rawgit.com/mochajs/mocha/2.2.5/mocha.js"></script>
```



## 測試模式


[官網說明](https://mochajs.org/#interfaces)


測試驅動開發 [TDD](/appendix/bilingual.md#測試驅動開發)：
為程式的編寫訂定規格書，確保預定被執行的功能順利完成。
<br>
行為驅動開發 [BDD](/appendix/bilingual.md#行為驅動開發)：
為產品使用訂定說明書，確保所有使用者行為都有對應的結果。
_「具體的代碼實現不影響 "行為驅動開發" 測試接口的編寫。」_


但在摩卡的使用上，筆者對測試模式的解釋為「相同功能，不同的接口名稱」，由於筆者不懂英文，所以挑了順眼的「BDD」接口來用 XDD

 BDD        | TDD
:---        |:---
describe    | suite
it          | test
before      | setup
after       | teardown
beforeEach  | suiteSetup
afterEach   | suiteTeardown



## 命令用法


[官網說明 - USAGE](https://mochajs.org/#usage)<br>
[官網說明 - MOCHA.OPTS](https://mochajs.org/#mochaopts)


    -h, --help                              output usage information
    -V, --version                           output the version number
    -A, --async-only                        force all tests to take a callback (async) or return a promise
    -c, --colors                            force enabling of colors
    -C, --no-colors                         force disabling of colors
    -G, --growl                             enable growl notification support
    -O, --reporter-options <k=v,k2=v2,...>  reporter-specific options
    -R, --reporter <name>                   specify the reporter to use
    -S, --sort                              sort test files
    -b, --bail                              bail after first test failure
    -d, --debug                             enable node's debugger, synonym for node --debug
    -g, --grep <pattern>                    指運行匹配 <pattern>（正規表示法）的測試
    -f, --fgrep <string>                    指運行符合 <string> 的測試
    -gc, --expose-gc                        expose gc extension
    -i, --invert                            inverts --grep and --fgrep matches
    -r, --require <name>                    require the given module
    -s, --slow <ms>                         "slow" test threshold in milliseconds [75]
    -t, --timeout <ms>                      設定超時毫秒數 [2000]
    -u, --ui <name>                         指定用戶介面 (bdd|tdd|qunit|exports)
    -w, --watch                             監看測試文件更新時執行測試
    --check-leaks                           check for global variable leaks
    --full-trace                            display the full stack trace
    --compilers <ext>:<module>,...          use the given module(s) to compile files
    --debug-brk                             enable node's debugger breaking on the first line
    --globals <names>                       allow the given comma-delimited global [names]
    --es_staging                            enable all staged features
    --harmony<_classes,_generators,...>     all node --harmony* flags are available
    --preserve-symlinks                     Instructs the module loader to preserve symbolic links when resolving and caching modules
    --icu-data-dir                          include ICU data
    --inline-diffs                          display actual/expected differences inline within each string
    --inspect                               activate devtools in chrome
    --interfaces                            display available interfaces
    --no-deprecation                        silence deprecation warnings
    --no-exit                               require a clean shutdown of the event loop: mocha will not call process.exit
    --no-timeouts                           disables timeouts, given implicitly with --debug
    --opts <path>                           specify opts path
    --perf-basic-prof                       enable perf linux profiler (basic support)
    --prof                                  log statistical profiling information
    --log-timer-events                      Time events including external callbacks
    --recursive                             遞迴搜尋子目錄測試文件
    --reporters                             display available reporters
    --retries <times>                       set numbers of time to retry a failed test case
    --throw-deprecation                     throw an exception anytime a deprecated function is used
    --trace                                 trace function calls
    --trace-deprecation                     show stack traces on deprecations
    --use_strict                            enforce strict mode
    --watch-extensions <ext>,...            additional extensions to monitor with --watch
    --delay                                 wait for async suite definition


摩卡會嘗試載入 `./test/mocha.opts` 文件做為預設配置，用法如下：


    --require should
    --reporter dot
    --ui bdd



### -g, --grep


`--grep` 選項可使用正規表示法選擇匹配的測試項描述予以顯示。

如下範例可用 `--grep api`、`--grep app`、`--grep users`、`--grep GET` 指定顯示不同的結果。


    describe( 'api', function () {
        describe( 'GET /api/users', function () {
            it( 'respond with an array of users', function () {
                // ...
            } );
        } );
    } );

    describe( 'app', function () {
        describe( 'GET /users', function () {
            it( 'respond with an array of users', function () {
                // ...
            } );
        } );
    } );



## 紀錄者


[官網說明 - REPORTERS](https://mochajs.org/#reporters)


* [`spec`](https://mochajs.org/#spec)（預設）
* [`dot`](https://mochajs.org/#dot-matrix)
* [`nyan`](https://mochajs.org/#nyan)
* [`tap`](https://mochajs.org/#tap)
* [`landing`](https://mochajs.org/#landing-strip)
* [`list`](https://mochajs.org/#list)
* [`progress`](https://mochajs.org/#progress)
* [`json`](https://mochajs.org/#json)
* [`json-stream`](https://mochajs.org/#json-stream)
* [`min`](https://mochajs.org/#min)
* [`doc`](https://mochajs.org/#doc)
* [`markdown`](https://mochajs.org/#markdown)
* [`html`](https://mochajs.org/#html)
* [`xunit`](https://mochajs.org/#undocumented-reporters)



## 參考


* [使用Mocha和Chai来测试Node.js应用 - GitHub.io](https://wwsun.github.io/posts/testing-node.js-with-mocha-and-chai.html)
* [How To Use Mocha With Node.js For Test-Driven Development to Avoid Pain and Ship Products Faster - webapplog](https://webapplog.com/tdd/)

