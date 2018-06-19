import { postRequest,putRequest,getRequest } from '@/utils/api'
import {} from '@/store/index'
import router from '@/router/index'
import store from '@/store/index'
import cookie from '@/cookie/cookie'

export default class Connect{
    constructor(){
      this.response,
      this.host = "http://10.236.95.106:8888",
      this.ip = {
         login:'/userLogin',
         register:'register',
         changeMessage:'/updateUser',
         changePwd:'更改密码',
         deleteSaleCar:'删除购物车商品',
         buySaleCar:'购买购物车商品',
         buyVip:'购买会员',
         userRemark:'用户评分',
         personMessage:'/selectUser'
      }
    }

    loginRequest(form){
      postRequest(this.host + this.ip.login, {
        account:form.username,
        pwd:form.password
      }).then(resp=> {
        console.log(resp)
        if(resp.data.status){
          cookie.setToken('useronline',true)
          store.commit('set_user_online',true)
          window.alert('登陆成功')
          this.findPersonMessage(form.username)
        }else{
          cookie.setToken('useronline',false)
        }
        // router.go(0)
      }, resp=> {
        if(resp == null || resp)
        console.log(resp)
        var response = {
            status:false,
            message:"网络连接中断"
        }
        cookie.setToken('useronline',true)
        console.log(response.message)
        window.alert(response.message)
        // router.go(0)
      })
    }
    registerReauest(form){
      postRequest(this.host + this.ip.register, {
          username:this.registerfrom.userName,
          password:this.registerfrom.password,
          email:this.registerfrom.email
      }).then(resp=> {
          response = resp
      }, resp=> {
          var response = {
              status:false,
              message:"网络连接中断"
          }
          console.log(response.message)
          window.alert(response.message)
      })
    }
    getKindsRequest(){
      postRequest(this.host,{

       }).then(resp=>{
          return resp
       },resp=>{
          var res = {
            status:false,
            message:"网络连接中断"
          }
          return res
        })
    }

    setPersonMessage(form){
      postRequest(this.host + this.ip.changeMessage, {

      }).then(resp=>{
        if(resp.status){
          window.alert('更改个人信息成功')
        }else{
          window.alert('更改个人信息失败')
        }
      },resp=>{
        window.alert('网络连接中断')
      })
    }

    setChangePwd(form){
      postRequest(this.host + this.ip.changePwd,{
        oldPwd:form.oldPwd,
        newPwd:form.newPwd
      }).then(resp=>{
        if(resp.status){
          window.alert('更改密码成功')
        }else{
          window.alert('更改密码失败')
        }
      },resp=>{
        window.alert('网络连接中断')
      })
    }

    deleteSaleCar(){
      postRequest(this.host + this.ip.deleteSaleCar,{

      }).then(resp=>{
        if(resp.status){
          window.alert('删除商品成功')
        }else {
          window.alert('删除商品失败')
        }
      },resp=>{
        window.alert('网络连接中断')
      })
    }

    buySaleCar(){
      postRequest(this.host + this.ip.buySaleCar, {

      }).then(resp=>{
        if(resp.status){
          window.alert('购买商品成功')
        }else {
          window.alert('购买商品失败')
        }
      },resp=>{
        window.alert('网络连接中断')
      })
    }

    buyVip(){
      postRequest(this.host + this.ip.buyVip, {

      }).then(resp=>{
        if(resp.status){
          window.alert('购买会员成功')
        }else {
          window.alert('购买会员失败')
        }
      },resp=>{
        window.alert('网络连接中断')
      })
    }

    remark(){
      postRequest(this.host + this.ip.userRemark, {

      }).then(resp=>{
        if(resp.status){
          window.alert('评分成功')
        }else {
          window.alert('评分失败')
        }
      },resp=>{
        window.alert('网络连接中断')
      })
    }

    findPersonMessage(userName){
      postRequest(this.host + this.ip.personMessage,{
        account:userName
      }).then(resp=>{
        let message = resp.data.data
        let usermessage ={
          userName:message.account,
          email:message.mailbox,
          member:message.member,
          credit:message.credit,
          name:message.name,
          sex:message.sex,
          birthday:new Date(message.birthday)
        }
        console.log(message)
        console.log(usermessage)
        cookie.setToken('user',usermessage)
        router.go(0)
      },resp=>{

      })
    }

    downloadEbook(data){
      return '123456@qq.com'
    }

}
