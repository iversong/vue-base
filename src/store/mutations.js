/**
 * 根级别mutations
 */
import * as types from './mutation-types'

export default {
  [types.UPDATE_APPNAME] (state, { name }) {
    state.appName = name
  }
}
