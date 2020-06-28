module.exports={//导出配置，到时候会和公共配置合并
    configureWebpack:{//准备配置config的webpack，是一个对象
        resolve:{//配置路径相关
            alias: {//    配置别名
                // '@':'src'//这是默认的，之前就配置好了的
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',


            }
        }
    }
}