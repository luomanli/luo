  <template>
  <div class="body">
    <div class="img">
    <img class="img" src='../assets/bg.png'/>
    </div>
    <div class="price">
        <div class="right">
          <div class="flex_column">
              <div style='font-size:10px;line-height:14px;height:14px'>距离活动结束</div>

               <van-count-down ref="countDown" millisecond
                    :time="backTime" :auto-start="false" format="HH:mm:ss:SS"
                    @finish="finish"/>

               <div class='time'>{{backTime}}</div> 
          </div>
        </div>
        <div class="old_price">原价:1788{{activityMsg.originalPrice}}</div>
        <div class='curentP'>
            <div style="font-size:12px;color:#E40000;width:48px;
            height:100%;left:30px;bottom:0px">限时特价</div>
            <span  style="color:red;font-size:21px;">￥</span>
            <div class='out' style="font-size:39px;width:100px;
            height:54px;">
            12{{activityMsg.activityPrice}}
            </div>
        </div>

       
    </div>
    <div class="content">
      <div class="title">
      {{activityMsg.activityTitle}}
      
        演示活动:电脑端点击推广按钮,在手机上预览活动xxxx预览活动
      </div>
      <div class="sub_title">
        <span>演示活动:活动副标题{{activityMsg.activityTitle}}</span>
      

      </div>
    <div>
        <span class='store'>剩余库存:12{{activityMsg.activityStock}}</span>
      </div>
  
    </div>

    <div class="peoNum" v-if="" > 
     <div class="peoNum_left flex-between">
     <div class="peoNum_item flex_center" v-for='i in n'>
        <img class="icon_crown" :src="kingUrl+i+'.png'" alt="">
        <img class="peo" :src="imgVirUrl+vpeo[i]" alt="">
     </div>
      
    
     </div>
      <div class="peoNum_right flex-between">
     <div class="more flex_center">
       
             <img class="more_img one" :src="imgVirUrl+vpeo[4]"/>
         
          
              <img  class="more_img one buyer" :src="imgVirUrl+vpeo[0]"/>
           
          
              <img class="more_img one buyer1" :src="imgVirUrl+vpeo[1]"/>
             
            <div class='one buyer2 '>
              
            </div>

      </div>
      <div class="back" @click="goRankIndex">
       {{activityMsg.virtualQuantity}}12人已购买
       <van-icon name="arrow" color="#3A3B3C" />
       
      </div>
       </div >
      
    </div>
    <div class="shop" v-if="activityMsg.contactUs">       
        <div class="name">
          <img class="icon margin10" src="../assets/logo1.jpg" alt="">
          <div class="center">
            <div style="font-size:14px;" >小米自营旗舰店{{activityMsg.uname}}</div>
            <div style="font-size:10px;">该商家很懒,还没有完成基础设置</div>
          </div>         
        </div>
        <div class="concate" @click="contactUs">
          联系商家
        <img style='width:6px;height:10.8px' src="../assets/img/forward-orange.svg" alt="">

        </div>
    </div>
    <div class="img_text">
    
      <div class="qualificat">     
        <div class="ql-editor" v-html="ContentData"></div>
  
      </div>
      
   
      <reveRank class='rank'></reveRank>
        <div class="footer">
              <span class='color font12' @click='goNotic'>交易须知</span>
              <span  class='color font12' @click='advice' >投诉建议</span>
               <div class="top13">
                  <span class='grey'>此页面的产品或服务由</span>
                  <span class='color'  @click='goComp'>XXXX有限公司</span>
                  <span class='grey'> 提供</span>

                  <p>
                      <span class='color' @click="goFound" >小懵科技</span>
                      <span class='grey font10'>仅提供技术支持</span>
                  </p>
              </div>  
    </div>  
    <div class="found">
        <div class="company">
          <img style='width:30px;height:30px;vertical-align: middle;' class="margin3" src="../assets/logo1.jpg" alt="">
          <div class="flex-col-center" style="align-items:baseline;color:rgba(58,59,60,1);">
            <span style='font-size:12px'>小懵裂变</span>
          
            <p  class='grey font10'>你也可以免费参与这样的活动</p>
          </div>
          
        </div>
        <div class="goFound" @click="goFound">
                  马上创建
        </div>
    </div>  
    </div>
     <div class='moneyReward' @click="goPost">
            <img  class="money_img" src="../assets/img/money.png" alt="">
           
      </div>

  
      <company v-if="false" ></company>
   <nopay :flag="cancle"></nopay>
    <div class='bottom'>
      <div class='flex-col-center' style="align-items: baseline;">
            <span class="font12" style='text-decoration:line-through;color:rgba(255,127,128,1);'>原价:1788</span>
            <div class="font15" style="color:rgba(228,51,52,1);">限时特价  ￥12.88</div>
      </div>
      <div class='flex_center' >
            <img class='custom' :src="custom" @click="goCustom">
            <div class='buy' @click="buy">{{buyMessage}}</div>   
        </div>
    </div>
     <phone v-if="true" ></phone>
        <van-overlay :show="serviceCus" class="flex_center" @click="close($event)" >
            <concatService ref="msk"></concatService>
        </van-overlay>
  </div>
  
  
