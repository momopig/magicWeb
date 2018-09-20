/**
 * Created by Jamter on 17/5/20.
 */
import { makeUrlString, get, drop, post } from './common.js'
let getHotList = function (query, successConfig, failConfig) {
    let url = makeUrlString('/bqd/api/query/hotspot', {offset: query.offset, count: query.count})
    return get(url, successConfig, failConfig)
};
let getHistoryList = function (query, successConfig, failConfig) {
    let url = makeUrlString('/bqd/api/query/history', {offset: query.offset, count: query.count})
    return get(url, successConfig, failConfig)
}
let getPrediction = function (query, successConfig, failConfig) {
    let url = makeUrlString('/bqd/api/query/prediction', {type: query.type})
    return get(url, successConfig, failConfig)
}
// let getPrediction = function (query, successConfig, failConfig) {
//     let url = makeUrlString('/bqd/api/query/knowledge', {type: query.type})
//     return get(url, successConfig, failConfig)
// }

let getSearchData = function (query, successConfig, failConfig) {
    let url = makeUrlString('/bqd/api/query/knowledge', {keyWord:query.keyWord, dataType:query.dataType, offset:query.offset, count: query.count})
    return get(url, successConfig, failConfig)
}
export default {
    getHotList,
    getHistoryList,
    getPrediction,
    getSearchData
}
  