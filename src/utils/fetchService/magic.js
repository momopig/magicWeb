/**
 * Created by Jamter on 17/5/20.
 */
import { makeUrlString, get, drop, post } from './common.js'
// let login = function (username, password, resolveCallback, rejectCallback) {
//     fetch('/api/account/login.json', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password
//       })
//     }).then(function (response) {
//       return response.json()
//     }).then(resolveCallback, rejectCallback).catch(function (e) {
//     })
//   }
  
let getTemplateList = function (query, successConfig, failConfig) {
    let url = makeUrlString('/mock/api/magic/template/get/list', query)
    get(url, successConfig, failConfig)
}

export default {
    getTemplateList
}
  