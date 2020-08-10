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
import jump from '@/pages/paySuccess/jump'
import custom from '@/pages/paySuccess/custom'

import myOrder from '@/pages/gzh/myOrder'

import moneyRank from '@/pages/moneyRank/index.vue'



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
        },
        {
            path: '/moneyRank',
            name: 'moneyRank',
            component: moneyRank
        },
        {
            path: '/jump',
            name: 'jump',
            component: jump
        },
        {
            path: '/custom',
            name: 'custom',
            component: custom
        }

    ]
})