/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-15 11:52:09
 * @LastEditTime: 2019-07-16 16:27:42
 * @LastEditors: Please set LastEditors
 */
import Axios from '@/network/axios'
import config from '@/config'

const API_URL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

let statis = {}

statis.getNumbers = (params) => Axios.get(API_URL + '/numbers', {
  params: params
})

export default statis
