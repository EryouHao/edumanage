<template>
    <div id="setting">
      <div id="header">{{title}}</div>
      <ul>
        <router-link tag="li" to="/Setting/aboutSoft">
          <svg class="icon-setting-left" aria-hidden="true">
            <use xlink:href="#icon-guanyu"></use>
          </svg>
          <p>关于软件</p>
          <svg class="icon-setting-right" aria-hidden="true">
            <use xlink:href="#icon-jiantou"></use>
          </svg>
        </router-link>
        <li>
          <svg class="icon-setting-left" aria-hidden="true">
            <use xlink:href="#icon-yijianfankui"></use>
          </svg>
          <p>意见反馈</p>
          <svg class="icon-setting-right" aria-hidden="true">
            <use xlink:href="#icon-jiantou"></use>
          </svg>
        </li>
        <li>
          <svg class="icon-setting-left" aria-hidden="true">
            <use xlink:href="#icon-trash"></use>
          </svg>
          <p>清除缓存</p>
          <svg class="icon-setting-right" aria-hidden="true">
            <use xlink:href="#icon-jiantou"></use>
          </svg>
        </li>
        <li>
          <svg class="icon-setting-left" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
          </svg>
          <p>分享</p>
          <svg class="icon-setting-right" aria-hidden="true">
            <use xlink:href="#icon-jiantou"></use>
          </svg>
        </li>
      </ul>
    </div>
</template>
<style>
#setting ul{
   width: 100%;
   margin-top: 18%;
 }
#setting ul li{
  width: 100%;
  height: 4em;
  margin-top: 2%;
  background-color: #FFFFFF;
  border-top: 1px solid #E1E1E1;
  border-bottom: 1px solid #E1E1E1;
}
#setting ul li p{
  margin: 0.8em 0 0 0;
  float: left;
  font-size: 1.5em;
  font-weight: 500;
  color: #4A4A4A;
}
#setting .icon-setting-left {
  float: left;
   width: 20%; height: 50%;
   margin: 1em 0 0 0;
   fill: #7D7D7D;
   overflow: hidden;
 }
#setting .icon-setting-right {
  float: right;
  width: 20%; height: 50%;
  margin: 1em 0 0 0;
  fill: #7D7D7D;
  overflow: hidden;
}
</style>
<script>
    export default{
        data(){
            return{
              title:'设置'
            }
        },
        components:{

        }
    }
</script>
