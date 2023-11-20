import { getToken } from '@/utils/auth'
import errorCode from '@/utils/errorCode'
import { tansParams } from '../setting'

export let isRelogin = { show: false };
export function requestIntersept(config) {

    const isToken = (config.headers || {}).isToken === false
    const isRepeatSubmit = (config.headers || {}).repeatSubmit === false
    if (getToken() && !isToken) {
        config.headers['Authorization'] = 'Bearer ' + getToken() // token
    }

    if (config.method === 'get' && config.params) {
        let url = config.url + '?' + tansParams(config.params);
        url = url.slice(0, -1);
        config.params = {};
        config.url = url;
    }

    if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
        const requestObj = {
          url: config.url,
          data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
          time: new Date().getTime()
        }
        const requestSize = Object.keys(JSON.stringify(requestObj)).length; // 请求数据大小
        const limitSize = 5 * 1024 * 1024; // 限制存放数据5M
        if (requestSize >= limitSize) {
          console.warn(`[${config.url}]: ` + '请求数据大小超出允许的5M限制，无法进行防重复提交验证。')
          return config;
        }
        //  this is to store the request data in the session storage
        // const sessionObj = cache.session.getJSON('sessionObj')
        // if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
        //   cache.session.setJSON('sessionObj', requestObj)
        // } else {
        //   const s_url = sessionObj.url;                  // 请求地址
        //   const s_data = sessionObj.data;                // 请求数据
        //   const s_time = sessionObj.time;                // 请求时间
        //   const interval = 1000;                         // 间隔时间(ms)，小于此时间视为重复提交
        //   if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
        //     const message = '数据正在处理，请勿重复提交';
        //     console.warn(`[${s_url}]: ` + message)
        //     return Promise.reject(new Error(message))
        //   } else {
        //     cache.session.setJSON('sessionObj', requestObj)
        //   }
        // }
        
      }
    return config
}




export function responseIntersept(res) {


    const data = res.data
    const code = data.statusCode || 200
    const msg = errorCode[code] || data.msg || errorCode['default']
    console.log(msg)
    // const message = res.message || '错误'
    if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
        return res.data
    }
    //Authentication failed, unable to access system resources
    //the current operation does not have permission
    // we have to fill this plese with component which will show the error message and redirect to login page
    if (code === 401) {
        // if (!isRelogin.show) {
        //     isRelogin.show = true;
        //     MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', { confirmButtonText: '重新登录', cancelButtonText: '取消', type: 'warning' }).then(() => {
        //       isRelogin.show = false;
        //       store.dispatch('LogOut').then(() => {
        //         location.href = '/index';
        //       })
        //   }).catch(() => {
        //     isRelogin.show = false;
        //   });
        // }
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。')

    }
    else if (code === 500) {
        // Message({ message: msg, type: 'error' })
        return Promise.reject(new Error(msg))
    } else if (code === 601) {
        // Message({ message: msg, type: 'warning' })
        return Promise.reject('error')
    } else if (code !== 200) {
        // Notification.error({ title: msg })
        return Promise.reject('error')
    } else {
        return res.data
    }

}

export default { requestIntersept, responseIntersept }


