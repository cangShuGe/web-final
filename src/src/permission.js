import router from '@/router'
import store from '@/store'
import cookie from '@/cookie/cookie'

// 登录验证，权限验证
router.beforeEach((to, from, next) => {
    let temp = cookie.gettoken('useronline')
    if(typeof(temp) !== undefined){
      store.commit('set_user_online',temp)
      let user = cookie.gettoken('user')
      if(user){
        user = JSON.parse(user)
        store.commit('set_user',user)
        }
    }else{
      store.commit('set_user_online',false)
      store.commit('set_user','')
    }
    // 是否需要登录
    if (to.matched.some(record => record.meta.login)) {
      console.log('asdfasdsf')
      if(cookie.gettoken('useronline')){
        store.commit('set_user_online',true)
        next()
      }else{
        store.commit('set_user_online',false)
        store.commit('set_user','')
        next('/index')
      }
        
    } else {
        // if (to.path === '/login' && cache.getToken()) {
        //     next('/')
        // } else {
        //     next()
        // }
        next()
    }
})

// 验证权限
function assessPermission(userRole, pageRole, next) {
    let pass = false
    // 页面无需权限 || 用户是管理员
    if (!pageRole || userRole.indexOf('admin') > -1) pass = true
    // 符合页面的其中一种权限（支持String和Array写法）
    if (typeof pageRole === 'string') {
        if (userRole.indexOf(pageRole) > -1) pass = true
    } else if (Array.isArray(pageRole)) {
        if (pageRole.some(role => userRole.indexOf(role) > -1)) pass = true
    }
    pass ? next() : next('/401')
}
