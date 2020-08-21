<template>
  <div class='contain'>
  
    <div class='title' v-if="subscribe">
        
        <div class="flex-between">
            <img  class="voice" src="../assets/img/icon/laba.svg" alt="">
            
            <div class='font'>关注公号 即是接受奖励到账通知</div>
        </div>
          <div class='follow' @click="follow">
            关注
         </div>
    </div>
    <div class="con">
        <img class='post' :src="postImg"/>
        <div class="user flex_center">
          <div class="img_con flex_center">
            <img  class="user_img"  :src="img" alt=""/>
          </div>
            <span class="font10" style='color:white'>{{name}}</span>
        </div>
        <img class="QRcode" src="../assets/img/bg1.png" alt=""/>
        <div class="home flex-col-center" @click='goHome'>
         <div  class="bot font10" >进入活动</div>
              <img class="icon"  src="../assets/img/icon/home.png" alt="">
             
        </div>
        
        </div>
        <div class='footer font13'>
          <div>
            <span >恭喜您获得分销资格，请长按保存图片18115175096</span> 
            <a  href="tel:18115175096">拨打电话18115175096</a>
            <div >每推广一位好友下单，您立即获得<span style='color:red'>0.3</span>  元收益</div> 
        
          </div>
    </div>
    
    <company v-if="flag" :flag="flag" :qrcode="qrcode"></company>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
import qs from'qs'
import {indexbg} from  '../utils/imgUrl.js';

import company from  '../components/company.vue';

