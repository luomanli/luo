<template>
  <div class="dialog__wrapper flex_center" v-if="true">
  <div class='content'>
    <div class='title'>
          <div class="count" v-if="true">目前活动库存为0,详情请联系客服</div>

        <div class='flex'>
            <img  class="icon1" :src="img" />
            <span class='font15'>客服小宝</span>
        </div>
        <div class='flex'>
            <img  class="icon2" :src="img" />
            <span class='font12'>16525698746</span>
        </div>
    </div>
     <div class='post'>
      
         <img class="QRcode" src="../../assets/logo1.jpg" />
      
    </div>
    <div class='footer'>
     长按识别二维码联系我们 
    </div>
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
    propos:{
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
.count{
    width:245px;
height:37px;
background:rgba(242,242,245,1);
border-radius:7px;
font-size:15px;
line-height: 37px;;
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
.icon1{
    width:29px;
height:26px;
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
    margin:0 40px;
    margin-bottom:14px;
}

.QRcode{
    width:223px;
    height:224px;
    

}
.content{
     height:344px;
    width:316px;
    background-color:white;
     margin:0 auto;
}
.contain{
    height:100%;
    width:100%;
   
  
}
.font15{
    font-size:15px;

}
.font12{
    font-size:12px;
    color:rgba(91,178,242,1);

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
    margin-bottom:12px;
    text-align:center;
}

</style>
