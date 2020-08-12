<template>
    <div
        class="dialog__wrapper flex_center" v-if="flag"   
        >
        <div class="contain">
                <img class="icon" :src="nopay" />
                <div class="font17">您未完成支付</div>
                    <div class="font12">已有<span style="color:#FD524F">21</span>人与你一起参加了活动</div>
               
                <span class="footer flex" >
                    <div plain class="btn" :class="[active?'noactive':'active']"  @click="active = false">忍痛放弃</div>
                    <div plain :class="[active?'active':'noactive']" class="btn btn2"     @click="flag = false">继续支付</div>
                    
                </span>
         </div>
        </div>
</template>

<script>
import { nopay } from "../utils/imgUrl.js";
export default {
  name: 'post',
  data(){
      return{
         active:true,
          nopay,
            name:'name',
             img:'../assets/logo1.jpg',
      }
  },
  props:{
      flag:{
          type:Boolean,
          default:false

      }
  },
  methods:{
      goHome(){
          
      }
  }
}
</script>

<style scoped>
.active{
    color:rgba(255,255,255,1);
     background:rgba(253,82,79,1);

}
.noactive{
     color:rgba(253,82,79,1);
    background:rgba(255,255,255,1);
}

.dialog__wrapper{
    position:fixed;
    top:0px;
    right:0px;
    left:0px;
    bottom:0px;
    right:0px;
    z-index:2001;
    background-color:rgba(0,0,0,.3);
  
    overflow: auto;
    margin: 0;

    
}
.footer{
    border-top:1px solid rgba(253,82,79,1);
   position:absolute;
    display:flex;
    flex-direction:row;
    height:37px;
    bottom:0px;

}
.el-button--danger{
       
        background: white;
}
.btn{
    line-height:37px;
    flex:1;
    height:37px;
    font-size:12px;
   padding:0px;
    display:inline-block;
    font-size:12px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
border-bottom-left-radius:13px;




}
.btn2{
    border-bottom-left-radius:0px;
border-bottom-right-radius:13px;

}
.icon{
    position:absolute;
    width:135px;
height:100px;
top:0px;
left:50%;
transform:translate(-50%,-50%);
vertical-align:middle;
}
.icon2{
    width:16px;
height:16px;
background:rgba(91,178,242,1);
vertical-align:middle;
}
.footer{
    font-size:14px;
    text-align:center;
  
    width:100%;
}

.QRcode{
    width:223px;
    height:224px;
    

}
.content{
     height:316px;
    width:344px;
     margin:0 auto;
}
.contain{
  text-align:center;
  width:236px;
height:146px;
background:rgba(255,255,255,1);
box-shadow:3px 4px 9px 0px rgba(7,7,7,0.5);
 position:relative;
 border-radius:13px;
   
  
}
.font17{
    font-size:17px;
    margin-top:44px;
  margin-bottom:9px;
}
.font12{
    font-size:12px;
 color:rgba(58,59,60,1);

}
.title{
    margin:10px 30px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    height:50px;
}

.voice{
    vertical-align: middle;
  width:50px;
    height:40px;
}

.post{
    margin:0 auto;
    width:223px;
    height:224px;
}

</style>
