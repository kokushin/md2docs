# md2docs

README.mdなどマークダウン形式のファイルからドキュメントを自動生成するツールです。

現時点では実用性はなく、md2docsのコンセプトをお試ししてもらう程度にしか作り込めていません。将来的には、__コマンド一つでREADME.mdからドキュメントページを生成できるようにしたい__と考えています。

このツールを使えばREADME.md内の記述とドキュメントページの記述の誤記がなくなる他、わざわざhtmlファイルを用意する手間も省けます。テンプレートエンジンにEJSを利用しているので、ドキュメントのテンプレートファイルを自分好みにカスタマイズすることも容易です。

md2docs独自のルールに従ってマークダウンを記述する必要がありますので、当ドキュメントをお読みの上ご利用ください。また、まだベータ版としての公開なので機能不足や動作が不安定な場合があります。

ご意見・ご要望、共同開発を行ってくれる方は[@kokushing](https://twitter.com/kokushing)、または[Issue](https://github.com/kokushin/md2docs/issuess)へ書き込みをお願いします。

<!-- install -->

## インストール

npmからインストールすることが可能になる予定です。

まだ公開していないのでクローンした後にローカル環境でお試しください。

```shell
$ git clone git@github.com:kokushin/md2docs.git
```

<!-- usage -->

## 使い方

README.mdが存在していることを確認し、下記のコマンドを実行してください。

```shell
$ npm run gen
```

無事コンパイルが完了すると、docsディレクトリにhtmlファイルが出力されているはずです。そのままGitHub Pagesで公開するか、サーバーへデプロイして動作を確認してください。

### 編集モード

下記コマンドを実行すると、README.mdが監視状態になります。

```shell
$ npm run edit
```

監視状態中は、マークダウンファイルを編集するたびにコンパイルが実行されるようになります。出力されたhtmlファイルをブラウザで開き動作を確認してください。

<!-- rule -->

## 記述ルール

md2docsを利用するにはいくつかのルールがあります。

### 1. `h1`はドキュメントの先頭で一度だけ記述する

md2docsではh1(例: # title)をページのタイトルとして扱うため、一度しか記述できません。

```
// NG

# title

# title2
```

### 2. ページ単位で分割する場合は`<!-- -->`を利用する

マークダウン中のセクションをページ単位に分割して出力したい場合は、`<!-- -->`をセクションの開始位置に記述します。

`<!-- -->`の中にはページのhtmlファイル名を記述します。例えば下記の例では、page1.htmlを出力します:

```
<!-- page1 -->

## page1
```

また、ページ分割を行った場合はh2(例: ## page1)がページタイトルとして扱われます。

<!-- todo -->

## ToDo

- コマンドライン化
- テーマのスタイル調整
- テーマにページャー機能追加
- コードのリファクタリング
- gulpをnpm scriptへ置き換え
- 英語対応

<!-- developer -->

## 開発者

[@kokushing](https://twitter.com/kokushing)