export default {
  name: 'post',
  data(){
      return{
        indexbg:'',
            name:'name',
            img:'',
            weixinCode:'',
            endUrl:'',
            appId:'o07hhuI8ChAu4pu5AkVyYuXuyPL4', 
            address:'',
            openId:'o07hhuI8ChAu4pu5AkVyYuXuyPL4',
            subscribe:true,//订阅
            flag:false,
            qrcode:'',
            postImg:'../assets/img/bg/post.png',
            sharer:""
      }
  },
  watch:{
       qrcode(val) {
        this.qrcode =val;
      }
  },

   created() {
      //上级id绑定关系
      
        let id=qs.parse(location.href.split('#')[1].substr(2)).id;
        this.sharer=id;
           alert('res_id'+id+"--window==="+window.location.href)
            alert('sharer=='+this.sharer)
          this.open();
    //
 
    

              
  },
  mounted(){
   
      this.getUser()
      // this.getPay();
      // this.getQrcode();
      // this.getPost();
      this.getConfig()
 
  },
 components: { company},

  methods:{
    // 打开code
    open(){
      //  const code = this.$route.query.code;
      //  code="sdfs"
      //  console.log("code==",code)
      //  const c = qs.parse(window.location.search.substr(1)).c;
      //   alert("code"+code)
      // if(!code){
      //    this.$router.push({
      //     name:"user"
      //   })
         
   
      if(window.location.href.indexOf('code')<0 ){
          let host='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3aee30a8da24ba55&redirect_uri=http://m.dian7.net/mobile-split&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect'
            window.location.href=host

      }else{

      }
    
       
      
        
    },
      //马上关注
      follow(){
        this.flag=true
      },
      //是否订阅
      getSub(){
             this.$get('weChat/get/userInfo?openId='+this.openId,{}).then((res)=>{
               let sub=res.data.subscribe
               console.log('sub'+sub)
               if(sub=='1'){
                     this.subscribe=false;
               }
                    console.log('11111'+JSON.stringify(res))
               })

      },
      //分销关系绑定
      setRelationShip(){
          
          
          let id=qs.parse(window.location.search.substr(1)).id;
           alert('sharer=='+sharer)
          this.$post('/user/relationship/bindSharer?sharerAccount='+this.sharer+'&yourAccount='
          +this.openId+'&activityId='+this.activityId).then(
           (res)=>{
             alert('res'+res)
           }
          )
      },

      //海报查询接口
      getPost(){
        let url= `/poster/get?activityId=52&openId=${this.openId}&posterId=1`
         this.$get(url).then(
           (res)=>{
             console.log('res',res)
              this.name=res.data.sharerNickName
              this.img=res.data.SharerHeadImgUrl
              this.postImg=res.data.postUrl
           }
          )
      },
      //二维码查询接口
      getQrcode(){
         console.log('getQrcode')

        this.$get("/WeChat/getQrcode2").then(
           (res)=>{
             alert('res'+res)
             this.qrcode=res
           }
          )
         
      },
        //个人信息查询
         getUser(){
              const code = qs.parse(window.location.search.substr(1)).code;
            
              // this.getQrcode();                
              this.$post('weChat/record/userInfo?code='+code,{}).then((data)=>{
                    this.openId=data.data
                    
                  //改变url
                    var _url = window.location.protocol + '//' + window.location.host + '/mobile-split/#/user?id='+this.openId;
                    window.history.pushState({},0, _url)

                      // window.location.href= window.location.protocol + window.location.host
                      console.log('11111'+data)
                          //  this.getSub();
                      this.setRelationShip();
                      this.getPost();
              })

         },
      //支付接口测试
      onBridgeReady(obj) {
        WeixinJSBridge.invoke(
            'getBrandWCPayRequest', obj,
            function(res) {
              alert('1234'+JSON.stringify(res))
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                       alert('1114'+JSON.stringify(res))
                    // 使用以上方式判断前端返回,微信团队郑重提示：
                    //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                }
            })
      },
       //购买接口测试
       buy0(){
          console.log('11111'+this.openId)
          const code = qs.parse(window.location.search.substr(1)).code;
          // let params={
          //   // activityId:this.activityMsg.uid,
          //     activityId:52,
          //   code:'23',
          //   orderStyle:'1'
          //   }
            let body={
              "fs":"dsf",
              "dsff":'d',
              "dsfafa":"dsfw"
              }
            
        let url='/orderForm/new/byCode?activityId=52&openId='+this.openId+'&orderStyle=1&tradeType=JSAPI'
        this.$post(url, body).then((data)=>{          
                      console.log(data)
                      let obj=data.data;
                      let config={
                              "appId": obj.appid, //公众号名称，由商户传入
                              "timeStamp": obj.timeStamp, //时间戳，自1970年以来的秒数
                              "nonceStr": obj.nonceStr, //随机串
                              "package": obj.package,
                              "signType": "HMAC-SHA256", // HMAC-SHA256
                              "paySign": obj.paySign //微信签名
                      }
                      alert('config'+JSON.stringify(config))
                      this.onBridgeReady(config);
                  })
                  
        },
     
     
     
     
     
     getPay(){
        console.log("data")
          this.$get('https://api.mch.weixin.qq.com/pay/orderquery').then(
            (data)=>{
              console.log(data)
            }
          ) 

      },

      displayData(data) {
        alert( JSON.stringify(data));
      },
      goHome(){
          this.$router.push({name:'index'})
      },
      //测试网页授权接口
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
          
             

              
      },
      getConfig(){
        let ticket='';
        let config={};
        this.$get('/weChat/get/ticket').then((data)=>{
                  ticket=data.ticket
                  console.log('data.ticket',data.ticket)

              }).then(()=>{    
                alert('location.href.split[0]'+location.href.split('#')[0])
                let data0={
                "url":location.href.split('#')[0],
                // "url":"localhost:8080/",
                "jsapi_ticket":ticket,    
              }
              let url="http://m.dian7.net:9351/sign/general"
              this.$post(url,data0).then((res)=>{
                    console.log('ressign',res)
                    config=res
                }).then(
            ()=>{
            alert('config'+JSON.stringify(config))
             
             let  param = {
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: 'wx3aee30a8da24ba55', // 必填，公众号的唯一标识
                timestamp:config.timestamp, // 必填，生成签名的时间戳
                nonceStr: config.noncestr, // 必填，生成签名的随机串
                signature: config.sign,// 必填，签名，见附录1
                jsApiList: [
                    'onMenuShareAppMessage'
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
              wx.checkJsApi({
                  jsApiList: ['onMenuShareAppMessage'], // 需要检测的JS接口列表，此处为分享到朋友圈接口示例
                  success: function(res) {
                  // 以键值对的形式返回，可用的api值true，不可用为false
                  // 如：{"checkResult":{"onMenuShareTimeline":true},"errMsg":"checkJsApi:ok"}
                        alert(res);
                  }
                });
                //分享链接
                wx.onMenuShareAppMessage({
                    //请求成功要做的事
                    title: '12分享标题', // 分享标题
                    desc: '123分享副标题',
                    link: 'http://m.dian7.net/mobile-split/#/?&id='+this.openId,
                    imgUrl: indexbg,
                    trigger: function (res) {
                      //alert('用户点击发送给朋友');
                    },
                    success: function (res) {
                      alert('成功');
                    },
                    cancel: function (res) {
                      alert('已取消');
                    },
                    fail: function (res) {
                      alert(res.errMsg);
                    }
                });
            })    
      })  
      }


  }
}
</script>

<style scoped>
.user_img{
  width:35px;
  height:35px;
  border-radius:50%;
}
.con{
  position:relative;
  background:rgba(47,47,50,1);
  padding-top:17px;
  padding-bottom:0px;
}
.icon{
    height:40px;
    width:40px;
}
.bot{
    width:74px;
height:16px;
background:rgba(121,59,43,1);
border-radius:3px;
opacity:0.51;
color:rgba(255,255,255,1);
    text-align:center;
}
.user{
    position:absolute;
    top:40px;
    left:59px;
    text-align:left;
  
    height:30px;

}
.img_con{
  width:40px;
  height:40px;
    background-color:white;
    vertical-align: middle;
    margin-right:10px;
}
.footer{
  padding: 7px 0px;
  bottom:50px;
  height:;
  width:100%;
  text-align:center;
  color:rgba(255,255,255,1);
  background: rgba(47,47,50,1);
    
}
.home{
position:absolute;
top:50%;

left:86%;
transform:translate(-50%,50%);


}
.home>img{
     width:40px;
    height:40px;
}
.QRcode{
    position:absolute;
    bottom:16px;
    right:59px;
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
color:rgba(160,162,166,1);
line-height:25px;
width:219px;
height:25px;
background:rgba(255,255,255,1);
border-radius:2px;
}
.title{
    padding:0px 18px 0px 20px;
     background:rgba(74,74,77,1);
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    height:50px;
}
.follow{
     width:80px;
    height:25px;
    background:rgba(222,38,38,1);
    color:rgba(255,255,255,1);
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
    display:block;
    margin: 0px auto;
    width:301px;
    height:585px;
    border-radius:2.5%;
    /*<!-- background-image:url('../assets/img/bg/post.png');*/ /*-->
    <!-- background-size:330px 641px;*/
    background-color:black;
}
</style>
