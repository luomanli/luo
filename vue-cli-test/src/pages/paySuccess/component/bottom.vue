<template>

     <div  class="flex-around contain" >
           
           
        <div  class="home font10">
             <img class="icon" :src="home" />
         
            <div >首页 </div>   
        </div>     
        <div  class="service font10">
             <img class="icon" :src="custom" />
            <div >客服 </div>   
        </div> 
        <div class="right flex-around font15" v-if="!flag">        
                    
                <div  class="btn_more">
                  点我赚更多奖金
                </div>   
        </div>  
        <div class="right flex-around font15" v-if="flag">        
                <div  class="btn_color ">
                    收益排行榜
                </div>      
                <div  class="btn">
                    点我赚佣金
                </div>   
        </div>  
    </div>

</template>

<script>
import {home,custom} from  '../../../utils/imgUrl.js';

export default {
  name: 'post',
  data(){
      return{
            name:'name',
            home,
            custom,
            
      }
  },
  propos:{
      flag:{
          type:Boolean,
          default:true

      }
  },
  methods:{
      goHome(){
          
      }
  }
}
</script>

<style scoped>
.btn_more{
    width:235px;
height:32px;
background:linear-gradient(270deg,rgba(254,148,83,1) 0%,rgba(247,67,61,1) 100%);
border-radius:2px;

font-size:15px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(255,255,255,1);
    line-height:32px;
    text-align:center;
    margin-right:17px;

}
.icon
{
    width:24px;
    height:24px;
}
.contain{
    width:100%
}

.right{
flex:2
}
.home{
    flex:1;
    margin-left:10px;
}
.service{
    flex:1
}

.btn{
    width:125px;
    line-height:32px;
    height:32px;
    background:linear-gradient(270deg,rgba(254,148,83,1) 0%,rgba(247,67,61,1) 100%);
    border-radius:2px;
    text-align:center;
       margin-right:4px;

}
.btn_color{
    border:0.5px solid;
    width:125px;
    height:32px;
    background-color: white;
    line-height:32px;
    border-radius:2px;
    text-align:center;
    margin-right:4px;
  
    border-image:linear-gradient(270deg, rgba(253,145,82,1), rgba(247,67,61,1)) 1 1;
}
.more{
   width:235px;
}
</style>