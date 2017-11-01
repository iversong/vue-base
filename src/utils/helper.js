
/**
 * 实用工具类Helper
 * 当前实例会挂载到Vue的prototype中，可在所有vue实例中直接调用
 * @class Helper
 */
import MD5 from 'crypto-js/md5'

class Helper {
  /**
   * 生成请求签名，需要请求参数和个人secret
   * @method Helper#getSign
   * @param {*} params
   * @param {*} key
   * @example
   * ```js
   * this.$helper.getSign(params,key)
   * ```
   * @returns {String} signature
   */
  getSign (params, key = 'yangegegegeyan') {
    const signParams = JSON.stringify(params)
    return MD5(signParams + key).toString().substring(8, 24)
  }

  /**
   * 其它工具函数
   */
}

// 对Helper的实例封装成一个plugin,挂载到Vue实例
export default {
  install: function (Vue, Option) {
    Object.defineProperty(Vue.prototype, '$helper', { value: new Helper() })
  }
}
