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
      { text: '用户文档', link: '/doc/快速上手' },
      { text: '开发文档', link: '/doc/开发文档' },
      { text: '关于', link: '/doc/关于' },
    ],

    sidebar: [
      {
        text: '用户文档',
        items: [
          { text: '快速上手', link: 'doc/快速上手' },
          { text: '导入歌曲', link: 'doc/导入歌曲' },
          { text: '信息编辑', link: 'doc/信息编辑' },
          { text: '基础功能', link: 'doc/基础功能' },

          { text: '说明文档', link: 'doc/说明文档' }
        ],
      },
      {
        text: '更新指南',
        items: [
          { text: '更新指南', link: 'doc/更新指南' },
        ]
      },
      {
        text: '开发文档',
        items: [
          { text: '开发文档', link: 'doc/开发文档' },
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
          { text: '更新日志', link: 'doc/更新日志' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qwwshs/dakumi' }
    ]
  }
})
