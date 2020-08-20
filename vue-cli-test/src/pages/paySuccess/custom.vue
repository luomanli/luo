
<template>
  <div class="page">

    <div class="head">
        <img class="img" :src="buyok"></img>
        <div class="content font15">恭喜您,购买成功</div>
        <div class="flex-around font15">
                <div  class="btn"  @click="goHome">返回首页</div>
                <div class="btn2 color white" @click="goOrder">查看订单</div>
                
        </div>
        <div class="flex-between font12 exchCode" v-if="flag">
                <div  >兑换码:AKWZ123</div>
                   <button class="copy" type="button"
                      v-clipboard:copy="message"
                      v-clipboard:success="onCopy"
                      v-clipboard:error="onError">复制</button>


                
        </div>
                

    </div>
    <!-- <bindPhone flag="true">
    </bindPhone> -->
    <buyKown>

    </buyKown>
    <company v-if="service" ></company>
    <bottom @home="goHome" @service="goService">

    </bottom>
  </div>
</template>

<script>
import bottom from  './component/bottom.vue';
import buyKown from  './component/buyKown.vue';
import bindPhone from  '../home/bindPhone.vue';

import {buyok} from  '../../utils/imgUrl.js';
import company from  '../../components/company.vue';


export default {
  name: '',
 components: { bottom,buyKown,bindPhone ,company},
 data(){
   return{
     buyok,
     service:false,
     flag:true,
      message: '兑换码Copy These Text'
   }
 },
 methods:{
   goOrder(){
         this.$router.push({name:'activityOrder'})
      },
      goHome(){
        this.$router.push({name:'index'})
      },
         onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
    },
    
      goService(){
        this.service=true;
      }
 }


}
</script>

<style scoped>
.copy{
 border: none;
 color:rgba(91,178,242,1);
}
.exchCode{

  padding:0 14px;
  
  width:318px;
  height:38px;
  background:rgba(244,244,244,1);

  margin:0 auto;
  margin-top:14px;
 border-radius:2px;
}
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
