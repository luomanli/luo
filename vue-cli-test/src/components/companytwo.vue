<template>
  <div class="dialog__wrapper flex_center" v-if="true">
  <div class='content'>
    <div class='title'>
        
      
            <img  class="icon1 margin4" :src="img" />
            <span class='font15'>小懵分销裂变平台</span>
      
 
    </div>
    <div class='post'>
      
         <img class="QRcode" src="../assets/logo1.jpg" />
      
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
width:33px;
height:29px;
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
}

.QRcode{
    width:180px;
    height:181px;
    

}
.content{
    height:322px;
    width:310px;
    background-color:white;
    margin:0 auto;
    border-radius:7px;

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
    justify-content:center;
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
    height:181px;
    margin-bottom:22px;
    text-align:center;
}

</style>