</template>

<script>

import time from  '../utils/time.js';
import {custom,indexbg,imgVirUrl,kingUrl} from  '../utils/imgUrl.js';
import phone from  './home/phone.vue';
import concatService from  './home/concatService.vue';
import reveRank from  '../components/reveRank.vue';
import company from  '../components/company.vue';
import nopay from  '../components/nopay.vue';
import qs from'qs'
// let atime=countTime();
// setTimeout(countTime, 1000);


export default {
  name: 'H3',
  data () {

   
    return {
      kingUrl,
      imgVirUrl,
      king:'./../assets/img/icon/king',
      backTime:'00:00:00',
      indexbg,
      custom,
      flag:false,
      n:[1,2,3],
      msg: 'Welcome to Your Vue.js App',
      v1:'',
      v2:'wewr',
      c:[1,2,3,4],
      proParam:'',
      activityMsg:{},
      forms:{},
      posters:{},
      form:{},
      ContentData: '<p><img src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAkACQAAD/4QB0RXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAACQAAAAAQAAAJAAAAABAAKgAgAEAAAAAQAAANagAwAEAAAAAQAAANYAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAiBJQ0NfUFJPRklMRQABAQAAAhBhcHBsBAAAAG1udHJSR0IgWFlaIAfkAAYAHgAIADoAHmFjc3BBUFBMAAAAAEFQUEwAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtYXBwbNypxmSUwO/VhVWV1rKv7lMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAZGNwcnQAAAFgAAAAI3d0cHQAAAGEAAAAFHJYWVoAAAGYAAAAFGdYWVoAAAGsAAAAFGJYWVoAAAHAAAAAFHJUUkMAAAHUAAAAEGNoYWQAAAHkAAAALGJUUkMAAAHUAAAAEGdUUkMAAAHUAAAAEGRlc2MAAAAAAAAACkxHIEhEUiA0SwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDIwAABYWVogAAAAAAAA8xYAAQAAAAEWylhZWiAAAAAAAAB51wAAOFEAAABcWFlaIAAAAAAAAFTZAAC6UAAAC5tYWVogAAAAAAAAKCYAAA1gAADHNXBhcmEAAAAAAAAAAAAB9gRzZjMyAAAAAAABDHIAAAX4///zHQAAB7oAAP1y///7nf///aQAAAPZAADAcf/AABEIANYA1gMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAICAgICAgMCAgMFAwMDBQYFBQUFBggGBgYGBggKCAgICAgICgoKCgoKCgoMDAwMDAwODg4ODg8PDw8PDw8PDw//2wBDAQICAgQEBAcEBAcQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/3QAEAA7/2gAMAwEAAhEDEQA/APw/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0Pw/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0fw/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0vw/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0/w/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1Pw/ooooAKKKKACiiigAooooAKKKKACiiigAor2X4Z/CO+8eP9omm+yWQ6yEZ/SvaYf2dPBUjFJPFMaEdflH+NfOY/irBYeo6VSTut7Jv8j7TL/D/NMTh44mnTtCWzbSv6XZ8Y0V9xz/ALK+j3ujXd94X19L+6tV3eWqgZxye9fFWpQSW19NbyrtaJipH+6cV0ZRxDhcc5LDyu473TTXyZ5OdcNYvL+X6zG3NtZpp/NFGiiivbPBCiiigAooooAKKKKACiiigAooooA//9X8P6KKKACiiigAooooAKKKKACiiigAooooA+xPhPdvB8PLkIcHY3T8a+Tbu/vftcxFxIPnb+M+v1r6R+EWqadeeH5fD7TiO4dSMH3rHb4D3dxPI4v1AZieg7mvhsFi6GExeIeIduZ3V0f0FxDw1js2yfLZ5bHnUINSs1o9NHqd/wDso6jci+1oSzO4MR4Zif4T618q+KjnxBfH/pq//oRr7V+F3giD4X2up6vql+rJJGR29CK+INcuUu9Xu7iPlXkYj86OH6tOtmWKr0dYtRV/S58hxplNfA5TgsNi1y1E5tq+trqxk0UUV9yflgUUUUAFFFFABRRRQAUUUUAFFFFAH//W/D+iiigAooooAKKKKACiiigAooooAKKKKAL+n6ne6XcC6sZDHIvQiunHxD8WA5F635VxNFYVcLSm7zin8j0sJnOLw8eShVlFdk2jsL7x54o1G0ayu7xnhfqK48nJyaKKqjh4U1aEUvQwxePr4iXNXm5PzdwooorU5AooooAKKKKACiiigAooooAKKKKAP//X/D+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Q/D+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//R/D+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//S/D+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//T/D+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//U/D+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z"/>频、超链接等，支持富文本编辑。实时手机版效果预览，请看PC编辑器右边。</p>',
      comp:false,
      vpeo:this.$randomPeo(5),
      gopost:'',
      service:false,
      openId:'o07hhuFlqxqWVDSGZTDuYZl50wNQ',
      orderId:'',
      cancle:false,
      buyMessage:"立即购买",//购买状态  "活动结束",
      serviceCus:false,
      orderStyle:'1',
      tradeType:"JSAPI"

      

    }
  },
  mounted(){
    this.open()
    this.getUser()
    this.getdata();
    console.log("this.$randomPeo",this.$randomPeo(5))
    let vpeo=this.$randomPeo(5);
    var str0 = "2020/8/15 22:00:00";
    var str1 = "2020/8/25 10:00:00";
    this.countTime(str0,str1)

  },
 components: { reveRank ,company,nopay,phone,concatService},
  methods:{
    finish(){

    },
    open(){
        if(window.location.href.indexOf('code')<0 ){
                   let url="http://m.dian7.net/mobile-split/#/index"
                    url=encodeURIComponent(url);
                    let host='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3aee30a8da24ba55&redirect_uri='+url+'&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect'
                    window.location.href=host
      }else{

      }
    },

        //个人信息查询
         getUser(){
              const code = qs.parse(window.location.search.substr(1)).code;
              // this.setRelationShip();
              // this.getQrcode()
              window.location.href=window.location.href.split('?')[0]+"?c=123"
              this.$post('weChat/record/userInfo?code='+code,{}).then((data)=>{
                    this.openId=data.data                 
                      // window.location.href= window.location.protocol + window.location.host
                      console.log('11111'+data)
                 
                  })

         },

    getdata(){
      console.log('123333'+this.axios)
      this.$get('/activity/mobile/').then(
        response => 
        {
          console.log('123:',response)
          this.activityMsg=response.data.activityMsg
          this.getTime(this.activityMsg.startTime,this.activityMsg.endTime)
          this.forms=response.data.forms    
        }

      )
    },

    getTime(start,end){
       let res= time(start,end)
       if(res){
         this.backTime=res
       }
    },

    getPhoneNumber(){
        this.$get('http://10.10.10.22:9352/WeChat/sendCaptcha?phone='+this.phone+'&aid='+this.aid+'&nickname=').then(
            ()=>{
                  
            }

        )
    },





    goPost(){
// http://m.dian7.net:9351/user/relationship/bindSharer?sharerAccount=o07hhuI8ChAu4pu5AkVyYuXuyPL4&yourAccount=o07hhuBfmAUz2D6UXx7OKVfoTxTc&activityId=52
         this.$router.push(
           {
             name:'post'
           }
         )
       
         this.openId=1;
         this.activityMsg={}
         this.activityMsg.uid=51
         let params={
           sharerAccount:this.openId,
           activityId:this.activityMsg.uid
          //  postId:this.activityMsg.uid
           }; 
          params=JSON.stringify(params)
          this.$store.commit('setValue', this.openId);    
           alert("getValue"+this.$store.getters.getValue )
          sessionStorage.setItem("allJson",params);
          localStorage.setItem("allJson",params);
        return
      // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3aee30a8da24ba55&redirect_uri=http://m.dian7.net/mobile-split&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect
      let host='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3aee30a8da24ba55&redirect_uri=http://m.dian7.net/mobile-split&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect'
       alert("params"+encodeURIComponent(params))
      host =host.replace( "STATE", encodeURIComponent(params) )
      alert("host"+host)
      console.log("host",host)
        // host="http://baidu.com"
        window.location.href=host
    },
    goComp(){
      this.comp=true
    },
   goNotic(){
     this.$router.push({name:'transNotic'})
   },
    con(){
      this.v1='34'
      this.$store.commit('edit')
      console.log('1234',this.$store.getters.todo,this.v1)
    },
    contactUs(){

    },

    goFound(){
          this.$router.push({name:'activity'})
      },
    buy1(){ 
        if(this.activityMsg.activityStock==0){
            this.service=true;
            return;
        }
        if(this.activityMsg.isPaidFill){
               this.$router.push({
                 name:'bindPhone',
                params:{
                  from:JSON.stringify(this.forms),
                  from1:this.forms
                }
             
               })
        }else{
             this.$router.push({
                name:'bindPhone',               
                params:{
                  from:JSON.stringify(this.forms),
                  from1:this.forms
                }
             })
        }
    },
    //
    buy(){
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
              //参数类型待定
        let url=`/orderForm/new/byOpenId?activityId=52&openId=${this.openId}&orderStyle=${this.orderStyle}&tradeType=${this.tradeType}`
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
               if (res.err_msg == "get_brand_wcpay_request:cancle") {                
                        this.cancle=true;
                }
            })
      },
    buy0(){
      const code = qs.parse(window.location.search.substr(1)).code;
      let params={
        // activityId:this.activityMsg.uid,
       activityId:52,
        orderStyle:'1'
      }
      let body={
        "fs":"dsf",
        "dsff":'d',
        "dsfafa":"dsfw"
        }
       let url='/orderForm/new/byCode?activityId=52&code='+code+'&orderStyle=1'
        this.$post(url, body,(data)=>{
          console.log(data)
        })
    },
    goRankIndex(){
         this.$router.push({              
                name:'moneyRank',                   
             })
    },
    //轮询订单状态接口                    
    queryRes(){
        var timer = setInterval(
          ()=>{
             this.$get(url).then(
                (res)=>{
                     console.log(res)
                  if (res.data.orderFormBasic.payStatus == true) { //订单状态为1表示支付成功
                            //此处可以进行相应业务代码的编写，例如支付成功提示，或者直接进行页面跳转.
                            clearInterval(timer);
                            //window.location.href = orderUrl; //页面跳转
                        }
              })
          }
          ,3000);
    },
    //查看购买凭证
    checkBuy(){
      let url=`/query/detailOrderForm?orderId=${orderId}`
      this.$get(url).then(
        (res)=>{

            console.log(res)
              this.orderStyle=res.data.orderFormStyle


        }
      )
    },
        countTime(startStr, endStr) {
            //获取当前时间  
            var date = new Date();
            var now = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
            //设置截止时间  
            //    endStr = "2020/8/13 22:00:00";
            var endDate = new Date(endStr);
            //设置开始时间
            //开始时间小于现在时间，返回false
            // startStr = '2020/8/14 09:10:90'
            var startDate = new Date(startStr);
            // console.log("startDate - now", startDate - date > 0)
            if (startDate - date > 0) {
                return 
            }
            //判断时间差  
            // var end = endDate.getTime();
            var end = 24 * 60 * 60 * 1000;
            var leftTime = end - now * 1000;
            if (date.getMonth() == endDate.getMonth() && date.getDate() == endDate.getDate()) {
                end = endDate.getTime();
                leftTime = end - date.getTime();
                console.log("12", end, leftTime)
                }
                this.backTime=leftTime
                // this.start()
            },
            start() {
                this.$refs.countDown.start();
              },

            //客服
            goCustom(){
              this.serviceCus=true;
            },
            //建议
            advice(){
                let url="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5MzQxMjA1MQ==&scene=110#wechat_redirect"
                window.location.herf=url
            },
            close(ev){
              if (!this.$refs.msk.$el.contains(ev.target)) {
        　　　　　　this.serviceCus = false;
        　　　　}
            }
 



  },
  watch:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.more_img {
  width: 27px;
  height: 27px;
}
.custom{
  width:26px;
  height:26px;
  margin-right:16px;
}
p{
  margin:0px;

}
.peoNum_item{
  position:relative;
  
}
.icon_crown{
  position:absolute;
  top:-5px;
  left:-5px;
  width:15px;
  height:15px;
}
.peoNum_right{
  flex:1.2;
  margin-left:24px;
}
.peoNum_left{
  
  flex:1;
}
.more{
  display:inline-block;
  position:relative;
}


