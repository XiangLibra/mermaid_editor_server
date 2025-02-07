import { serve } from "https://deno.land/std@0.206.0/http/server.ts";

// 產生 Mermaid.js HTML
const html = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mermaid.js 甘特圖</title>
    <script type="module">
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs';
        mermaid.initialize({ startOnLoad: true });
    </script>
</head>
<body>

<h2>Mermaid.js 甘特圖示例</h2>

<div class="mermaid">
%%{init: {"gantt": {"todayMarker": {"enabled": false}}}}%%
%%{init: {"gantt": {"axisFormat": "%Y-%m"}}}%%

%%{init: {
  "gantt": {
    "titleTopMargin": 50,
    "tickInterval": 5,
    "barHeight": 25,
    "barGap": 10,
    "topPadding": 80,
  
    "gridLineStartPadding": 50,
    "fontSize": 20,
    "fontFamily": "Arial, sans-serif",
    "numberSectionStyles": 4,
    "todayMarker": {"enabled": true, "color": "blue"},

    "sectionPadding": 30
  }
}}%%

%%{init: {"gantt": {"tickInterval": 30, "axisFormat": "%Y-%m"}}}%%

gantt
    title 榮科計畫專案規劃甘特圖
    dateFormat  YYYY-MM-DD

    section 張棨翔
    文獻回顧與資料整理            :a1, 2025-02-01, 59d
    資料前處理(圖片標籤與語音處理)     :a2, 2025-02-01, 90d
    深度學習模型建構與訓練        :a3, 2025-04-01, 105d
    系統整合與原型驗證            :a4, 2025-06-01, 122d
    預測結果驗證與分析         :a5, 2025-09-01, 91d
    報告撰寫與提交            :a6, 2025-11-01, 61d

                        
    section 陳禹丞
    熟悉Dify與前端學習           :b1, 2025-02-01, 59d
    資料前處理(圖片標籤與語音處理)     :b2, 2025-03-01, 92d
    聊天介面原型開發            :b3, 2025-03-01, 153d
    IRB新案支援與介面優化         :b5, 2025-08-01, 122d



    section 曾益銓
    熟悉Dify與NoSQL學習      :c1, 2025-02-01, 59d
    資料前處理(圖片標籤與語音處理)       :c2, 2025-03-01, 92d
    API與NoSQL原型開發          :c3, 2025-03-01, 153d
    IRB新案支援與系統優化         :c5, 2025-08-01, 122d

</div>

</body>
</html>
`;

// 啟動 Deno HTTP 伺服器
serve((req) => new Response(html, { headers: { "content-type": "text/html" } }), { port: 8002 });

console.log("Deno 伺服器已啟動，請開啟 http://localhost:8002 查看 Mermaid.js 甘特圖");
