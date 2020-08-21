<template>

     <div  class="" > dwd
            <van-count-down
  ref="countDown"
  millisecond
  :time="time"
  :auto-start="true"
 format="HH:mm:ss:SS"
  @finish="finish"
/>
    </div>

</template>

<script>
import qs from'qs'
export default {
  name: 'buyKown',
  data(){
      return{
            name:'name',
            ContentData:"",
            time:'2647823492',
            openId:""
      }
  },
  mounted(){
      this.open();
    // this.getUser();
        // var str0 = "2020/8/15 22:00:00";
        // var str1 = "2020/8/14 10:00:00";
        // this.countTime(str0,str1)
  },
  methods:{
             open(){
                if(window.location.href.indexOf('code')<0){

                    let url="http://m.dian7.net/mobile-split/#/user"
                    url=encodeURIComponent(url);
                    let host='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3aee30a8da24ba55&redirect_uri='+url+'&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect'
                        window.location.href=host
                      
                    }else{
                var _url = window.location.protocol + '//' + window.location.host + '/#/user?id=123';
                    window.history.pushState({},0, _url)
             }
          },

          getUser(){     
             let code = qs.parse(window.location.search.substr(1).split("#")[0]).code; 
              this.$post('weChat/record/userInfo?code='+code,{}).then((data)=>{
                    this.openId=data.data
                    alert("openId"+this.openId)
                     this.$router.push({
                      name:"post1",
                      query:{
                          id: this.openId,                      
                      }
                    })             
                  })     
         },
         toOri(){
                     this.push({
                      name:"post"
                    })
         },
         finish(){},
        //时间
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
                return false
            }
            //判断时间差  
            // var end = endDate.getTime();
            var end = 24 * 60 * 60 * 1000;
            var leftTime = end - now * 1000;
            if (date.getMonth() == endDate.getMonth() && date.getDate() == endDate.getDate()) {
                end = endDate.getTime();
                leftTime = end - date.getTime();
                // console.log("12", end, leftTime)
                }
                this.time=leftTime
            },
            start() {
                this.$refs.countDown.start();
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
    
  }
}
</script>

<style scoped>
.van-count-down {
    color:red;
    font-size:20px;
}


</style>