.one{
  border-radius:50%;
   display:inline-block;
    background:black  url('../assets/logo1.jpg')  ;
   width:27px;
   height:27px;
   border:1px rgba(255,255,255,1) solid;
   background-size:27px 27px;
   
   
}
.buyer{
  position:absolute;

  -webkit-transform: translate(-70%);
}
.buyer1{
  position:absolute;

  -webkit-transform: translate(-40%);
}
.buyer2{
  position:absolute;

  -webkit-transform: translate(-10%);
  background:white  url('../assets/img/more.svg')  ;
  background-size:27px 27px;
 
}
.buyer3{
  position:absolute;

  -webkit-transform: translate(0%);
  background:white  url('../assets/img/more.svg')  ;
  background-size:27px 27px;
 
}
.buyer2_more{
  width:27px;
  height:27px;
   position:absolute;

  /*  background:  url('../assets/img/more.svg')  ;*/
 
}
.custSer{
  
  width: 40px;
  height:40px;

}
.money_img{
  width:100px;
  height:100px;

}
.moneyReward{
  position:fixed;
  bottom:200px;
  right:0px;
}
.bottom{
  box-shadow:0px -7px 12px 0px rgba(247,249,255,1);
  background-color:white;
width:338px;
  position:fixed;
padding-left:13px;
margin-right:18px;
bottom:0px;
  display:flex;
flex-direction:row;
height:49px;
justify-content:space-between;
align-items:center;
}
.buy{
   font-size: 13px;
  width:120px;
  text-align:center;
  background-color:orange;
  height:32px;
 width:103px;
height:32px;
background:linear-gradient(270deg,rgba(254,148,83,1) 0%,rgba(247,67,61,1) 100%);
border-radius:2px;
  line-height:32px;
}
.rank{
  width:100%
}
.body{
   width:100%;
  background-color:rgba(247,247,247,1);
}
.company{
  text-align: left;
  display:flex;
flex-direction:row;

align-items:center;
}
.found{
 margin:10px 0px;
  width: 100%;

  display:flex;
  height:54px;
flex-direction:row;
justify-content:space-around;
align-items:center;
margin-bottom:63px;

}
.goFound{
  text-align:center;
  line-height:26px;
  width:89px;
height:26px;
background:rgba(253,135,79,1);
border-radius:3px;
}
.footer{
  font-size:12px;
  width:100%;
  height:114px;
  padding-top:19px;
  padding-bottom:35px;
  background-color:#F7F7F7;
}
.display_total{
  display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
}
.display_img{

height:235px;
}
.proParam{
    
}  
.proParam_item{
 
  display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
}

