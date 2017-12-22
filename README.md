# md2docs

🐶 Generate documents from markdown

<!-- logic -->

## ロジック

1. mdファイルを読み込み
2. ブロックごとに分割
3. json形式に変換
4. ejsへデータを渡す
5. ejsでhtmlへコンパイル
6. docsディレクトリへ出力orZipで圧縮

<!-- rule -->

## 分割ルール

1. `#` 〜 `##` までをトップページとして出力
2. `##` 〜 `##` をセクションごとにページとして出力
