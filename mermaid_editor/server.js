import { serve } from "https://deno.land/std@0.206.0/http/server.ts";

const indexHtml = await Deno.readTextFile("index.html");
const chartHtml = await Deno.readTextFile("chart.html");

serve((req) => {
  const url = new URL(req.url);

  if (url.pathname === "/chart.html") {
    return new Response(chartHtml, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  } else {
    return new Response(indexHtml, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
}, { port: 8002 });

console.log("✅ 伺服器已啟動，請開啟 http://localhost:8002");
