function connectWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    if (!WebViewJavascriptBridge._messageHandler) {
      WebViewJavascriptBridge.init(function (message, responseCallback) {});
    }
    callback(WebViewJavascriptBridge)
  } else {
    document.addEventListener('WebViewJavascriptBridgeReady', function () {
      if (!WebViewJavascriptBridge._messageHandler) {
        WebViewJavascriptBridge.init(function (message, responseCallback) {});
      }
      callback(WebViewJavascriptBridge);
    }, false)
  }
}

/**
 *获取用户信息
 * @param {requestCallback} cb 回调吐出data对象{openId，name，avatar}
 */
function DQDOpenSDK_userInfo(cb) {
  connectWebViewJavascriptBridge(a => {
    a.callHandler("DQDOpenSDK_userInfo", {}, cb)
  })
}

/**
 *唤醒支付
 * @param {Object} config 相关设置.
 * @param {string} employee.open_id open_id.
 * @param {string} employee.app_id app_id.
 * @param {string} employee.app_secret app_secret.
 * @param {string} employee.pay_type 支付类型：'alipay', 'weixin','alipay_h5', 'weixin_h5'.
 * @param {string} employee.price 价格.
 * @param {string} employee.out_order_no out_order_no.
 * @param {requestCallback} cb 回调.
 */
function DQDOpenSDK_recharge(config, cb) {
  connectWebViewJavascriptBridge(a => {
    a.callHandler("DQDOpenSDK_recharge", config, cb)
  })
}
