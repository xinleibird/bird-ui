import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Bird UI',
  description: 'A Personal React UI Library',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'EN'],
  ],
  logo: 'https://raw.githubusercontent.com/xinleibird/bird-ui/gh-pages/logo180.png',
  favicon: 'https://raw.githubusercontent.com/xinleibird/bird-ui/gh-pages/favicon.ico',
  base: '/bird-ui',
  publicPath: '/bird-ui/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // dynamicImport: {},
  // more config: https://d.umijs.org/config
});
