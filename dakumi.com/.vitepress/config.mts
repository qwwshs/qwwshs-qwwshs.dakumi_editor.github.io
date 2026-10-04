import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from 'vitepress'

//default options
var options = {
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search docs",
  allow: [],
  ignore: [],
};


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dakumi",
  description: "Dakumi Editor 使用指南、谱面编辑与插件开发文档",
  head: [  
    // 添加 favicon  
    ['link', { rel: 'icon', href: '/icon.ico' }],  
  ],
  plugins: [SearchPlugin(options)],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    logo: "/icon.png",
    nav: [
      { text: '主页', link: '/' },
      { text: '用户文档', link: '/doc/快速上手' },
      { text: '开发文档', link: '/doc/开发文档' },
      { text: '关于', link: '/doc/关于' },
    ],

    sidebar: [
      {
        text: '用户文档',
        items: [
          { text: '快速上手', link: '/doc/快速上手' },
          { text: '导入歌曲', link: '/doc/导入歌曲' },
          { text: '信息编辑', link: '/doc/信息编辑' },
          { text: '基础功能', link: '/doc/基础功能' },

          { text: '编辑手册', link: '/doc/说明文档' },
          { text: '事件组', link: '/doc/事件组' },
          { text: '声纹图', link: '/doc/声纹图' },
          { text: '主题自定义', link: '/doc/主题自定义' }
        ],
      },
      {
        text: '更新指南',
        items: [
          { text: '更新指南', link: '/doc/更新指南' },
        ]
      },
      {
        text: '开发文档',
        items: [
          { text: '开发入门', link: '/doc/开发入门' },
          { text: '架构与接口', link: '/doc/开发文档' },
          { text: '插件开发', link: '/doc/插件开发' },
          { text: '音频服务', link: '/doc/音频服务' },
          { text: '输入与依赖', link: '/doc/输入与依赖' },
        ]
      },
      {
        text: '关于',
        items: [
          { text: '关于', link: '/doc/关于' },
        ]
      },
      {
        text: '更新日志',
        items: [
          { text: '更新日志', link: '/doc/更新日志' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qwwshs/dakumi' }
    ]
  }
})
