import {
  setToken,
  getToken
} from '@/libs/util'
// import net from '@/network/index.js'

export default {
  state: {
    userName: '',
    userId: '',
    avatorImgPath: '',
    token: getToken(),
    access: '',
    hasGetInfo: false
  },
  mutations: {
    setAvator (state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    }
  },
  actions: {
    // 登录
    handleLogin ({
      commit
    }, {
      userName,
      password
    }) {
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        // net.login({
        //   userName,
        //   password
        // }).then(res => {
        //   const data = res.data
        commit('setToken', '12FKJKSJDH23SD939K')
        resolve()
        // }).catch(err => {
        //   reject(err)
        // })
      })
    },
    // 退出登录
    handleLogOut ({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        // net.logout(state.token).then(() => {
        //   commit('setToken', '')
        //   commit('setAccess', [])
        //   resolve()
        // }).catch(err => {
        //   reject(err)
        // })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        commit('setToken', '')
        commit('setAccess', [])
        resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo ({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        const data = {
          avator: 'https://static.joojee.cn/metro_admin/static/img/male.42489d3.png',
          name: 'miiky',
          user_id: '1',
          access: ['super_admin']
        }
        commit('setAvator', data.avator)
        commit('setUserName', data.name)
        commit('setUserId', data.user_id)
        commit('setAccess', data.access)
        commit('setHasGetInfo', true)
        resolve(data)
      })
    }
  }
}
