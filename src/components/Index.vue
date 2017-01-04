<template>
  <div id="index">
    <div id="header">{{title}}</div>
    <div class="head-pic"></div>
    <div class="list">
      <ul>
        <li>
          <svg class="icon-index" aria-hidden="true">
            <use xlink:href="#icon-school"></use>
          </svg>
          <p>学校简介</p>
        </li>
        <li>
          <svg class="icon-index" aria-hidden="true">
            <use xlink:href="#icon-book-2"></use>
          </svg>
          <p>院系简介</p>
        </li>
      </ul>
      <ul>
        <li>
          <svg class="icon-index" aria-hidden="true">
            <use xlink:href="#icon-desk"></use>
          </svg>
          <p></p>
        </li>
        <li>
          <svg class="icon-index" aria-hidden="true">
            <use xlink:href="#icon-abc"></use>
          </svg>
          <p></p>
        </li>
      </ul>
      <ul>
        <li>
          <svg class="icon-index" aria-hidden="true">
            <use xlink:href="#icon-light-bulb"></use>
          </svg>
          <p></p>
        </li>
        <li>
          <svg class="icon-index" aria-hidden="true">
            <use xlink:href="#icon-star"></use>
          </svg>
          <p></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
  #index .head-pic{
    width: 100%;
    height: 12em;
    background-color: #AFAFAF;
    margin: 14% 0 2% 0;
  }
  #index .list{
    width: 100%;
  }
  #index .list ul{
    width: 90%;
    height: 5.6em;
    margin: auto;
  }
  #index .list li{
    width: 49.8%;
    height: 5.6em;
    display: block;
    float: left;
  }
  #index .list li p{
    margin: 2.2em;
    font-weight: 600;
  }
  #index .list ul:nth-child(2){
    border-top: 0.12em solid #E3E3E3;
    border-bottom: 0.12em solid #E3E3E3;
  }
  #index .list li:nth-child(2n+1){
    border-right: 0.12em solid #E3E3E3;
  }
  #index .icon-index{
    float: left;
    width: 40%; height: 50%;
    margin-top: 1em;
  }
</style>
<script>
    export default{
        data(){
            return{
                title:'主页'
            }
        },
        components:{

        }
    }
</script>
