
## 開啟DENO server

```bash
deno run -A server.js
```
### 之後服器已啟動，請開啟 http://localhost:8002

```css
/* 甘特圖背景整個改成淡黃色 */
.gridBackground rect {
  fill: #fff8e1 !important;
}

/* 甘特圖中去除掉目前時間線*/
.today {
    display: none;
}


/* 甘特圖的 bar 全部變成紅底、黑色字、大字體 */
.taskRect {
  fill: #ff0000 !important;
  stroke: #000 !important;
  stroke-width: 3px !important;
}
.taskText {
  fill: #fff !important;   /* 白色文字 */
  font-size: 15px !important; /* 字大 */
  font-weight: bold !important;
}

/* 左側任務標題變藍色 */
.labelText {
  fill: #1e90ff !important;
  font-size: 18px !important;
  font-weight: bold !important;
}

/* 改變標題或日期 */
.titleText {
  fill: #8b008b !important;  /* 紫色 */
  font-size: 24px !important;
  font-weight: 900 !important;
}
.axisText {
  fill: #000 !important;
  font-size: 16px !important;
  font-style: italic !important;
}
```



## 範例甘特圖mermaid語法

```mermaid
gantt
  title AI辨識專案
  dateFormat YYYY-MM-DD
  section 研究階段
  文獻回顧與資料整理   :done, 2025-02-01, 60d
  資料前處理與模型建構 :active, 2025-04-01, 90d
  section 開發階段
  前端介面設計       :b1, 2025-06-01, 60d
  後端 API 串接     :b2, 2025-07-01, 90d
```
## 範例自訂甘特圖style的mermaid語法

```mermaid

%%{init: {"gantt": {"axisFormat": "%Y-%m"}}}%%

%%{init: {
  "gantt": {
    "todayMarker": { "enabled": false },  
    "titleTopMargin": 50,
    "tickInterval": 5,
    "barHeight": 25,
    "barGap": 10,
    "topPadding": 80,
    "gridLineStartPadding": 50,
    "fontSize": 14,
    "fontFamily": "Arial, sans-serif",
    "numberSectionStyles": 4,
    "sectionPadding": 30
  }
}}%%

gantt
  title AI辨識專案
  dateFormat YYYY-MM-DD
  section 研究階段
  文獻回顧與資料整理   :done, 2025-02-01, 60d
  資料前處理與模型建構 :active, 2025-04-01, 90d
  section 開發階段
  前端介面設計       :b1, 2025-06-01, 60d
  後端 API 串接     :b2, 2025-07-01, 90d
      
```


## 範例心智圖 mermaid語法
``` mermaid
mindmap
  root((前端開發))
    HTML
    CSS
      排版與布局
      響應式設計
      預處理器 (Sass\, Less)
    JavaScript
      DOM 操作
      ES6+ 新特性
      非同步處理 (AJAX\, Promises)
      框架 / 函式庫
        React
        Vue
        Angular
    版本控制 (Git)
    套件管理工具 (npm\, yarn)
    建構工具 (Webpack\, Gulp\, Grunt)
    測試工具 (Jest\, Mocha)

```