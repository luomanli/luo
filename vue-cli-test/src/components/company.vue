<template>

  <div class="dialog__wrapper flex_center" v-if="outFlag" @click.stop="">
    <div class='content' v-if="false">
        <div class='title'>
        <div>
            <img  class="icon1" :src="img" />
            <span class='font15'>小懵科技</span>
        </div>
            <div >
            <img  class="icon2" :src="img" />
            <span class='font12'>16525698746</span>
            </div>
        </div>
        <div class='post' v-if='false'>
        
            <img class="QRcode" src="../assets/logo1.jpg" />
        
        </div>
        <div class='footer' v-if='false'>
        长按识别二维码联系我们 
        </div>
    </div>
    <div class='content'>
        <div class='title'>
            <div class='flex_center'>
                <img  class="icon1" src="../assets/img/icon/service.png" />
                <span class='font15'>客服小宝</span>
            </div>
            <div class='flex'>
                <img  class="icon2" src="../assets/img/icon/phoneNum.png" />
         
                <button class='btn font12'
                        type="button"
                        v-clipboard:copy="message"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onError"
                        >16525698746</button>
            </div>
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
  name: 'company',
  data(){
      return{
            name:'name',
             img:'../assets/logo1.jpg',
             outFlag:true,
             text:'1234',
              message: 'Copy These Text'
          
      }
  },
    props:{
      flag:{
          type:Boolean,
          default:false

      },
        qrcode:{
          type:String,
          default:''

      },
   
  },
  methods:{
        onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
    },
      goHome(){
          
      },
       copyLink() {
        
            let _this = this;
            let copybtn = document.getElementById('cobyOrderSn');
            let clipboard = new this.clipboard(copybtn);
           
            clipboard.on('success', function () {
            alert("复制成功")
            });
            clipboard.on('error', function () {
            alert("复制失败")
     });
    
 },
         close(){
                this.outFlag=false
            }

  }

}
</script>

<style scoped>
.btn{
    border:none;
    background-color:white;
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
    font-size:14px;
    text-align:center;
   color:rgba(160,162,166,1);
    margin:0 40px;
}

.QRcode{
 width:223px;
height:224px;

}
.content{
    padding-top:20px;
     height:334px;
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
    margin-top:0px;
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
    margin-bottom:12px;
    text-align:center;
}

</style>
