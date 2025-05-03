import TimelineViewer from "./components/TimelineViewer";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-center p-8">
      {/*    ↑↑↑
          flex               親をフレックスボックス
          min-h-screen       画面高いっぱい
          items-start        上端揃え（縦方向）
          justify-center     横方向を中央寄せ
          p-8                余白を少し入れる
      */}
      <TimelineViewer />
    </main>
  );
}
