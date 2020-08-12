<template>

     <div  class="con">
        <div  class="top" >

           <van-steps class="vantStep" :active="active" :active-icon="newIncn" active-color="#38f"  >
              <van-step>买家下单</van-step>
              <van-step class="vantStep" >商家接单</van-step>
            </van-steps>
        </div>

        <el-steps :active="1" >
            <el-step title="购买成功" class="font13" icon="el-icon-my-export"></el-step>
            <el-step title="扫码核销" class="font10 grey" icon="el-icon-upload"> </el-step>
            <el-step title="步骤 3" class="font10 grey" icon="el-icon-picture">兑换成功</el-step>
        </el-steps>
  
        <div  class="flex-around top" >

            <div>
              <img  class="icon" src=""/>
              
            </div>
             <div class="step" >   </div>
             <div>
              <img class="icon2" src=""/>
            </div>
             <div class="step" >   </div>

             <div>
              <img class="icon2" src=""/>
            </div>    

        </div>
           <div  class="center" >
            
              <img class="qr" src="http://m.dian7.net/mobile-split/static/img/bg/qr.png"/>
               <div class="font12 grey tip" > 
               到店向工作人员出示“二维码”,此码一次有
            </div>
             <div class="btn white">
              
               查看订单
            </div>
             

        </div>

            <bindPhone>
            </bindPhone>
    
        <bottom></bottom>
        </div>

</template>

<script>
import bottom from  './component/bottom.vue';
import bindPhone from  '../home/bindPhone.vue';

export default {
  name: 'post',
  data(){
      return{
            name:'name',
            newIncn:require('../../assets/img/money.png')
            
      }
  },
 components: { bottom,bindPhone},

  methods:{
      goHome(){
          
      }
  }
}
</script>

<style scoped>
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
}
.icon2{
  width:6px;
  height:6px;
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
.step{
  height: 2px;
    width: 113px;
    background: #EEEFF1;
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