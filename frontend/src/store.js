export default {
  debug: true,
  state: {
    is_authenticated: window.localStorage.getItem('myblog-token') ? true : false,
    // 用户登录后，就算刷新页面也能再次计算出 user_id
    user_id: window.localStorage.getItem('myblog-token') ? JSON.parse(atob(window.localStorage.getItem('myblog-token').split('.')[1])).user_id : 0,
    // 用户登录后，就算刷新页面也能再次计算出 user_name
    user_name: window.localStorage.getItem('myblog-token') ? JSON.parse(atob(window.localStorage.getItem('myblog-token').split('.')[1])).user_name : '',
    // 用户登录后，就算刷新页面也能再次计算出 user_avatar
    // 后端传 URL 必须先用 base64 编码，所以这里还要多进行一次 atob 解码 base64 字符串
    user_avatar: window.localStorage.getItem('myblog-token') ? atob(JSON.parse(atob(window.localStorage.getItem('myblog-token').split('.')[1])).user_avatar) : '' 
  },
  loginAction() {
    if (this.debug) { console.log('loginAction triggered') }
    this.state.is_authenticated = true
    this.state.user_id = JSON.parse(atob(window.localStorage.getItem('myblog-token').split('.')[1])).user_id
  },
  logoutAction() {
    if (this.debug) console.log('logoutAction triggered')
    window.localStorage.removeItem('myblog-token')
    this.state.is_authenticated = false
    this.state.user_id = 0
  }
}