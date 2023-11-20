import request from '@/http/request'
// import { resolve } from 'path-browserify'
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
    getdepartmentbyid(id) {
        return request({
            url: '/department/getdepartmentbyid/' + id,
            method: 'get'
        })
    },
    insnewDep(data) {
        return request({
            url: '/department/insnewDep',
            method: 'post',
            data: data
        })
    }
    ,
    updatenewDep(data) {
        return request({
            url: '/department/updatenewDep',
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
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(res.forEach(element => {

        //                   if(element.deptName==query.deptName){
        //                         return element
        //                   }
                    
        //             }));
        //       }, 300);
        //   }
        //     )
        // return request({
        //     url: '/department/querydepa',
        //     method: 'post',
        //     params: query
        // })
    },
    listDept(query) {
        

          return new Promise((resolve, reject) => {
             
            setTimeout(() => {
                resolve(res);
              }, 300);
          }
            )
        // return request({
        //     url: '/system/dept/list',
        //     method: 'get',
        //     params: query
        // })
    }
    ,
    DeptlistHierarchy(query) {
        return request({
            url: '/department/listHierarchy',
            method: 'post',
            params: query
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