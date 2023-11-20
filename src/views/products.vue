<template></template>
<!-- <template>
   <div>
    <input v-model="email"   />
    <input v-model="password"   />
    <div @click="login" style="width: 50ox;height: 0px;">login</div>
   </div>
   </template>
   <script>
   import {handleTree} from "@/utils/index"
   import Treeselect from '@riophae/vue-treeselect'
     // import the styles
     import '@riophae/vue-treeselect/dist/vue-treeselect.css'
     import  http from "@/http"
   export default {
    
     components: { Treeselect },
     data() {
     return {
      email : "",
      password : ""

     }
     },
     created() {
      
     },
     methods: {
       
       login(){
          http.user.login({
            email : this.email,
            password : this.password
          }).then(res=>{
            console.log(res)
          })
       }
     }
   }
   </script> -->