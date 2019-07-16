/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-15 11:52:09
 * @LastEditTime: 2019-07-16 16:32:30
 * @LastEditors: Please set LastEditors
 */
import Axios from '@/network/axios'
import config from '@/config'

const API_URL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

let system = {}

system.getUsers = (params) => Axios.get(API_URL + '/user', {
  params: params
})
system.postUser = (params) => Axios.post(API_URL + '/user', params)

system.patchUser = (params) => Axios.patch(API_URL + '/user', params)

system.delUser = (params) => Axios.delete(API_URL + '/user', {
  data: params
})

export default system
