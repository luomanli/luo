<template>
 
  <div class='content'>
        <div class="count"  >
                <sapn>
                目前活动库存为0,详情请联系客服
                </sapn>
        
        </div>

    <div class='title'>

        <div class='flex_center'>
            <img  class="icon1" src="../../assets/img/icon/service.png" />
            <span class='font15'>客服小宝</span>
        </div>
        <div class='flex'>
            <img  class="icon2" src="../../assets/img/icon/phoneNum.png" />
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
      show:{
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
    margin-top:30px;
    text-align:center;
    width:245px;
    height:37px;
    background:rgba(242,242,245,1);
    border-radius:7px;
    font-size:15px;
    line-height: 37px;
    margin:17px auto;
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
height:29px;
vertical-align:middle;
margin-right:8px;
}
.icon2{
width:16px;
height:16px;

vertical-align:middle;
}
.footer{
    font-size:10px;
    text-align:center;
    color:rgba(160,162,166,1);
    margin:0 40px;
    margin-bottom:14px;
}

.QRcode{
    width:171px;
    height:171px;
    

}
.content{
     height:326px;
    width:316px;
    padding-top:0px;
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
    margin-top:0px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    height:29px;
}

.voice{
    vertical-align: middle;
  width:50px;
    height:40px;
}

.post{
    margin:0 auto;
    width:171px;
    height:171px;
    margin-bottom:12px;
    text-align:center;
}

</style>
