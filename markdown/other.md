# 其他补充

## vitepress 修改原主题样式

https://vitepress.yiov.top/style#%E4%B8%BB%E9%A2%98%E7%9B%AE%E5%BD%95-%E5%BF%85%E7%9C%8B

## windows 使用 App Store 安装 winget

https://apps.microsoft.com/detail/9nblggh4nns1?hl=en-US&gl=US

## vscode 安装 context7 mcp

1. 从[精选 MCP 服务器列表](https://vscode.js.cn/mcp)中安装一个 MCP 服务器。
2. 在您的工作区中创建一个 `.vscode/mcp.json` 文件。
```json
{
    "servers": {
        "context7": {
            "command": "bunx",
            "args": ["-y", "@upstash/context7-mcp@latest"]
        }
    }
}
```