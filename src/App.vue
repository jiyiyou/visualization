<template>
  <div id="app">
    <router-view  ></router-view>
  </div>
</template>

<style>
  html {  font-size: 62.5%;}
  body{font-size: 14px; font-size: 1.4rem;  color: #333;  margin: 0 auto;  font-family: 'Microsoft YaHei',Helvetica,Arial,sans-serif;  -webkit-tap-highlight-color: transparent;}
  /*浮动*/
  .fl ,.lt {  float: left;  }
  .fr ,.rt {  float: right;  }
  /*清除浮动*/
  .clearfix:after{content:"";display:block;clear:both;}
  .clearfix{zoom:1;}
  .clear {clear:both;}
  .flex{display: flex;display:-webkit-flex;justify-content: space-between;flex-wrap: wrap}
  /*placeholder 颜色*/
  :-moz-placeholder { color: #666; }
  ::-moz-placeholder { color: #666;}
  input:-ms-input-placeholder{ color: #666;}
  input::-webkit-input-placeholder{ color: #666;}
  a,a:hover,a:active{color:#333;text-decoration:none;}
  /****主体宽度****/
  .wrap{width:1200px;margin: 0 auto;}
  /*数字输入框按钮*/
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield
  }
.flex{display: flex;display:-webkit-flex;justify-content: space-between;flex-wrap: wrap}

  .upload-box{width: 90px;height: 90px;border: 1px solid #f1f1f1;position: relative;cursor: pointer; display: flex; align-items: center;justify-content: center;position: relative }
  .upload-box:hover .up-img-bg{opacity: 1}
  .upload-box .up-img-bg{position: absolute;top: 0;bottom: 0;left: 0; right:0;background-color: rgba(0,0,0,0.4);z-index: 999;opacity: 0}
  .upload-box .up-img-bg i{color: #fff;position: relative;top: calc(50% - 10px);left: calc(50% - 10px);z-index: 99999;font-size: 20px }
  .upload-i-box{width: 30px;display: inline-block;height: 30px;position: absolute;top: 50%;left: calc( 50% - 15px);z-index: 1;top: calc(50% - 15px);}
  .upload-box img{display: block;width: 100%;z-index: 99;position: relative;  }
  .upload-box .upload-i-box i:nth-child(1){display: block;height: 1px;width:30px;background-color: #DCDFE6;position: absolute;top: 50%;left: calc( 50% - 15px);z-index: 1}
  .upload-box .upload-i-box i:nth-child(2){display: block;height:30px;width: 1px;background-color: #DCDFE6;position: absolute;left: 50%;top: calc(50% - 15px);z-index: 1}
</style>
