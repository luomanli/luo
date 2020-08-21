import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import post from '@/pages/post'
import post1 from '@/pages/post1'

import transNotic from '@/pages/home/transNotic'
import bindPhone from '@/pages/home/bindPhone'
import activity from '@/pages/gzh/activity'
import activityOrder from '@/pages/gzh/activityOrder'
import businessCenter from '@/pages/gzh/businessCenter'
import verifiCode from '@/pages/paySuccess/verifiCode'
import jump from '@/pages/paySuccess/jump'
import custom from '@/pages/paySuccess/custom'
import concatService from '@/pages/home/concatService'
import myOrder from '@/pages/gzh/myOrder'
import moneyRank from '@/pages/moneyRank/index.vue'
import recordPeo from '@/pages/moneyRank/recordPeo.vue'
import cash from '@/pages/moneyRank/cash.vue'
import bussiness from '@/pages/gzh/bussiness.vue'
import activityUser from '@/pages/gzh/activityUser'
import user from '@/pages/user'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
    mode: 'hash',
    routes: [{
            path: '/index',
            name: 'index',
            meta: {
                title: "活动首页"
            },
            component: index
        },
        {
            path: '/',
            name: 'post',
            meta: {
                title: "海报"
            },

            component: post
        },
        {
            path: '/transNotic',
            name: 'transNotic',
            meta: {
                title: "海报"
            },

            component: transNotic
        },

        {
            path: '/bindPhone',
            name: 'bindPhone',
            meta: {
                title: "海报"
            },

            component: bindPhone
        },
        {
            path: '/activityOrder',
            meta: {
                title: "海报"
            },
            name: 'activityOrder',
            component: activityOrder
        },
        {
            path: '/activity',
            name: 'activity',
            meta: {
                title: "海报"
            },

            component: activity
        },
        {
            path: '/businessCenter',
            name: 'businessCenter',
            meta: {
                title: "海报"
            },

            component: businessCenter
        },
        {
            path: '/verifiCode',
            name: 'verifiCode',
            meta: {
                title: "海报"
            },

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
        },
        {
            path: '/activityUser',
            name: 'activityUser',
            component: activityUser

        },
        {
            path: '/concatService',
            name: 'concatService',
            component: concatService

        },
        {
            path: '/recordPeo',
            name: 'recordPeo',
            component: recordPeo

        },
        {
            path: '/cash',
            name: 'cash',
            component: cash

        },
        {
            path: '/bussiness',
            name: 'bussiness',
            component: bussiness

        },
        {
            path: '/user',
            name: 'user',
            component: user

        },
        {
            path: '/post1',
            name: 'post1',
            component: post1

        }

    ],

})
router.beforeEach((to, from, next) => {
    if (to.meta.title) { //如果设置标题，拦截后设置标题
        document.title = to.meta.title
    }
    next()
})

export default router;