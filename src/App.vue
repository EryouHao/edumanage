<template>
  <div id="app">
    <router-view class="view"></router-view>
    <div id="footer">
      <ul>
        <router-link tag="li" to="/">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhuye"></use>
          </svg>
          <p>主页</p>
        </router-link>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dongtai"></use>
          </svg>
          <p>资讯</p>
        </li>
        <router-link tag="li" to="/Login">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wo"></use>
          </svg>
          <p>我的</p>
        </router-link>
        <router-link tag="li" to="/Setting">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shezhi"></use>
          </svg>
          <p>设置</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  },
}
</script>
<script src="./assets/plugs/icon/iconfont.js"></script>
<style>
*{
  padding: 0;
  margin: 0;
  color: #7D7D7D;
  list-style: none;
}
input{
  outline: none;
}
body{
  background-color: #FBFBFB;
}
#header{
  width: 100%;
  height: 8%;
  top: 0;
  color: #464646;
  position: fixed;
  font-size: 1.5em;
  line-height: 2.4em;
  text-align: center;
  background-color: #F6F6F6;
  border-bottom: 1px solid #AFAFAF;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FBFBFB;
}
.view{
  width: 100%;
  height: 90%;
  margin-bottom: 10%;
  position: relative;
}
#footer{
  width: 100%;
  height: 10%;
  position: fixed;
  left:0;
  bottom: 0;
  background-color: #F6F6F6;
  border-top: 1px solid #D2D2D2;
}
#footer ul{
  width: 100%;
  height: 100%;
}
#footer ul li{
  width:  25%;
  height: 100%;
  padding-top: 2%;
  float: left;
  text-align: center;
}
#footer ul li p{
  color: #7D7D7D;
}
.icon {
   width: 50%; height: 50%;
   fill: #7D7D7D;
   overflow: hidden;
 }

</style>
