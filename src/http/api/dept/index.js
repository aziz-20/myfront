import request from '@/http/request'

const res = [{
    "createBy": "admin",
    "createTime": "2023-10-26 20:18:06",
    "updateBy": null,
    "updateTime": null,
    "remark": null,
    "deptId": 100,
    "parentId": 0,
    "ancestors": "0",
    "deptName": "abc",
    "orderNum": 0,
    "leader": "若依",
    "phone": "15888888888",
    "email": "ry@qq.com",
    "status": "0",
    "delFlag": "0",
    "parentName": null,
    "children": []
},
{
    "createBy": "admin",
    "createTime": "2023-10-26 20:18:06",
    "updateBy": null,
    "updateTime": null,
    "remark": null,
    "deptId": 101,
    "parentId": 100,
    "ancestors": "0,100",
    "deptName": "abcc",
    "orderNum": 1,
    "leader": "若依",
    "phone": "15888888888",
    "email": "ry@qq.com",
    "status": "0",
    "delFlag": "0",
    "parentName": null,
    "children": []
},
{
    "createBy": "admin",
    "createTime": "2023-10-26 20:18:06",
    "updateBy": null,
    "updateTime": null,
    "remark": null,
    "deptId": 102,
    "parentId": 100,
    "ancestors": "0,100",
    "deptName": "abcdd",
    "orderNum": 2,
    "leader": "若依",
    "phone": "15888888888",
    "email": "ry@qq.com",
    "status": "0",
    "delFlag": "0",
    "parentName": null,
    "children": []
},
{
    "createBy": "admin",
    "createTime": "2023-10-26 20:18:06",
    "updateBy": null,
    "updateTime": null,
    "remark": null,
    "deptId": 103,
    "parentId": 101,
    "ancestors": "0,100,101",
    "deptName": "研发部门",
    "orderNum": 1,
    "leader": "若依",
    "phone": "15888888888",
    "email": "ry@qq.com",
    "status": "0",
    "delFlag": "0",
    "parentName": null,
    "children": []
},
{
    "createBy": "admin",
    "createTime": "2023-10-26 20:18:06",
    "updateBy": null,
    "updateTime": null,
    "remark": null,
    "deptId": 104,
    "parentId": 101,
    "ancestors": "0,100,101",
    "deptName": "市场部门",
    "orderNum": 2,
    "leader": "若依",
    "phone": "15888888888",
    "email": "ry@qq.com",
    "status": "0",
    "delFlag": "0",
    "parentName": null,
    "children": []
},
{
    "createBy": "admin",
    "createTime": "2023-10-26 20:18:06",
    "updateBy": null,
    "updateTime": null,
    "remark": null,
    "deptId": 105,
    "parentId": 101,
    "ancestors": "0,100,101",
    "deptName": "测试部门",
    "orderNum": 3,
    "leader": "若依",
    "phone": "15888888888",
    "email": "ry@qq.com",
    "status": "0",
    "delFlag": "0",
    "parentName": null,
    "children": []
},
{
    "createBy": "admin",
    "createTime": "2023-10-26 20:18:06",
    "updateBy": null,
    "updateTime": null,
    "remark": null,
    "deptId": 106,
    "parentId": 101,
    "ancestors": "0,100,101",
    "deptName": "财务部门",
    "orderNum": 4,
    "leader": "若依",
    "phone": "15888888888",
    "email": "ry@qq.com",
    "status": "0",
    "delFlag": "0",
    "parentName": null,
    "children": []
},
{
    "createBy": "admin",
    "createTime": "2023-10-26 20:18:06",
    "updateBy": null,
    "updateTime": null,
    "remark": null,
    "deptId": 107,
    "parentId": 101,
    "ancestors": "0,100,101",
    "deptName": "运维部门",
    "orderNum": 5,
    "leader": "若依",
    "phone": "15888888888",
    "email": "ry@qq.com",
    "status": "0",
    "delFlag": "0",
    "parentName": null,
    "children": []
},
{
    "createBy": "admin",
    "createTime": "2023-10-26 20:18:06",
    "updateBy": null,
    "updateTime": null,
    "remark": null,
    "deptId": 108,
    "parentId": 102,
    "ancestors": "0,100,102",
    "deptName": "市场部门",
    "orderNum": 1,
    "leader": "若依",
    "phone": "15888888888",
    "email": "ry@qq.com",
    "status": "0",
    "delFlag": "0",
    "parentName": null,
    "children": []
},
{
    "createBy": "admin",
    "createTime": "2023-10-26 20:18:06",
    "updateBy": null,
    "updateTime": null,
    "remark": null,
    "deptId": 109,
    "parentId": 102,
    "ancestors": "0,100,102",
    "deptName": "财务部门",
    "orderNum": 2,
    "leader": "若依",
    "phone": "15888888888",
    "email": "ry@qq.com",
    "status": "0",
    "delFlag": "0",
    "parentName": null,
    "children": []
}]

// 查询部门列表

export default {
    getdeptyid(id) {
        return request({
            url: `dept/${id}`,
            method: 'get'
        })
    },
    addDept(data) {
        return request({
            url: '/dept',
            method: 'post',
            data: data
        })
    }
    ,
    updateDep(data) {
        return request({
            url: '/dept',
            method: 'put',
            data: data
        })
    }
    ,
   
    delDepid(id) {
        return request({
            url: '/department/delnewDep/' + id,
            method: 'delete'
        })
    }
    ,
    querydepa(query) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(res.slice(0, 3));
              }
                , 300);
            }
                )
    },
    //plan data
    listDept(data) {
        
        return request({
            url: '/dept/list',
            method: 'post',
            data: data
        })
    }
    ,
    DeptlistHierarchy(data) {
        return request({
            url: '/dept/listHierarchy',
            method: 'post',
            data: data
        })
    }
    ,
    xxx() {
    return  request({
        method: 'get',
        url :'/emp/getAllEmps3',
        
     })
    }
}