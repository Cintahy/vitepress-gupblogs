import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import Mycomponent from "./components/Mycomponent.vue"
import Linkcard from "./components/Linkcard.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import xgplayer from "./components/xgplayer.vue"
import DataPanel from "./components/DataPanel.vue"
import confetti from "./components/confetti.vue"
import update from "./components/update.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import { h } from 'vue'
// 赞助者
// import HomeSponsors from './components/HomeSponsors.vue'
// 不蒜子
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import bsz from "./components/bsz.vue"
// 返回顶部
import backtotop from "./components/backtotop.vue"
// 公告栏
// import notice from "./components/notice2.vue"
// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";
// 谷歌统计
import googleAnalytics from 'vitepress-plugin-google-analytics'
// 图片缩放
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useData, useRoute } from 'vitepress';
// 看板娘
import { useLive2d } from 'vitepress-theme-website'
// import 'virtual:group-icons.css' //代码组样式
// giscus评论
import giscusTalk from 'vitepress-plugin-comment-with-giscus';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(bsz), //不蒜子layout-bottom插槽
      'doc-footer-before': () => h(backtotop), //返回顶部layout-bottom插槽
      // 'home-features-after': () => h(HomeSponsors),  // 赞助者
      // 'layout-top': () => h(notice), // 公告使用layout-top插槽
    })
  },

  enhanceApp({ app, router }) {
    app.component('Mycomponent' , Mycomponent)
    app.component('Linkcard' , Linkcard)
    app.component('HomeUnderline' , HomeUnderline)
    app.component('xgplayer' , xgplayer)
    app.component('DataPanel' , DataPanel)
    app.component('confetti' , confetti)
    app.component('update' , update)
    app.component('ArticleMetadata' , ArticleMetadata)
    // 不蒜子组件
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    // 谷歌统计
    googleAnalytics({
      id: 'G-******', //跟踪ID，在analytics.google.com注册即可
    })
  },

  setup() {
    const { frontmatter } = useData();
    const route = useRoute();

    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
        () => route.path,
        () => nextTick(() => initZoom())
    );

    //看板娘
    useLive2d({
      enable: true,
      model: {
        url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hibiki/hibiki.model.json'
      },
      display: {
        position: 'right',
        width: '135px',
        height: '300px',
        xOffset: '35px',
        yOffset: '5px'
      },
      mobile: {
        show: true
      },
      react: {
        opacity: 0.8
      }
    })

    // giscus配置
    giscusTalk({
          repo: 'Cintahy/vitepress-gupblogs',   // 仓库
          repoId: 'R_kgDONBHOew',               // 仓库ID
          category: 'Announcements',            // 讨论分类
          categoryId: 'DIC_kwDONBHOe84CjaSz',   // 讨论分类ID
          mapping: 'pathname',
          inputPosition: 'bottom',
          lang: 'zh-CN',
        },
        {
          frontmatter, route
        },
        //默认值为true，表示已启用，此参数可以忽略；
        //如果为false，则表示未启用
        //您可以使用“comment:true”序言在页面上单独启用它
        true
    );
  },
}
