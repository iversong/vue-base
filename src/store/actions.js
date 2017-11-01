/**
 * 根级别action
 */
// import * as api from '@/service/api'
import * as types from './mutation-types'
 // demo
export const updateAppName = ({ commit }, appName) => {
  commit(types.UPDATE_APPNAME, {
    appName
  })
}
