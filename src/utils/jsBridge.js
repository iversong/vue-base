/**
 * JsBridge桥接插件
 * 当前对象会挂载到Vue的prototype中，可在所有vue实例中直接调用
 * @example this.$jsBridge.callHandler('showShareView')
 * @example https://test.gegejia.com/static/bridge/bridge-doc.html
 */

var JsBridge = {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$jsBridge', { value: JsBridge })
  },
  init: function (callback) {
    if (window.WebViewJavascriptBridge) { return callback(window.WebViewJavascriptBridge) }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback) }
    window.WVJBCallbacks = [callback]
    var WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function () { document.documentElement.removeChild(WVJBIframe) }, 0)
  },

  /**
   * 函数描述：js注册webview调用事件
   *
   * jsBridge.registerHandler(method, callBack(response));
   * @param method {string} 方法名
   * @return {Object} 回调
   */
  registerHandler: function (name, fun) {
    this.init(function (bridge) {
      bridge.registerHandler(name, fun)
    })
  },

  /**
   * 函数描述：js调用webview事件
   *
   * jsBridge.callHandler(method, data, callBack(response));
   * @param method {string} 方法名
   * @param data {Object} 参数
   * @return {Object} 回调
   */
  callHandler: function (name, data, fun) {
    this.init(function (bridge) {
      bridge.callHandler(name, data, fun)
    })
  }
}

export default JsBridge
