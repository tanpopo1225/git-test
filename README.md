#s3-template

### 設計思想
メンテナンス性を高める  
拡張しやすいように  
初めて触る人でもすぐ理解出来るように  
案件によって柔軟に切り替えられるように（非レスポンシブ、静的サイト等）  
問題が起きる前に問題を想定して作成する  
理解していないコードは闇雲に追加せず、理解している（できる）もののみ追加する  


### フォーマット
文字エンコーディング UTF-8  
インデント スペース文字2個  
複数のセレクタの場合コンマで改行  
改行コード LF (UNIX)  


### CSS設計
SMACSSを参考  
http://03log.me/blog/2014-09-30-smacss.html  
http://chroma.hatenablog.com/entry/2013/07/22/120818  

Sass導入も念頭に置いた構成  
http://developers.linecorp.com/blog/?p=1027  


### ファイル構造
######CSSのみ
```
user/
|
| -- theme/
|    |-- THEME-NAME/media/
|        |-- css/
|            |-- core/
|            |   |-- core.css
|            |   |-- grid.css
|            |   |-- pc-grid.css
|            |
|            |-- layout/
|            |   |-- cms.css
|            |   |-- base.css
|            |   |-- layout.css
|            |
|            |-- module/
|            |   |-- module01.css
|            |   |-- ...
|            |
|            |-- style/
|            |   |-- style.css
|            |
|            |-- import.css
```

######Sassを導入した場合
master.cssへ出力  

```
user/
|
| -- theme/
|    |-- THEME-NAME/media/
|        |-- css/
|            |-- core/
|            |   |-- _config.rb
|            |   |-- _settings.scss
|            |   |-- _core.scss
|            |   |-- _grid.scss
|            |   |-- _pc-grid.scss
|            |
|            |-- layout/
|            |   |-- _cms.scss
|            |   |-- _base.scss
|            |   |-- _layout.scss
|            |
|            |-- module/
|            |   |-- _module01.scss
|            |   |-- ...
|            |
|            |-- style/
|            |   |-- _style.scss
|            |
|            |-- master.css
```


### ディレクトリ説明
- core  
編集してはいけないファイルは基本ここに配置

- layout

### ファイル説明
[no-edit] = 原則編集禁止

- core.css [no-edit]  
リセットやノーマライズを適用する。

- grid.css [no-edit]  
- pc-grid.css [no-edit]  
グリッドシステムの記述。  
グリッド余白拡張もここに記載する。  
pcのプレフィックス付きは非レスポンシブのもの。  

- base.css  
以下デフォルト値の設定  
フォント、フォントサイズ  
リンク色、スタイル

- cms.css  
LightCMS（のみ）に必須の設定

- style.css  
その他のスタイル

- \_settings.scss
sassの変数に対する設定を記述する

## 参考資料
####CSS [core.css]
https://necolas.github.io/normalize.css/3.0.3/normalize.css  
https://github.com/murtaugh/HTML5-Reset/blob/master/assets/css/reset.css  
https://github.com/jonathantneal/sanitize.css/blob/master/sanitize.css  
http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset.css  
