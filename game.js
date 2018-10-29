let clientList = {
  temp: {
    name: '',
    head: '',
    playerId: '',
    socket: {}
  }
}

module.exports = function (io) {

  console.log('初始化')

  io.on('connection', socket => {

    socket.on('register', function () {
      register(socket)
    })

    // io.emit('serverMsg', {
    //   id: socket.id
    // })
    // clientList[socket.id] = {}
    socket.on('disconnect', () => {
      io.emit('serverMsg', {
        msgType: 'disconnect',
        data: {
          id: socket.id
        }
      })
    });
    socket.on('reconnect', function () {

      console.log("重新连接到服务器", socket.id);

    });
    socket.on('setInfo', data => {
      console.log('info', data)
    })

    socket.on('back', data => {

      console.log('back')
      back(socket, data)
    })
  });

  // 链接管理



}


function register(socket, params) {
  console.log('login 初次进入')
  setUID(socket)
}

function logout(socket, params) {
  console.log('logout 退出')
}



function msgPublic(socket, from, who) {
  console.log('公开对话')
}

function msgPrivate(socket, from, who) {
  console.log('私聊')
}


function setUID(socket) {
  let UID = Math.random().toString(36).substr(2)
  socket.UID = UID
  let data = {}
  data.UID = UID
  socket.emit('setUID', data)
  clientList[UID] = {
    socket
  }
  console.log('注册UID', UID)

}


function back(socket, data) {
  console.log('come ')
  if (clientList[data.UID]) {
    socket.UID = data.UiD
    clientList[data.UID].socket = socket
    console.log('back 返回 覆盖', data.UiD)
  } else {
    console.log('返回 失败', data.UiD)
    register(socket)
  }
}


function broadcast(data) {
  console.log('广播')
  data.msgType = 'publicMsg'
  io.emit('serverMsg', data => {
    console.log('info', data)
  })
}

function setInfo(socket, data) {
  console.log('设置用户资料')
  if (socket.UID && clientList[UID]) {
    clientList[UID].info = data
  }
}