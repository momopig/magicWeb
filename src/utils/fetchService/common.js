const TIPS_DURATION = 2
const TIPS_INTERFACE_SUCCESS = '请求成功'
const TIPS_INTERFACE_ERROR = '接口获取数据失败，详情请查看控制台'

export const makeUrlString = (pathStr, paramObj) => {
  
    let str = ''
    if (typeof paramObj !== 'object') {
        return pathStr
    }
    for (let key in paramObj) {
        str += key + '=' + encodeURIComponent(paramObj[key]) + '&'
    }
    let result = pathStr + '?' + str.replace(/&$/, '')
    return result
}

/**
 * 
 * @desc get、post、drop等请求的response的通用处理器
 * 
 * @param data { PlainObject } 后端返回的reponse, 格式为：
 *   {
 *   "code": "200",
      "data": {...},
      "message": '请求处理成功',
      "success": true,
    }
 *  
 * 
*/

const responseHandler = (response, successConfig = {msg: '', callback: null}, failConfig = {msg: '', callback: null}) => {

  // 处理成功
  if (response.status === 0) {
    // if (response.message) {
    //     this.$Message.success(response.message, TIPS_DURATION)
    // } else if (successConfig.msg) {
    //     this.$Message.success(successConfig.msg, TIPS_DURATION)
    // } else {
    //     this.$Message.success(TIPS_INTERFACE_SUCCESS, TIPS_DURATION)
    // }

    if (successConfig.callback) {
        return successConfig.callback(response.data)
    }
  } else { // 其它异常处理

    // 如果后端接口有返回错误提示语，则优先显示
    // if (response.message){
    //   this.$Message.error(response.message, TIPS_DURATION)
    // }  else if (failConfig.msg) { // 显示自定义错误提示语
    //   this.$Message.error(failConfig.msg, TIPS_DURATION)
    // } else { // 显示默认提示语
    //   this.$Message.error(TIPS_INTERFACE_ERROR, TIPS_DURATION)
    // }

    // 执行自定义的failCallback
    if (failConfig.callback) {
        return failConfig.callback(response.data)
    }
  }
}
 

export const get = (url, successConfig, failConfig) => {
    return fetch(url, {
        method: 'GET',
        // credentials: 'include'
        credentials: 'same-origin'
    }).then(res => {
        return res.json()
    }).then(data => {
        return responseHandler(data, successConfig, failConfig)
    }).catch(err => {
        console.log(err)
        // this.$Message.error(TIPS_INTERFACE_ERROR, TIPS_DURATION)          
    })
}

export const drop = (url, successConfig, failConfig) => {
    return fetch(url, {
        method: 'DELETE',
        // credentials: 'include'
        credentials: 'same-origin'
    }).then(res => {
        return res.json()
    }).then(data => {
        return responseHandler(data, successConfig, failConfig)
    }).catch(err => {
        console.log(err)
        // this.$Message.error(TIPS_INTERFACE_ERROR, TIPS_DURATION)          
    })
}
  
export const post = (url, bodyData, successConfig, failConfig) => {
    let contentType = ''

    if (!(bodyData instanceof FormData)) {
      bodyData = JSON.stringify(bodyData)
      contentType = 'application/json'
    } 
    return fetch(url, {
        method: 'POST',
        // credentials: 'include',
        credentials: 'same-origin',
        headers: contentType ? new Headers({'content-type' : contentType}) : {},
        body: bodyData,
    }).then(res => {
        return res.json()
    }).then(data => {
        return responseHandler(data, successConfig, failConfig)
    }).catch(err => {
      console.log('catch error'+ err)
    //   this.$Message.error(TIPS_INTERFACE_ERROR, TIPS_DURATION)
    })
}