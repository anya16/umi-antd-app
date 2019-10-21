
import px2rem from 'postcss-plugin-px2rem';

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  hash:true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'umi-app',
      dll: true,
      hd: true,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  
  extraPostCSSPlugins: [
    px2rem({
      rootValue: 100,//开启hd后需要换算：rootValue=designWidth*100/750,此处设计稿为1920，所以1920*100/750=256
      propBlackList:['border','border-top','border-left','border-right','border-bottom','border-radius','font-size'],//这些属性不需要转换
      selectorBlackList:['t_npx']//以包含t_npx的class不需要转换
    })
  ]
}
