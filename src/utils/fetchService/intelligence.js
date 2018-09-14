/**
 * Created by Jamter on 17/5/20.
 */
import { makeUrlString, get, drop, post } from './common.js'
let getHotList = function (query, successConfig, failConfig) {
    let url = makeUrlString('/mock/api/query/hotspot', {offset: query.offset, count: query.count})
    get(url, successConfig, failConfig)
}

export default {
    getHotList
}
  