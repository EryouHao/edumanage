<template>
    <div id="aboutSofe">
      <div id="header">{{title}}</div>
      <div class="logo"></div>
      <div class="info">
        <p>版本号:v1.0.0</p>
        <p>微信:junchensuyang</p>
        <p>微博:君尘Abner</p>
      </div>
    </div>
</template>
<style>
  #aboutSofe .logo{
    margin-top: 14%;
    width: 100%;
    height: 10em;
    background-color: #4A4A4A;
  }
  #aboutSofe .info{
    width: 60%;
    margin: 1em 20%;
  }
  #aboutSofe .info p{
    width: 100%;
    height: 1.4em;
    font-size: 1.4em;
  }
</style>
<script>
    export default{
        data(){
            return{
                title:'关于软件'
            }
        },
        components:{

        }
    }
</script>
