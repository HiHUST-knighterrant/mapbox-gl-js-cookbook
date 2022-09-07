import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import { path } from '@vuepress/utils'
import searchPlugin from '@vuepress/plugin-search'
import registerComponentsPlugin from '@vuepress/plugin-register-components'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Mapbox GL JS Cookbook',
  description: 'Mapbox GL JS Cookbook',
  base: '/mapbox-gl-js-cookbook/',
  head: [['link', { rel: 'icon', href: '/mapbox-gl-js-cookbook/assets/logo.png' }]],
  bundler: viteBundler({
    // vite bundler config
  }),
  alias: {
    '@': path.resolve(__dirname, './'),
  },
  plugins: [
    searchPlugin({
      // 配置项
    }),
    registerComponentsPlugin({
      // 配置项
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  theme: defaultTheme({
    logo: '/assets/logo.png',
    navbar: [
      { text: '快速开始', link: '/starter/' },
      { text: '样式规范', link: '/style-spec/' },
      { text: '空间数据', link: '/data/' },
      { text: '插件', link: '/plugins/' },
      { text: '进阶', link: '/advance/' },
      { text: 'DECK.GL', link: '/deck-gl/' },
      {
        text: 'Mapbox',
        children: [
          { text: '文档丨英文', link: 'https://docs.mapbox.com/mapbox-gl-js/api/' },
          { text: '文档丨中文', link: 'https://www.mapbox.cn/mapbox-gl-js/api/' },
        ],
      },
    ],
    sidebarDepth: 2,
    // sidebar: 'auto',
    sidebar: {
      '/starter/': [
        {
          text: '快速开始',
          link: '/starter/',
        },
        {
          text: '术语',
          link: 'https://docs.mapbox.com/help/glossary/',
        },
        {
          text: '服务',
          children: [
            '/starter/service/',
            '/starter/service/wmts',
            '/starter/service/tms',
            '/starter/service/wfs',
            '/starter/service/wms',
            '/starter/service/ogcapi',
          ],
        },
      ],
      '/style-spec/': [
        {
          text: '样式规范',
          children: [
            '/style-spec/',
            '/style-spec/sprite',
            '/style-spec/glyphs',
            '/style-spec/sources',
            '/style-spec/layers',
            '/style-spec/expression',
            '/style-spec/light',
            '/style-spec/terrain',
          ],
        },
      ],
      '/data/': [
        {
          text: '空间数据',
          children: [
            '/data/',
            '/data/point',
            '/data/line',
            '/data/polygon',
            '/data/raster',
            '/data/thematic',
          ],
        },
      ],
      '/plugins/': [
        // {
        //   text: 'Plugins and frameworks',
        //   link: 'https://docs.mapbox.com/mapbox-gl-js/plugins/',
        // },
        {
          text: '插件',
          children: ['/plugins/image-layer', '/plugins/echarts-layer'],
        },
      ],
      '/advance/': [
        {
          text: '进阶',
          children: [
            '/advance/',
            '/advance/custom-source',
            '/advance/custom-layer',
            '/advance/track',
            '/advance/control',
            '/advance/ECharts',
            '/advance/threejs',
            '/advance/met',
          ],
        },
      ],
      '/deck-gl/': [
        {
          text: 'DECK.GL',
          children: [
            '/deck-gl/',
            '/deck-gl/ArcLayer',
            '/deck-gl/GridLayer',
            '/deck-gl/HexagonLayer',
            '/deck-gl/PathLayer',
          ],
        },
      ],
    },
    repo: 'huanglii/mapbox-gl-js-cookbook',
    docsDir: 'docs',
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页！',
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    contributors: true,
    contributorsText: '贡献者',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: ['404 未找到', '找不着了'],
    backToHome: '返回首页',
    openInNewWindow: '在新页面打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
  }),
})
