/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-15 11:52:09
 * @LastEditTime: 2019-07-16 16:42:15
 * @LastEditors: Please set LastEditors
 */
import Axios from '@/network/axios'
import config from '@/config'

// 引进各业务模块网络请求
import system from './module/system'
import statis from './module/statis'

// 申明请求集合
let others = [system, statis]

// 管理平台服务配置
const CLIENT_SECRET = '5792482242316cfa4bd32b446d96262f'
const CLIENT_ID = '179b7dc5d8c26b62'

const OAUTH_URL = ''
const API_URL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

console.log('NETWORK - API_URL=>', API_URL)
let net = {}

net.login = (username, password) =>
  Axios.get(OAUTH_URL + '/oauth/token', {
    params: {
      username: username,
      password: password,
      CLIENT_ID: CLIENT_ID,
      CLIENT_SECRET: CLIENT_SECRET,
      grant_type: 'password',
      scope: 'app'
    }
  })

net.logout = () => Axios.post(OAUTH_URL + '/passport/logout')

//
net.getUserInfo = () => Axios.get(API_URL + '/getUserInfo', {
  params: {
    access_token: localStorage.metro_token
  }
})

net = Object.assign(net, ...others)

export default net
