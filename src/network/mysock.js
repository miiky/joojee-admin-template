import bus from '@/libs/bus'

export default (url, sockKey, jsonobj) => {
  // 注册并建立webSocket通信
  let sock = new SockJS(url)
  sock.onopen = function () {
    console.log('open connection of key: ' + sockKey)
    let jsonStr = JSON.stringify(jsonobj)
    sock.send(jsonStr)
  }
  // 监听webSocket消息
  sock.onmessage = function (e) {
    handleSocketMessage(JSON.parse(e.data))
  }
}
const handleSocketMessage = (data) => {
  let type = data.type
  /**
   *  处理websocket推送消息
   *  1、建立连接初始化消息
   *  2、有已读消息时获取推送信息，参数为消息id
   *  3、有新的待办事项消息产生，参数为新的消息对象
   */
  switch (type) {
    case '1':
      // 初始化消息
      // console.log('connection success ...')
      // 加载完成
      break
    case '2':
      // 处理消息已读状态
      bus._emit('sockOne', data)
      break
    case '3':
      // 新的待办事项消息，组装新消息放入消息列表
      break
  }
}
