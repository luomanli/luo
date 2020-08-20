<template>

     <div  class="con">
        
    <div  class="flex-between top" >
           <div class="line" >   </div>
            <div  class="flex-col-center">
          
          
            <img   class="icon" :src="cir1"/>  
         
              
                 <div class="font13">兑换成功</div>

            </div>
             <div  class="flex-col-center">
                  <div class="icon flex_center">
                     <img class="icon2" :src="cir2"/>
                  </div>

              
                 <div class="font13">兑换成功</div>

            </div>
             <div  class="flex-col-center">
             <div class="icon flex_center">
                     <img class="icon2" :src="cir2"/>
                  </div>
              <div class="font13">兑换成功</div>

            </div>    
             
        </div>




           <div  class="center" >
            
              <img class="qr" src="http://m.dian7.net/mobile-split/static/img/bg/qr.png"/>
               <div class="font12 grey tip" > 
               到店向工作人员出示“二维码”,此码一次有
            </div>
             <div class="btn white" @click="goOrder">
              
               查看订单
            </div>
             

        </div>

            <bindPhone :flag="true">
            </bindPhone>
        <bottomSet></bottomSet>
    
        <bottom></bottom>
        </div>







</template>

<script>
import bottom from  './component/bottom.vue';
import bindPhone from  '../home/bindPhone.vue';
import {cir1,cir2} from  '../../utils/imgUrl.js';
import bottomSet from  './component/bottomSet.vue';


export default {
  name: 'post',
  data(){
      return{
        cir1,cir2,
            name:'name',
            active:true,
            newIncn:require('../../assets/img/money.png')
            
      }
  },
 components: { bottom,bindPhone,bottomSet},

  methods:{
      goHome(){
          
      },
      goOrder(){
         this.$router.push({name:'activityOrder'})
      },
  }
}
</script>

<style scoped>
.top{
      padding: 0px 30px;
  position:relative;
}
.line{
    position: absolute;
    width: 261px;
    height: 1px;
    background-color: red;
    bottom: 50px;
    margin:0 28px;
    z-index:-34;
}
.step>>>.el-step__icon{
  
}
.step>>>.el-step__icon-inner{
   font-size: -4px; 
   width:20px;
   height:20px;
 
}
.step>>>.el-icon-cir1{
   background: url('http://m.dian7.net/mobile-split/img/icon/cir1.png') center no-repeat;
    background-size: 20px,20px;
}
.step>>>.el-icon-cir1:before{
      content: "替";
    font-size: 10px;
    visibility: hidden;
}
.step>>>.el-icon-cir2{
   background: url('http://m.dian7.net/mobile-split/img/icon/cir2.png') center no-repeat;
    background-size:  6px,6px;
}
.step>>>.el-icon-cir2:before{
      content: "替";
    font-size: 10px;
    visibility: hidden;
}
.vantStep{
  padding-top:30px;
}
.vantStep>>>.van-step__line{

top:-10px;
}
.vantStep>>>.van-step__circle-container{

top:-10px;
}

.icon{
  width:20px;
  height:20px;
  margin-bottom:5px;
}
.icon2{
  width:6px;
  height:6px;
      display: block;
}

.qr{
    width:140px;
height:140px;
}
.top{
  margin-top:20px ;
  margin-bottom:4px;
height:80px;
}
.center{
  text-align:center;
  height:274px;
  margin-bottom:4px;
}
.tip{
  margin-top:15px;

}
.btn{
  width:154px;
height:36px;
background:rgba(253,82,79,1);
border-radius:7px;
line-height:26px;
margin:0 auto;
margin-top:26px;
margin-bottom:17px;
font-size:15px;
line-height:36px;
}
.step0{
  height: 2px;
    width: 113px;
    background: #EEEFF1;
     flex: 1;
}
.step1{
  height: 2px;
    width: 113px;
    flex: 1;
 
}
.el-icon-my-export{
    background: url('../../assets/img/icon/custom.png') center no-repeat;
    background-size: cover;
}
.el-icon-my-export:before{
    content: "替";
    font-size: 16px;
    visibility: hidden;
}
</style>