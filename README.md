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
RSCSSを参考  
http://rscss.io/  
https://github.com/rstacruz/rscss

Sass導入を念頭に置いた構成  
http://developers.linecorp.com/blog/?p=1027  


### ファイル構造
import.cssへ出力  

```
▾ user/
  ▾ media/THEME-NAME/
    ▾ common/
    ▾ layout/
      ▾ footer/
      ▾ header/
      ▾ side/
    ▾ page/
  ▾ theme/THEME-NAME/
    ▾ media/
      ▾ css/
          import.scss
      ▾ js/
          common.js
      ▾ sass/
        ▾ base/
            _base.scss
            _cms.scss
        ▾ core/
          ▾ mixins/
              _clearfix.scss
              _grid-system.scss
            _class.scss
            _core.scss
            _float.scss
            _grid.scss
        ▾ module/
          ▾ button/
              _button01.scss
              _button02.scss
          ▾ pager/
              _pager01.scss
              _pager02.scss
            _img-cover.scss
        ▾ style/
            _common.scss
            _editor.scss
            _style.scss
            _variable.scss
          _settings.scss
          import.scss
      config.php
      preview.png
  Gemfile
  Gemfile.lock
  index.html
  README.md
```


### ディレクトリ説明
###### core
編集してはいけないファイルは基本ここに配置。
リセットCSS等の記述もここ。

###### module
今までは10回中10回使うものしかテンプレートには含んでいませんでした。  
なので、再利用出来るコード等も、それを以前書いたサイトに飛んでコピー・ペーストするというような形を取られていたと思います。  
Sassでは、cssとして吐き出す記述やファイルを選択できるので後々省くコードも問題なくテンプレートに置いておく事が可能です。  
  
ボタンやページャーのような10回中10回使うわけではないけれども、10回中3回ぐらい使う物をここに追加していくようにしたいと思っています。  
なおmoduleの役割上、個々のファイルのみで自己完結出来るよう他の要素（core.scssのリセットを除く）に影響されない書き方にするのを必須とします。

###### style
基本的に編集するのはこのディレクトリ。

### ファイル説明
*[no-edit] = 原則編集禁止*
*_ファイル名.scss = パーシャルファイル（CSSとしては吐き出されない、SCSSのimportで読み込むファイル。）*

###### import.scss [no-edit]
読み込むファイルを定義する。
CSSに変換されるのはこのファイルのみ。

###### core.scss [no-edit]
リセットやノーマライズを適用する。

###### grid.scss [no-edit]
グリッドシステムの記述。  

###### base.scss [no-edit]
以下デフォルト値の記述  
フォント、フォントサイズ  
リンク色、スタイル  
設定の変更はsettings.scssから

###### cms.scss [no-edit]
LightCMS（のみ）に必須の記述
設定の変更はsettings.scssから

###### settings.scss
sassの変数に対する設定を記述する

###### style.scss  
基本的に書き込むのはこのファイル

###### common.scss  
見出しや色々な箇所で使い回すクラスはここに記載

###### variable.scss
style.scssやcommon.scssで使う変数は基本的にここに記載

###### editor.scss
CMS内のエディタで上の方に表示させるクラス（テーブル、ボタン等）はここに記載

### 参考資料
#### CSS [core.css]
https://necolas.github.io/normalize.css/3.0.3/normalize.css  
https://github.com/murtaugh/HTML5-Reset/blob/master/assets/css/reset.css  
https://github.com/jonathantneal/sanitize.css/blob/master/sanitize.css  
http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset.css  
