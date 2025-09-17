import { serveDir } from "@std/http";

const PORT = 8000;
// VitePress 默认的构建输出目录
const OUTPUT_DIR = '.vitepress/dist';

console.log(`HTTP web server running. Access it at: http://localhost:${PORT}/`);

Deno.serve({ port: PORT }, (req) => {
  // 使用 serveDir 提供静态文件
  return serveDir(req, {
    fsRoot: OUTPUT_DIR,
    urlRoot: "",
    showDirListing: false, // 不显示目录列表
    quiet: true,
  });
});
