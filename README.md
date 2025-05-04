# Quantum Pioneers Timeline

量子力学の開拓者たちの生涯と主要な業績を視覚的に確認できるインタラクティブなタイムラインビューアです。

![スクリーンショット](./images/screenshot.png)

## Features

- 生年から没年までをタイムラインで表示
- 年代のスライダーで各物理学者の年齢を確認可能
- 主要な業績をマーカーで表示（ノーベル賞は金色で表示）


## GitHub Pages

## URL

https://kichouji.github.io/quantum-pioneers-timeline


## 開発者向けガイド

### 前提条件

| ツール | 推奨バージョン | 備考 |
|--------|---------------|------|
| Node.js | ≥ 18.17 | `.nvmrc` を同梱、`nvm use` で一致します |
| npm     | ≥ 9.x        | `npm -v` で確認 |
| Git     | 任意         | SSH or HTTPS どちらでも可 |

### セットアップ

```bash
git clone https://github.com/kichouji/quantum-pioneers-timeline.git
cd quantum-pioneers-timeline
npm install
```

### ローカル開発

```bash
npm run dev
# デフォルト: http://localhost:3000
# basePath を有効にしている場合: http://localhost:3000/quantum-pioneers-timeline
```

* `app/components/TimelineViewer.jsx` は `use client` 指定済みです。
* Tailwind v3 + shadcn/ui のスタイルをホットリロードで確認できます。

### 本番ビルド（静的書き出し）

```bash
npm run build   # out/ に index.html, _next/** などが生成される
```

構成ファイル抜粋（`next.config.js`）:

```js
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};
```

### GitHub Pages へリリース

`.nojekyll` を含めてデプロイ

```bash
npm run deploy
# 内部で:
# 1) npm run build
# 2) echo > out/.nojekyll
# 3) gh-pages -d out --dotfiles
```

#### スクリプト一覧 (`package.json`)

| コマンド             | 説明                                      |
| ---------------- | --------------------------------------- |
| `npm run dev`    | 開発サーバー (ホットリロード)                        |
| `npm run build`  | 静的 HTML を `out/` へ生成                    |
| `npm run deploy` | `build` → `.nojekyll` → `gh-pages` push |
