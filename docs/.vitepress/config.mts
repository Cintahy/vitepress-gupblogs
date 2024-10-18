import { defineConfig } from 'vitepress';
import { nav } from './configs';
import timeline from 'vitepress-markdown-timeline';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

const vitepressSidebarOptions = {
  /* Options... */
};

export default defineConfig({
  logo: '/logo2.png',
  // 在标签上显示所的 logo
  head: [["link", { rel: "icon", href: "/logo2.png" }]],
  lang: 'zh-CN', // 语言，可选 en-US
  title: 'GupBlog博客',
  description: '技术·生活·成长',
  srcDir: 'src',
  cleanUrls: true, // VitePress 将从 URL 中删除尾随.html
  lastUpdated: true, // 首次配置不会立即生效，需git提交后爬取时间戳
  base: '/vitepress-gupblogs/',

  themeConfig: {
    // 网站左上角 logo
    logo: "/logo.png",

    // 导航栏
    nav,

    // 大纲
    outline: {
      level: [2, 4], // 显示2-4级标题
      label: '当前页大纲', // 文字显示
      // level: 'deep', // 显示2-6级标题（注释掉，因为使用了具体级别）
    },

    // 侧边栏
    sidebar: [
      {
        text: '职场发展',
        collapsed: false,
        items: [
          {
            text: '项目经验',
            collapsed: true,
            items: [
              { text: '科学上网', link: '/notes/career/projects/index' },
            ]
          },
          {
            text: '功能与技术',
            collapsed: true,
            items: [
              { text: '科学上网', link: '/notes/career/skills/index' },
            ]
          },
        ],
      },

      {
        text: '技术探索',
        collapsed: false,
        items: [
          {
            text: 'Java深潜',
            collapsed: true,
            items: [
              { text: '科学上网', link: '/notes/tech/java/index' },
            ]
          },
          {
            text: '开源世界',
            collapsed: true,
            items: [
              { text: '科学上网', link: '/notes/tech/oss/index' },
            ]
          },
          {
            text: '技术资料库',
            collapsed: true,
            items: [
              { text: '科学上网', link: '/notes/tech/docs/index' },
            ]
          },
        ],
      },

      {
        text: '生活随笔',
        collapsed: false,
        items: [
          {
            text: '旅行印记',
            collapsed: true,
            items: [
              { text: '科学上网', link: '/notes/life/travel/index' },
            ]
          },
          {
            text: '光影瞬间',
            collapsed: true,
            items: [
              { text: '科学上网', link: '/notes/life/photos/index' },
            ]
          },
          {
            text: '个人成长',
            collapsed: true,
            items: [
              { text: '科学上网', link: '/notes/life/growth/index' },
            ]
          },
        ],
      },

      {
        text: '知识共享',
        collapsed: false,
        items: [
          {
            text: '实用工具箱',
            collapsed: true,
            items: [
              { text: '科学上网', link: '/notes/share/tools/index' },
            ]
          },
          {
            text: '学习资源集',
            collapsed: true,
            items: [
              { text: '科学上网', link: '/notes/share/learn/index' },
            ]
          },
          {
            text: '奇趣网络空间',
            collapsed: true,
            items: [
              { text: '科学上网', link: '/notes/share/web/index' },
            ]
          },
        ],
      },

      {
        text: '待办清单',
        collapsed: false,
        items: [
          {
            text: '职场任务',
            collapsed: true,
            items: [
              { text: '科学上网', link: '/notes/todo/work/index' },
            ]
          },
          {
            text: '生活乐事',
            collapsed: true,
            items: [
              { text: '科学上网', link: '/notes/todo/lifeTasks/index' },
            ]
          },
          {
            text: '自我拓展',
            collapsed: true,
            items: [
              { text: '科学上网', link: '/notes/todo/selfDev/index' },
            ]
          },
        ],
      },

    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Cintahy/vitepress-gupblogs'
      },
      // 自定义社交链接
      {
        // 开源于 https://www.iconfont.cn/ 上搜索图标，复制svg代码
        icon: {
          svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>'
        },
        link: 'https://weixin.qq.com/',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'wechat'
        // 拓展自定义微信公众号二维码
        // 参考资料：https://github.com/zhheo/Wechat-Official-Account-Web
      }
      // 如果还有其他社交链接，可以继续在这里添加
    ],

    // 本地搜索
    search: {
      provider: 'local',
    },

    // 编辑本页
    editLink: {
      pattern: 'https://github.com/Cintahy/vitepress-gupblogs/blob/main/docs/src/:path',
      text: '点击GitHub编辑笔记',
    },

    // 上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium', // 可选值full、long、medium、short
      },
    },

    // 自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // Markdown 配置
    markdown: {
      config: (md) => {
        md.use(groupIconMdPlugin); // 代码组图标

        // 插入组件到h1标题下
        md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') {
            htmlResult += `<ArticleMetadata />`;
          }
          return htmlResult;
        };

        // 时间线
        md.use(timeline);
      },
    },


    vite: {
      plugins: [groupIconVitePlugin()], // 代码组图标
    },
  },
});
