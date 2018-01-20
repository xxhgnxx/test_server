
const easeInOutQuad = (t, b, c, d)=> {
  if ((t /= d / 2) < 1) return c / 2 * t * t*t + b;
  return c / 2*((t -= 2) * t * t + 2) + b;
}

const jumper = () => {
  let element // 目标元素
  let type //方向，x水平,y垂直
  let start // 起点
  let stop // 终点
  let end_poz // 位移距离(px？)
  let easing // 速度计算方式 默认 easeInOut
  let duration // 动画时长(ms)
  let timeStart // 时间标识，用于计算步长，以及避免重复调用(ms)
  let callback // 结束回调

  // 起点状态
  function location() {
    if (type = "x") {
      return element.scrollLeft
    }
    if (type = "y") {
      console.log('type y',element.scrollTop);
      
      return element.scrollTop
    }
    console.log('type参数异常？？！');
  }

  // 结束点
  function get_stop(element) {
    if (type = 'x') {
      return element.scrollLeft + end_poz
    }
    if (type = 'y') {
      return element.scrollTop + end_poz
    }
  }



  function loop(timeCurrent) {
    // 状态标识 
    if (!timeStart) {
      timeStart = timeCurrent
    }

    // 速度函数用参数 当前时间刻度 用于计算步长
  let  timeElapsed = timeCurrent - timeStart

    // 基于速度函数 计算单帧步长
  let  next = easing(timeElapsed, start, end_poz, duration)

    // 滚动
    if (type = 'x') {
      element.scrollLeft = next
    }
    if (type = 'y') {
      element.scrollTop = next
    }

    // 动画终点判断
    timeElapsed < duration ? window.requestAnimationFrame(loop) : done() 
  }

  function done() {
    if (typeof callback === 'function') {
      callback()
    }
    // 终止 初始化参数
    timeStart = false
  }

  function jump(target, options = {}) {
    // 避免重复执行
    if (timeStart) {
      return
    }
    duration = options.duration || 1000 // 过程时长
    type = options.type || "y" // x水平移动，y垂直移动，默认垂直
    end_poz = options.end_poz || 0 // 移动距离
    callback = options.callback // 结束回调
    easing = options.easing || easeInOutQuad // 变速
    // 目标
    switch (typeof target) {
      case 'object':
        element = target
        break

      case 'string':
        element = document.querySelector(target)
        break

      default:
        console.log('element参数异常');
        break
    }

    // 起点状态
    start = location()

    // 重点状态
    stop = start+end_poz

    // 时长处理
    switch (typeof options.duration) {
      case 'number':
        duration = options.duration
        break
    }

    // 调用动画循环
    window.requestAnimationFrame(loop)
  }

  // expose only the jump method
  return jump
}

// export singleton

const singleton = jumper()

export default singleton