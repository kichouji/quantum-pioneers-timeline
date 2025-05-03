'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const physicists = [
  { 
    name: "マックス・プランク", 
    birth: 1858, 
    death: 1947,
    achievements: [
      { year: 1900, description: "量子仮説の提唱" },
      { year: 1918, description: "ノーベル物理学賞" }
    ]
  },
  { 
    name: "アーノルド・ゾンマーフェルト", 
    birth: 1868, 
    death: 1951,
    achievements: [
      { year: 1916, description: "ボーア・ゾンマーフェルトの量子化条件" }
    ]
  },
  { 
    name: "アーネスト・ラザフォード", 
    birth: 1871, 
    death: 1937,
    achievements: [
      { year: 1911, description: "原子核の発見" },
      { year: 1908, description: "ノーベル化学賞" }
    ]
  },
  { 
    name: "アルベルト・アインシュタイン", 
    birth: 1879, 
    death: 1955,
    achievements: [
      { year: 1905, description: "光量子仮説" },
      { year: 1935, description: "EPR論文" }
    ]
  },
  { 
    name: "パウル・エーレンフェスト", 
    birth: 1880, 
    death: 1933,
    achievements: [
      { year: 1927, description: "断熱原理の定式化" }
    ]
  },
  { 
    name: "マックス・ボルン", 
    birth: 1882, 
    death: 1970,
    achievements: [
      { year: 1926, description: "波動関数の確率解釈" },
      { year: 1954, description: "ノーベル物理学賞" }
    ]
  },
  { 
    name: "ニールス・ボーア", 
    birth: 1885, 
    death: 1962,
    achievements: [
      { year: 1913, description: "原子模型の提唱" },
      { year: 1922, description: "ノーベル物理学賞" }
    ]
  },
  { 
    name: "エルヴィン・シュレーディンガー", 
    birth: 1887, 
    death: 1961,
    achievements: [
      { year: 1926, description: "シュレーディンガー方程式" },
      { year: 1933, description: "ノーベル物理学賞" }
    ]
  },
  { 
    name: "ルイ・ド・ブロイ", 
    birth: 1892, 
    death: 1987,
    achievements: [
      { year: 1924, description: "物質波の提唱" },
      { year: 1929, description: "ノーベル物理学賞" }
    ]
  },
  { 
    name: "ヴォルフガング・パウリ", 
    birth: 1900, 
    death: 1958,
    achievements: [
      { year: 1925, description: "パウリの排他原理" },
      { year: 1945, description: "ノーベル物理学賞" }
    ]
  },
  { 
    name: "エンリコ・フェルミ", 
    birth: 1901, 
    death: 1954,
    achievements: [
      { year: 1926, description: "フェルミ統計の確立" },
      { year: 1934, description: "β崩壊理論" },
      { year: 1938, description: "ノーベル物理学賞" }
    ]
  },
  { 
    name: "ヴェルナー・ハイゼンベルク", 
    birth: 1901, 
    death: 1976,
    achievements: [
      { year: 1925, description: "行列力学" },
      { year: 1927, description: "不確定性原理" },
      { year: 1932, description: "ノーベル物理学賞" }
    ]
  },
  { 
    name: "ポール・ディラック", 
    birth: 1902, 
    death: 1984,
    achievements: [
      { year: 1928, description: "ディラック方程式" },
      { year: 1933, description: "ノーベル物理学賞" }
    ]
  },
  { 
    name: "J・ロバート・オッペンハイマー", 
    birth: 1904, 
    death: 1967,
    achievements: [
      { year: 1939, description: "ボルン・オッペンハイマー近似" }
    ]
  },
  { 
    name: "デビッド・ボーム", 
    birth: 1917, 
    death: 1992,
    achievements: [
      { year: 1952, description: "隠れた変数理論" }
    ]
  },
  { 
    name: "リチャード・ファインマン", 
    birth: 1918, 
    death: 1988,
    achievements: [
      { year: 1948, description: "ファインマン図の考案" },
      { year: 1965, description: "ノーベル物理学賞（量子電磁力学）" }
    ]
  },
  { 
    name: "ジョン・スチュワート・ベル", 
    birth: 1928, 
    death: 1990,
    achievements: [
      { year: 1964, description: "ベルの不等式" }
    ]
  },
  { 
    name: "スティーブン・ワインバーグ", 
    birth: 1933, 
    death: 2021,
    achievements: [
      { year: 1967, description: "電弱統一理論" },
      { year: 1979, description: "ノーベル物理学賞" }
    ]
  }
].sort((a, b) => a.birth - b.birth);

const TimelineViewer = () => {
  const [currentYear, setCurrentYear] = useState(1900);
  
  const startYear = 1858;
  const endYear = 2021;
  
  const calculateAge = (birth, death, year) => {
    if (year < birth) return null;
    if (year > death) return null;
    return year - birth;
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="pb-2">
        <CardTitle>量子力学の開拓者たち 1858-1992</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>{startYear}</span>
            <span>{currentYear}</span>
            <span>{endYear}</span>
          </div>
          <input
            type="range"
            min={startYear}
            max={endYear}
            value={currentYear}
            onChange={(e) => setCurrentYear(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-center font-bold mt-1 mb-2">
            選択年: {currentYear}年
          </div>
        </div>

        <div className="relative">
          <div className="space-y-4">
            {physicists.map((physicist, index) => {
              const age = calculateAge(physicist.birth, physicist.death, currentYear);
              const width = `${((physicist.death - physicist.birth) / (endYear - startYear)) * 100}%`;
              const left = `${((physicist.birth - startYear) / (endYear - startYear)) * 100}%`;
              
              return (
                <div key={physicist.name} className="relative h-14">
                  <div className="absolute left-0 text-sm font-medium">
                    {physicist.name}
                    {age !== null && ` (${age}歳)`}
                  </div>
                  <div className="absolute w-full h-5 bg-gray-100 top-6">
                    <div
                      style={{ width, left }}
                      className="absolute h-full bg-blue-200 border border-blue-400"
                    />
                    {physicist.achievements.map((achievement, i) => {
                      const achievementLeft = `${((achievement.year - startYear) / (endYear - startYear)) * 100}%`;
                      const isNobelPrize = achievement.description.includes("ノーベル");
                      return (
                        <div
                          key={i}
                          style={{ left: achievementLeft }}
                          className="absolute group z-20"
                        >
                          <div 
                            className={`relative -top-1 w-3 h-3 -ml-1.5 rounded-full border-2 border-white 
                              hover:w-4 hover:h-4 hover:-ml-2 hover:-top-1.5 transition-all cursor-pointer
                              ${isNobelPrize ? 'bg-yellow-400' : 'bg-red-500'}`}
                          >
                            <div className="absolute opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-xs p-1.5 rounded 
                              whitespace-nowrap -translate-x-1/2 -translate-y-full -top-1 left-1/2 pointer-events-none z-30
                              shadow-lg transition-opacity duration-200">
                              {achievement.year}年: {achievement.description}
                            </div>
                          </div>
                          <div className="absolute text-xs whitespace-nowrap top-4 -translate-x-1/2">
                            {achievement.year}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="absolute text-xs text-gray-500 bottom-0 leading-none" style={{ left }}>
                    {physicist.birth}
                  </div>
                  <div 
                    className="absolute text-xs text-gray-500 bottom-0 leading-none" 
                    style={{ left: `calc(${left} + ${width})` }}
                  >
                    {physicist.death}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimelineViewer;
