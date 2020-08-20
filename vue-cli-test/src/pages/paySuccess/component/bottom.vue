<template>

     <div  class="flex-around contain" >
           
           
        <div  class="home font10" @click="goHome">
             <img class="icon" :src="home" />
         
            <div >首页 </div>   
        </div>     
        <div  class="service font10" @click="goService">
             <img class="icon" :src="custom" />
            <div >客服 </div>   
        </div> 
        <div class="right flex-around font15" v-if="!flag">        
                    
                <div  class="btn_more">
                  点我赚更多奖金
                </div>   
        </div>  
        <div class="right flex-around font15" v-if="flag2">        
                    
                <div  class="btn_more">
                        查看购买凭证
                </div>   
        </div>  
        <div class="right flex-around font15" v-if="flag">        
                <div  class="btn_color" @click="goRank">
                    收益排行榜
                </div>      
                <div  class="btn"  @click="goPost">
                    点我赚佣金
                </div>   
        </div>  

    </div>

</template>

<script>
import {home,custom} from  '../../../utils/imgUrl.js';

export default {
  name: 'bottom',
  data(){
      return{
            name:'name',
            home,
            custom,
            service:false,
            
      }
  },
  props:{
      flag:{
          type:Boolean,
          default:true

      }
  },
  methods:{
      goHome(){
           this.$emit('home')
      },
      goRank(){
          this.$router.push({
              name:'moneyRank'
          })
      },
      goPost(){
          this.$router.push({
              name:'post'
          })
      }
      ,
      goService(){
          this.$emit('service')
        
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
    background-color:rgba(255,255,255,1);
    position: fixed;
    bottom: 0px;
    width:375px;
    height:49px;
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
   color:rgba(247,67,61,1);
  
    border-image:linear-gradient(270deg, rgba(253,145,82,1), rgba(247,67,61,1)) 1 1;
}
.more{
   width:235px;
}
</style>