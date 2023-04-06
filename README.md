# vue3-base-project

## tsconfig.json

TS 目前最新版本為 `v5.x`, 在研究新版前為求穩定先使用 `v4.x`.

其中 `importsNotUsedAsValues` 選項被棄用，其目的是規範引入 type 時強制使用 `import type` 語法，以避免 JS parser 解析了預期外的參數，增加錯誤的風險。

v5 版本的選項改為 `verbatimModuleSyntax`，因為先不升版，所以加入`ignoreDeprecations` 選項避免 Editor 報錯，若未來決定升版，再將`verbatimModuleSyntax`選項補上即可。

```typescript
{
  ...
  "compilerOptions": {
    "ignoreDeprecations": "5.0",
    // 升版後補上選項即可
    // "verbatimModuleSyntax": true
  },
  ...
}
```

也可以參考[issues#8650](https://github.com/sveltejs/kit/issues/8650#issuecomment-1402987777)的做法調整個人的 VSCode 版本

### REF

[verbatimModuleSyntax](https://www.typescriptlang.org/tsconfig#verbatimModuleSyntax) @official

[importsNotUsedAsValues](https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues) @official

[Announcing TypeScript 5.0](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/) @official

## env.d.ts

新增環境變數的智能提示配置`import.meta.env.[VITE...]`

```typescript
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // else environment variable...
}
```

### REF

[环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html#env-variables-and-modes) @vite official

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
