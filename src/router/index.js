import Vue from 'vue'
import Router from 'vue-router'
import GridProducts from '@/components/gridProducts/GridProducts'
import FooterNav from '@/common/components/FooterNav'
import NavBar from '@/common/components/NavBar'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'FooterNav',
            component: FooterNav
        },
        {
            path: '/',
            name: 'GridProducts',
            component: GridProducts
        }, {
            path: '/',
            name: 'NavBar',
            component: NavBar
        }

    ]
})