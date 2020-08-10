
<template>
  <div class="page">

    <div class="head">
        <img class="img" :src="buyok"></img>
        <div class="content font15">恭喜您,购买成功</div>
        <div class="flex-around font15">
                <div  class="btn">返回首页</div>
                <div class="btn2 color white">查看订单</div>
                
        </div>
        <div class="flex-between font12 bot" v-if="flag">
                <div  class="">兑换码:AKWZ123</div>
                <div class="color">复制</div>
                
        </div>
                

    </div>
    <bindPhone flag="true">
    </bindPhone>
    <buyKown>

    </buyKown>
    <bottom>

    </bottom>
  </div>
</template>

<script>
import bottom from  './component/bottom.vue';
import buyKown from  './component/buyKown.vue';
import bindPhone from  '../home/bindPhone.vue';

import {buyok} from  '../../utils/imgUrl.js';


export default {
  name: '',
 components: { bottom,buyKown,bindPhone},
 data(){
   return{
     buyok,
     flag:false
   }
 }


}
</script>

<style scoped>
.head{
  text-align:center;
  padding-top:65px;
  margin-bottom:4px;
  padding-bottom:20px;
}
.bot{
  height:38px;
  text-align:center;

  }
.img{
    width:168px;
height:111px;


}
.content{
    width:100%;
    margin-top:21px;
    margin-bottom:33px;
   
}
.btn{
    width:154px;
    height:36px;
    border-radius:7px;
    border:1px solid rgba(253,82,79,1);
    color:rgba(253,82,79,1);
    line-height:36px;
}
.btn2{
    width:154px;
    height:36px;
    border-radius:7px;
    border:1px solid rgba(253,82,79,1);
  
    line-height:36px;
}
.color{
    background:rgba(253,82,79,1);
}
</style>
