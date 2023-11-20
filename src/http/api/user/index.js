import request from '@/http/request'

export default {
    login(data) {
        return request({
            url: '/auth/login',
            method: 'post',
            data
        })
    },
    
}