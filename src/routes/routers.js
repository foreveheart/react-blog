import React from 'react'

// 路由表配置
const routes = [
    {
        path: '/index',
        component: React.lazy(()=>import('../page/homePage')),
        exact: true,
        title: '首页',
        isShowHeader:true
    }, {
        path: '/edit',
        component: React.lazy(()=>import('../page/editPage')),
        title: '编辑',
        isShowHeader:false
    }, {
        path: '/articledetail',
        component: React.lazy(()=>import('../page/detailPage')),
        title: '文章详情',
        isShowHeader:false
    },{
        path: '/mine',
        component: React.lazy(()=>import('../components/WallPaper')),
        title: '关于我',
        exact: true,
        isShowHeader:true
    }
    // ,{
    //     path: '/',
    //     component: React.lazy(()=>import('../page/homePage')),
    //     title: '首页',
    //     isShowHeader:false
    // }
]
export default routes