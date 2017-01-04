<template>
    <div id="login">
      <div id="header">{{title}}</div>
      <div class="head-pic"></div>
      <form>
        <div class="login-input">
          <span>学号</span><input type="number" v-model="username" />
        </div>
        <div class="login-input">
          <span>密码</span><input type="password" v-model="password" />
        </div>
        <button class="input-submit">登陆</button>
      </form>
    </div>
</template>
<style>
  #login form{
    display: block;
    width: 80%;
    margin-top: 40%;
    padding: 2em 10%;
    background-color: #FFFFFF;
  }
  #login .login-input{
    width: 100%;
    height: 3em;
    color: #7D7D7D;
    margin-top: 0.4em;
    border-bottom: 1px solid #CCCCCC;
  }
  #login .login-input span{
    display: block;
    font-size: 1.2em;
    margin-top: 0.6em;
    float: left;
  }
  #login .login-input input{
    display: block;
    float: right;
    width: 76%;
    height: 2.48em;
    border: none;
    font-size: 1.2em;
  }
  #login .input-submit{
    width: 100%;
    height: 2.4em;
    margin-top: 2em;
    background-color: #FE5B4C;
    border: none;
    color: #FFFFFF;
    font-size: 1.2em;
    font-weight: bold;
  }
</style>
<script>
    export default{
        data(){
            return{
              title:'登录',
              username : '',
              password : '',
            }
        },
        components:{

        }
    }
</script>
