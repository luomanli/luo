<template>
  <div class='contain'>
  
    <div class='title'>
        
        <div>
            <img  class="voice" src="../assets/img/icon/laba.svg" alt="">
            <span class='font'>关注公号 即是接受奖励到账通知</span>
        </div>
        <div class='follow'>
            马上关注 
         </div>
    </div>
     <div class='post'>
        <div class="user">
            <img   src="../assets/img/bg/post.png" alt=""/>
            <span style='color:white'>{{name}}</span>
        </div>
         <img class="QRcode" src="../assets/img/bg1.png" alt=""/>
        <div class="home flex-col-center">
        <img class="icon"  src="../assets/img/icon/home.svg" alt="">
        <div @click='goHome' class="bot font10" style='background-color:white;'>进入活动主页</div>
    </div>
    </div>
    <div class='footer font13'>
        恭喜您获得分销资格，请长按保存图片
        每推广一位好友下单，您立即获得  
        <span style='color:red'>0.3</span>  元收益
    </div>
    
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
import qs from'qs'
export default {
  name: 'post',
  data(){
      return{
            name:'name',
            img:'',

            weixinCode:'',
            endUrl:''

      }
  },
   created() {
    let param = {
      debug: true,
      url: 'http://localhost:8081/productgroups',
      jsApiList: [
        'chooseWXPay',
        'checkJsApi'
      ]

    };
    param = {
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wx3aee30a8da24ba55', // 必填，公众号的唯一标识
        timestamp:"1597212515", // 必填，生成签名的时间戳
        nonceStr: "5rXnd1d76BFvDs9I", // 必填，生成签名的随机串
        signature: 'bde63dcb34b1c9aedf3ed4b784198267930888a8',// 必填，签名，见附录1
        jsApiList: [
            'getLocation'
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2

    };
    wx.config(param);
  
      wx.ready(() => {
        console.log('wx.ready');
      });

      wx.error(function (res) {

        console.log('wx err', res);

        //可以更新签名
      });
      wx.getLocation({
    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    success: function (res) {
          alert("12" + JSON.stringify(res))
        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度
        console.log("rews===",res,accuracy)
        alert("rews==="+res+accuracy)

    }
});
 
  },
  mounted(){
    //   this.getUserInfo();
      window['displayData'] = (data) => {
        this.displayData(data)
      }
  },
  methods:{
   displayData(data) {
  alert( JSON.stringify(data));
},
      getCallBack(data){
          console.log("211",data)
           alert("q12getCallBack"+data)
      },
      goHome(){
          this.$router.push({name:'index'})
      },
      getUserInfo(){
       

        const AppId = 'wx3aee30a8da24ba55'; // 测试公众号平台的APPID，第1步那个链接里 
        const secret = '3899943d6dd3a90518756462efd972b7'; // 测试公众号平台的APPID，第1步那个链接里 

         // 获取当前页面地址中的code参数的值 
          const local = 'http://m.dian7.net/mobile-split'; // 对当前地址用encodeURIComponent进行编码 // 如果code是''，说明还没有授权，访问下面连接，用户同意授权，获取code 
         
          
           
         
            const code = qs.parse(window.location.search.substr(1)).code;
             alert('qs111='+JSON.stringify(qs.parse(window.location.search.substr(1)))); 

          if (code === '') { 
               alert('获取微信code：为空'); 
               let herf0=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${AppId}&redirect_uri=${local}&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`; 
             alert('herf=='+herf0); 
              window.location.href = herf0
                
          
          } else { 
              this.weixinCode = code; // 能拿到code，说明用户已同意授权，拿到coed 
               
                alert('获取微信code：'+this.weixinCode); 
              }

             
             let url= `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${AppId}&secret=${secret}&code=${code}&grant_type=authorization_code`; 
               alert('二级url'+url); 
                //  window.location.href = url;
                

                url=`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${AppId}&secret=${secret}`




                    this.$get(url).then(res=>{
                         console.log('成功2',res); 
                         

                }).catch(err=>{
                     alert('get=err'+err); 
                });
            
                this.$jsonp(url,{jsonp: 'callBackParam',callbackName: "getCallBack"}).then(res=>{
                    console.log('成功1',res); 
                     console.log('成功1',res); 
                      console.log('成功1',res); 
                       console.log('成功1',res); 
                                  alert('成功'+res); 

                }).catch(err=>{
                     alert('err'+err); 
                });
             

              
      }


  }
}
</script>

<style scoped>
.icon{
    height:40px;
    width:40px;
}
.bot{
    height:20px;
    width:60px;
    text-align:left;
}
.user{
    position:relative;
   top:29px;
    left:27px;
    text-align:left;
}
.user>img{
  
    padding:10px;
    width:30px;
    height:30px;
    background-color:white;
    vertical-align: middle;
}
.footer{
    text-align:center;
    color:black;
    margin:0 40px;
}
.home{
position:absolute;
top:30%;

left:100%;
transform:translate(-50%,50%);


}
.home>img{
     width:40px;
    height:40px;
}
.QRcode{
    position:absolute;
    bottom:28px;
    right:23px;
    width:84px;
    height:84px;
}
.contain{
    height:100%;
    width:100%;
    background-color:white;
}
.font{
    font-size:13px;
background-color:white;
}
.title{
    margin:10px 10px;
    margin-bottom:0px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    height:50px;
}
.follow{
     width:80px;
    height:25px;
   background-color:rgba(13, 147, 241, 1);
    border-radius:5%;
    line-height:25px;
    text-align:center;
    font-size:13px;
}
.voice{
    vertical-align: middle;
  width:30px;
    height:30px;
}

.post{
       position:relative;
    margin: 0 auto;
    width:330px;
    height:641px;
    border-radius:2.5%;
    background-image:url('../assets/img/bg/post.png');
    background-size:330px 641px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
