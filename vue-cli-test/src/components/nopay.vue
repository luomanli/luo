<template>
    <div
        class="dialog__wrapper flex_center" v-if="flag"   
        >
        <div class="contain">
                <img class="icon" src="../assets/logo1.jpg" />
                <div class="font17">您未完成支付</div>
                    <div class="font12">已有21人与你一起参加了活动</div>
               
                <span class="footer flex" >
                    <div plain class="btn"  @click="flag = false">忍痛放弃</div>
                    <div plain class="btn" @click="flag = false">继续支付</div>
                </span>
         </div>
        </div>
</template>

<script>
export default {
  name: 'post',
  data(){
      return{
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
    border:1px solid rgba(253,82,79,1);
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
    border:none;
    font-size:12px;
   padding:0px;
    display:inline-block;
}
.icon{
    position:absolute;
    width:33px;
height:29px;
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
   color:rgba(160,162,166,1);
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
