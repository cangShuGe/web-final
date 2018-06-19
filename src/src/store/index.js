import Vue from 'vue'
import Vuex from 'vuex'
import cache from '@/utils/cache'
import { getLogin, getUser } from '@/api'

Vue.use(Vuex)

const state = {
    logs: [], // 错误日志
    user: {
        'userName':'吴庆港',
        'userId':'',
        'email':'2916144319@qq.com',
        'sex':'男',
        'birthday':new Date('Mon Jun 04 2018'),
        'member':0,
        'credit':223
    }, // 用户信息
    useronline:true,
    kinds:{xuanhuan:'玄幻',xiuzhen:'修真',mingzhu:'名著'},
    Ebook:{'id':'001','kind':'woshuisf'},
    realBook:{'id':'001','kind':'sdjfsldjf'},
    
    url1:'static/img/hongloumeng.jpg',
    url2:'static/img/piao.jpg',
    url3:'static/img/shuihuzhuan.jpg',
    url4:'static/img/huozhe.jpg' //存储主页图片路径 使用require获取图片真实地址
}

const getters = {
    // BoolKinds:state.kinds
    // kinds:stat.kinds,
    // useronline:state.useronline,
    // user:state.user,
    // logs:state.logs
}

const mutations = {
    set_logs(state, error) {
        state.logs.push(error)
    },
    loginOut(state) {
        state.user = ''
        cache.removeToken()
    },
    set_user(state, val) {
      // console.log(state.user)
      // console.log(state.user.userName)
        state.user = val
    },
    set_role(state, role) {
        state.user.role = role
    },
    set_kinds(state,kind){
        state.kinds = kind
    },
    set_Ebook(state,ebook){
        state.Ebook.id=ebook[0]
        state.Ebook.kind=ebook[1]
    },
    set_RealBook(state,real){
        state.realBook.id=real[0]
        state.realBook.kind=real[1]
    },
    set_user_online(state,value){
        // console.log(value)
        state.useronline=value
    }
}

const actions = {
    // 获取登录数据
    async get_login_data({ commit }, params) {
        return new Promise((resolve, reject) => {
            getLogin(params).then(res => {
                // console.log('login', res)
                if (res && res.token) {
                    cache.setToken(res.token)
                    resolve(res)
                } else {
                    reject(new Error('nothing login data'))
                }
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    // 获取用户数据
    async get_user_data({ commit }, token) {
        return new Promise((resolve, reject) => {
            getUser(token).then(res => {
                // console.log('user', res)
                if (res && res.code === 200 && res.data) {
                    commit('set_user', res.data)
                    resolve(res.data)
                } else {
                    reject(new Error('nothing user data'))
                }
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
