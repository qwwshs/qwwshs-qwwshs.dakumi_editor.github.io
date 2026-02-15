import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dakumi",
  description: "dakumi",
  head: [  
    // 添加 favicon  
    ['link', { rel: 'icon', href: '/icon.ico' }],  
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/icon.png",
    nav: [
      { text: '主页', link: '/' },
      { text: '用户文档', link: '/doc/get_started_quickly' },
      { text: '开发文档', link: 'doc/development_documentation' },
      { text: '关于', link: 'doc/about' },
    ],

    sidebar: [
      {
        collapsible: true,
        collapsed:true,
        text: '用户文档',
        items: [
          { text: '快速上手', link: 'doc/get_started_quickly' },
          { text: '导入歌曲', link: 'doc/1input' },
          { text: '信息编辑', link: 'doc/2edit_info' },
          { text: '基础功能', link: 'doc/3basic_features' },

          { text: '说明文档', link: 'doc/documentlon' }
        ],
      },
      {
        text: '更新指南',
        items: [
          { text: '更新指南', link: 'doc/update_guide' },
        ]
      },
      {
        text: '开发文档',
        items: [
          { text: '开发文档', link: 'doc/development_documentation' },
        ]
      },
      {
        text: '关于',
        items: [
          { text: '关于', link: 'doc/about' },
        ]
      },
      {
        text: '更新日志',
        items: [
          { text: '更新日志', link: 'doc/update_log' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qwwshs/dakumi' }
    ]
  }
})
