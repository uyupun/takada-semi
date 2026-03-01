# 高田ゼミ

高橋 x 飛田 x 村田 ゼミ

## 開催日時

- 基本的に週に一度開催する
- 一回数十分〜二時間程度の開催
- 曜日や開始時刻は参加者間で臨機応変に調整する
- 参加者全員が必ずしも発表する必要はなく、発表者が0人の場合や参加者が1人以下の場合はスキップしても良い

## 新規参加

- 新規参加者は [src/data/members.json](https://github.com/uyupun/takada-semi/blob/main/src/data/members.json) に名前や各種リンクを設定する
- このソースはトップページにおけるゼミ生一覧や、発表記事のAuthorとして参照される

## 環境構築

- 本リポジトリの機能改修をしたい場合や発表をしたい場合は環境構築を行う必要がある
- [mise](https://mise.jdx.dev/) を使用して環境を構築する
- miseをインストールしていない場合は [公式ドキュメント](https://mise.jdx.dev/getting-started.html) を参照してインストールする

```bash
$ mise trust
$ mise install
$ pnpm install
$ pnpm exec lefthook install
$ pnpm dev
```

## 事前準備

- 発表者は事前に発表資料を用意する
- 本リポジトリの `main` ブランチから新たにブランチを作成し、そこに発表資料を追加し、PRを作成しておく(PR作成は発表後でも可)
- 資料の形式はMDX形式(拡張されたマークダウン)で作成する
- `src/content/docs/yyyy` 以下に `mm-dd` 形式のディレクトリを作成し、その配下に誰の資料か分かる名称でファイル又はディレクトリを作成する(例: `kazukichi.mdx`)
    - その際、フロントマターとAuthorコンポーネントの設定を忘れずに行う

```mdx
---
title: hogehoge
author: kazukichi
---
import Author from '@components/Author.astro';

<Author frontmatter={frontmatter} />

# ここから本文
```

- 稀に上手くレンダリングできていないことがあるので、 `pnpm dev` でローカルサーバーを立ち上げて確認することが推奨される
    - ※ ファイル追加/削除を行ってもサイドバーにはホットリロードがかからないので再起動が必要
- 資料はそこまで体裁を整えて書く必要はなく、最低限人に説明したり、後から見返して理解できるような温度感で作成する
- 調査時に参考にした記事やハードウェアの型番、ソフトウェアのバージョン等は極力、資料にまとめておく

## 画像を表示したい場合

- ドキュメントに画像を表示したい場合、画像がリンク切れになってもさほどコンテンツで伝えたいこと自体に影響がないものはURLから読み込んで良い
- そうでないものに関しては極力、本リポジトリ内に画像を配置し、それをドキュメントから読み込むようにする
    - `public/content/images/yyyy/mm-dd/` 配下に誰の資料か分かる名称でディレクトリを作成し(例: `kazukichi`)、その中に画像を格納し、 `ContentImage` コンポーネントを利用して描画する
    - `ContentImage` コンポーネントは表示したい画像の `yyyy` 以降のパスを `path` 引数に指定し、画像のサイズを `width` 引数に指定する(こちらは任意)

```mdx
<ContentImage path="2025/06-05/kazukichi/chatgpt_real.png" width="300" />
```

## 発表

- 発表者が事前にまとめてきた資料を口頭で説明し、他の参加者がそれに対して質問や意見を投げかける
- その内容を参考に、次回の調査内容等を考えても良い

## 発表後

- 各々で `main` ブランチにマージする

## ライセンス

- ソースコード: [MIT License](./LICENSE)
- コンテンツ(テキスト、画像、その他素材): [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) © 2025 Takada Semi
