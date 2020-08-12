<template>
<div class="page">
  <div class="con">
      <div class="top flex">
          <img class="icon margin13" :src="wx"  alt=""/>
            <div class="flex-col-center" style="align-items: baseline;">
                <span class="font15">昵称</span>
                <div class="font13 color">赵家玲 6224***********2256</div>
            </div>

          
      </div>
      <div class="center">
          <div class="font12">提现金额:</div>
          <div class="input flex-between">
              <span class="font22">￥</span>
              <input type="text" placeholder="请输入提现金额" v-model="value" class="font13 color1">
              <div class="btn">全部提现</div>
          </div>
            <div class="font12 color">可提现金额:25元</div>
      </div>

        <div class="bot" @click="flag=false">提现</div>
  </div>
  </div>
</template>

<script>
import {wx} from  '../../utils/imgUrl.js';

export default {
    data(){
        return {
            wx,
            falg:true,
            value:'',
        }
    }
}
</script>

    
<style scope>
input{
    border:none;

}
.top{
    margin-bottom:29px;

}
.margin13{
    margin-right:13px;
}
.input{
    width:304px;
    border-bottom:1px #979797 solid;
    margin-bottom:8px;
}
.page{
   position:absolute;
    top:0px;
    right:0;
    left:0px;
    bottom:0px;
background:rgba(239,239,239,1);

}
.icon{
   width:51px;
height:51px;


}
.con{
    padding-top:23px;
    padding-left: 23px;
   
    height:251px;
    background:rgba(255,255,255,1);
    border-radius:7px;
    margin:16px 11px;

}
.color{
    color:rgba(160,162,166,1);
}
.color1{
    color:rgba(210,210,211,1);
}
.btn{
   
font-size:10px;
width:66px;
height:18px;
background:rgba(253,82,79,1);
border-radius:11px;
    text-align: center;
    line-height: 18px;;
}
.bot{
    text-align: center;
 margin:0 auto;
 margin-top:21px;
    line-height:32px;
font-size:13px;
    width:235px;
height:32px;
background:linear-gradient(270deg,rgba(254,148,83,1) 0%,rgba(247,67,61,1) 100%);
border-radius:4px;
}
</style>