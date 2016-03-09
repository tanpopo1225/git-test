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

Sass導入を念頭に置いた構成  
http://developers.linecorp.com/blog/?p=1027  


### ファイル構造
import.cssへ出力（CMS設計上の理由）  

```
user/
|
| -- theme/THEME-NAME/
|    |-- media/
|        |-- sass/
|        |   |-- import.scss
|        |   |-- core/
|        |   |   |-- _settings.scss
|        |   |   |-- _core.scss
|        |   |   |-- _pc-grid.scss
|        |   |   |
|        |   |   |-- grid/
|        |   |       |--_grid.scss
|        |   |
|        |   |
|        |   |-- layout/
|        |   |   |-- _cms.scss
|        |   |   |-- _base.scss
|        |   |   |-- _layout.scss
|        |   |
|        |   |-- module/
|        |   |   |-- _module01.scss
|        |   |   |-- ...
|        |   |
|        |   |-- style/
|        |   |   |-- _style.scss
|        |
|        |
|        |-- css/
|            |-- import.css
```


### ディレクトリ説明
###### core
グリッドシステムのブレークポイント設定やそれぞれの余白等の設定ファイルは個々に設置。  
上記設定ファイルが影響を与えるグリッドシステムのファイルの等編集してはいけないファイルは基本ここに配置。

###### layout  
headerの高さや幅、サイドカラムの幅やfloat等のレイアウトに関するもののみ記述。  
backgroundやborder等の装飾的なものは一切書かない。

###### module  
今までは10回中10回使うものしかテンプレートには含んでいませんでした。  
なので、再利用出来るコード等も、それを以前書いたサイトに飛んでコピー・ペーストするというような形を取られていたと思います。  
Sassでは、cssとして吐き出す記述やファイルを選択できるので後々省くコードも問題なくテンプレートに置いておく事が可能です。  
  
ボタンやページャーのような10回中10回使うわけではないけれども、10回中3回ぐらい使う物をここに追加していくようにしたいと思っています。  
なおmoduleの役割上、個々のファイルのみで自己完結出来るよう他の要素（core.scssのリセットを除く）に影響されない書き方にするのを必須とします。

### ファイル説明
*[no-edit] = 原則編集禁止*
*_ファイル名.scss = パーシャルファイル（CSSとしては吐き出されない、SCSSのimportで読み込むファイル。）*

###### _settings.scss
グリッド幅や変数の設定

###### core.css [no-edit]  
リセットやノーマライズを適用する。

###### grid.css [no-edit]  
###### pc-grid.css [no-edit]  
グリッドシステムの記述。  
pcのプレフィックス付きは非レスポンシブのもの。  

###### base.css  
以下デフォルト値の設定  
フォント、フォントサイズ  
リンク色、スタイル

###### cms.css  
LightCMS（のみ）に必須の設定

###### style.css  
その他のスタイル

###### \_settings.scss
sassの変数に対する設定を記述する

## 参考資料
####CSS [core.css]
https://necolas.github.io/normalize.css/3.0.3/normalize.css  
https://github.com/murtaugh/HTML5-Reset/blob/master/assets/css/reset.css  
https://github.com/jonathantneal/sanitize.css/blob/master/sanitize.css  
http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset.css  
