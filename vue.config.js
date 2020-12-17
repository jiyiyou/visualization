
const webpack = require('webpack')
// const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    // publicPath: '/',
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: './docs',
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: false,
    parallel: undefined,
    lintOnSave: false,
    devServer: {
        port: 8081,
        proxy: {
            '/': {
                // target:"http://192.168.1.159",
                // target:"http://b2c.admin.com",
                target:"http://xb.admin.com",
                // target: 'http://192.168.1.155',
                // target: 'http://192.168.1.194:8000',
                changeOrigin: true,
                ws: false, //值为false防止控制台报错★★★★★★★★
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    },
    chainWebpack: (config) => {
        /* 添加分析工具*/
        if (process.env.NODE_ENV === 'production') {
            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                    .end();
                config.plugins.delete('prefetch')
            }
        } },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
            return {
                plugins: [new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/, //匹配文件名
                    threshold: 10240, //对超过10k的数据进行压缩
                    deleteOriginalAssets: false //是否删除原文件
                })]
            }
            return {externals: {
                    "CKEDITOR": "window.CKEDITOR"
                }}
        }

        },
    // compress: {
    //     // 在UglifyJs删除没有用到的代码时不输出警告
    //     warnings: false,
    //     // 删除所有的 `console` 语句
    //     // 还可以兼容ie浏览器
    //     drop_console: true,
    //     // 内嵌定义了但是只用到一次的变量
    //     collapse_vars: true,
    //     // 提取出出现多次但是没有定义成变量去引用的静态值
    //     reduce_vars: true,
    // }


configureWebpack:{
        externals: {
            "CKEDITOR": "window.CKEDITOR"
        },
    },

};
