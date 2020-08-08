import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import post from '@/pages/post'
import transNotic from '@/pages/home/transNotic'
import bindPhone from '@/pages/home/bindPhone'
import activity from '@/pages/gzh/activity'
import activityOrder from '@/pages/gzh/activityOrder'
import businessCenter from '@/pages/gzh/businessCenter'
import verifiCode from '@/pages/paySuccess/verifiCode'
import myOrder from '@/pages/gzh/myOrder'




Vue.use(Router)

export default new Router({
    routes: [{
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/',
            name: 'post',
            component: post
        },
        {
            path: '/transNotic',
            name: 'transNotic',
            component: transNotic
        },

        {
            path: '/bindPhone',
            name: 'bindPhone',
            component: bindPhone
        },
        {
            path: '/activityOrder',
            name: 'activityOrder',
            component: activityOrder
        },
        {
            path: '/activity',
            name: 'activity',
            component: activity
        },
        {
            path: '/businessCenter',
            name: 'businessCenter',
            component: businessCenter
        },
        {
            path: '/verifiCode',
            name: 'verifiCode',
            component: verifiCode
        },
        {
            path: '/myOrder',
            name: 'myOrder',
            component: myOrder
        }

    ]
})