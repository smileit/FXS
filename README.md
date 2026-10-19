# 风响树科技官网

深圳市风响树科技有限公司官方网站 — 软件开发 · 系统集成 · 技术服务。

## 技术栈

- **Next.js 15**（App Router）
- **React 19** + TypeScript
- **Tailwind CSS 4**
- **lucide-react** 图标

## 开发

```bash
npm install
npm run dev        # http://localhost:3000
```

## 构建

```bash
npm run build
npm run start
```

## 部署

推送到 `main` 分支即触发 Vercel 自动部署。项目配置见 `vercel.json`。

## 设计系统

所有颜色取自单一蓝色相，避免灰色与蓝色混用导致的割裂感。

| 用途 | Token | 值 |
|---|---|---|
| 页面底色 | `ink-950` | `#f2f7fd` |
| 表面 / 卡片 | `ink-900` 到 `ink-700` | 浅到深 |
| 强调 / CTA | `signal-500` | `#0f6fe0` |
| 标题文字 | `deep-950` | `#0b1f36` |
| 正文文字 | `deep-700` | `#2c5178` |

约定：文字色只从 `deep-*` 与 `signal-*` 取；`ink-*` 仅用于背景。

## 目录结构

- `app/` — 路由入口（layout / page）
- `src/components/` — 通用组件
- `src/sections/` — 页面区块
- `src/data/` — 内容数据
- `public/images/` — 静态图片
