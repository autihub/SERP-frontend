# 山海雪冰 · 进销存系统（前端）

面向单店刨冰店的轻量级 Web 进销存管理平台前端，一期覆盖**采购、库存、销售、基础经营分析**。

## 技术栈

| 层级 | 选型 |
| --- | --- |
| 框架 | Vue 3 (Composition API) |
| 构建 | Vite |
| 语言 | TypeScript |
| UI | Element Plus |
| 路由 | Vue Router 4 |
| 状态 | Pinia |
| 请求 | Axios |
| 样式 | SCSS |

## 目录结构

```
SERP-frontend/
├── public/                 # 静态资源
├── src/
│   ├── api/                # 接口封装（request.ts 实例 + 各模块 api）
│   ├── components/         # 通用组件
│   ├── layouts/            # 布局（DefaultLayout：侧边栏 + 顶栏 + 内容区）
│   ├── router/             # 路由表
│   ├── stores/             # Pinia 状态
│   ├── styles/             # 全局样式
│   ├── types/              # 类型声明（env.d.ts 等）
│   ├── views/              # 页面
│   │   ├── dashboard/      # 工作台
│   │   ├── purchase/       # 采购管理
│   │   ├── inventory/      # 库存管理
│   │   ├── sales/          # 销售管理
│   │   ├── analytics/      # 经营分析
│   │   └── error/          # 404
│   ├── App.vue
│   └── main.ts
├── .env.development        # 开发环境变量
├── .env.production         # 生产环境变量
├── .env.example
├── index.html
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev
```

开发环境下，`/api` 会被代理到 `VITE_API_BASE_URL`（默认 `http://localhost:8080`，见 `.env.development`）。

## 构建与预览

```bash
npm run build      # 类型检查 + 生产构建，产物输出到 dist/
npm run preview    # 本地预览生产构建
npm run type-check # 仅类型检查
```

## 接口约定

- 基础地址：`/api`（dev 代理，prod 由 Nginx 反代）
- 统一返回结构：

```json
{ "code": 0, "message": "ok", "data": {} }
```

`code === 0` 或 `200` 视为成功，其余由全局拦截器弹出错误提示。

## 与后端的关系

后端仓库：<https://github.com/autihub/SERP-backend>（Java 17 + Spring Boot 3 + MyBatis-Plus + MySQL 8.4）

## 部署

生产环境由 Nginx 托管 `dist/` 静态资源，并将 `/api/*` 反向代理到 Spring Boot 后端。