.qualificat{
  display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
}
.shop_title{
  height:63px;
}
.img_text>img{
    width:18px;
height:18px;
}
.img_text>div{
  font-size:14px;
   font-weight:500;
    width: 100%;
}
.img_text{
 text-align: center;
display:flex;
flex-direction:column;



height:48px;
background:rgba(255,255,255,1);

}
.concate{
  text-align:center;
  width:73px;
  height:22px;
  line-height:22px;
  font-size:12px;
  background:rgba(255,222,204,1);
border-radius:5px;
}
.icon{
  width:34px;
height:34px;
}
.name{
 
    display:flex;
  flex-direction:row;


}
.shop{
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  height:58px;
  margin:4px 0px;
  padding-left:23px;
   padding-right:22px;
  background-color:white;
  align-items:center;

}
.back
{
  font-weight:500;
  font-size:14px;
  color:rgba(160,162,166,1);
}
.peo{
  width:35px;
  height:35px;
  border-radius:50%;
}
.store{
      text-align: center;
  float:right;
  width:103px;
height:20px;
font-size:12px;
background:rgba(253,246,242,1);
border-radius:12px;
color:rgba(228,52,53,1);
margin-right:16px;
}
.peoNum>span{
  margin:0;
  padding:0;

}
.status-point {
  position:absolute;
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color:red;
}
.peoNum{
  padding:0px 13px;
  margin:4px 0px;
  height:62px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  background-color:white;
  align-items:center;
  
}
.flex_around{
 display:flex;
 align-items:center;
  justify-content:space-around;
}
.sub_title{
 display:flex;
 flex-direction:row;
 justify-content:space-between;
  font-size:13px;
  color:rgba(160,162,166,1);
   
}
.title{
  font-size:15px;
}
.content{
  padding-top:3px;
  padding-left:18px;
background-color:white;
 
height:109px;
}
.van-count-down {
  padding-left:30px;
  font-size:25px;
  color:rgba(255,255,255,1);
  text-shadow:1px 1px 1px rgba(65,0,153,1);
  height:30px;
  line-height:30px;
}
.curentP{
top:11px;
margin-left:15px;
  display: flex;
   position:relative;
  flex-direction: row;
  justify-content: flex-start;
     align-items: center;
     position: absolute;

}
.flex_column{
  padding-top:3px;
   display: flex;
  flex-direction: column;
 justify-content: space-around;
     align-items: center;
    
}
.right {
  text-align: center;
 position: absolute;
 top:0px;
 right: 0px;
  width: 225px;
  height: 50.9px;
      background-size: 225px 51px;
    background-repeat:repeat-x;

}

.old_price{
  padding-top:13px;
  margin-left:16px;
height:13px;

text-decoration:line-through;
line-height:13px;
 font-size:9px;
font-weight:600;
color:#E40000;


   margin-bottom:6px;
}
.price{
  position:relative;
  width: 375px;
  height: 65px;
  
background-size:375px 65px;
  /* background-image:url("http://m.dian7.net/mobile-split/img/bg/indexbg.png"); */
  background-image:url("../assets/img/bg/indexbg.png");

}

.img{
  width: 375px;
  height: 375px;
}
.font10{
  font-size:10px;
}
.grey{
  color:rgba(160,162,166,1);
}
.out{
  text-shadow:1px 1px 2px rgba(150,139,4,1);
  color:#E40200;
}
.top13{
  margin-top:13px;
  font-size:10px;
}


a {
  color: #42b983;
}
</style>
