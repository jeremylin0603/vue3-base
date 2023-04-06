/// <reference types="vite/client" />

// 定義環境變數以獲得 TS 提示支援
// ref: https://cn.vitejs.dev/guide/env-and-mode.html#intellisense
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // else environment variable...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
