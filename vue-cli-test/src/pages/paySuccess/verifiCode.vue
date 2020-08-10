<template>

     <div  class="con">
        <el-steps :active="1">
            <el-step title="购买成功" class="font13" icon="el-icon-edit"></el-step>
            <el-step title="扫码核销" class="font10 grey" icon="el-icon-upload"> </el-step>
            <el-step title="步骤 3" class="font10 grey" icon="el-icon-picture">兑换成功</el-step>
        </el-steps>
        <div  class="flex-around top" >

            <div>
              <img src=""/>
               <div class="font13" >   </div>
            </div>
             <div>
              <img src=""/>
               <div >  </div>
            </div>
             <div>
              <img src=""/>
               <div >   </div>
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

.qr{
    width:140px;
height:140px;
}
.top{
  margin-top:8px ;
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
}
</style>