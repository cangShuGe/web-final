
import Cookies from 'js-cookie'

export default {
  gettoken:function(key){
    return Cookies.get(key)
  },
  setToken:function(key,value) {
    return Cookies.set(key, value, { expires: 7 })
  },
  removeToken:function(key) {
    return Cookies.remove(key)
  },
  removeall:function(){
    Cookies.remove('useronline')
    Cookies.remove('user')
  }
}
