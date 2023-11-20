<template>
    <div>
     <input v-model="email"   />
     <input v-model="password"   />
     <div @click="login" style="width: 50ox;height: 0px;">login</div>
    </div>
    </template>
    <script>
   
      import  http from "@/http"
    export default {
     
     
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
           this.$http.user.login({
             email : this.email,
             password : this.password
           }).then(res=>{
             console.log(res)
           })
        }
      }
    }
    </script>