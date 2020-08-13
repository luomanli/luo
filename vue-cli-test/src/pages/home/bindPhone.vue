<template>
    <div class="page">
        <div class="font17 order_title" v-if="flag">订单信息</div>
        <van-form @submit="onSubmit">
        <div class="birthday" v-for='(i,index) in data'>
            <!-- <span class='title'> {{i.key}}</span> 
             <span class="write" v-if="index===3" >
                <span class="write1">
                {{i.pre}}
                <img class="right" src='i.img'/>
                </span>
            </span> 
            <span class="write" v-else>
                {{i.pre}}
                kecankao   i.form.type=='select'
                <img class="right" src='i.img'/>
            </span> -->
        <!--<span>{{i.form.type}}</span>-->

           <van-field  class="myvant" label-align="right" v-model="value" v-if="true" label-class="font15" label="生日" border=true :right-icon="message=='获取证码'?bd:''" placeholder="请输入用户名" />
           <van-field v-model="value" class="myvant" label-align="right" v-if="index==2" label-class="font15" label="身份证" border=true :right-icon="card" placeholder="请输入用户名" 
            :rules="[{ required: true, message: '请填写密码' }]"
           />

           <van-field v-model="value" class="myvant" label-align="right" v-if="i.options" label-class="font15" label="手机号码" border=true :right-icon="iconPhone" placeholder="请输入用户名" />
                <div class="flex_center">
                      <div v-if="index==3">123</div>
                     <div class="myborder flex-around">
                        <el-select class="my" v-model="value" placeholder="123" v-if="index==3" size="small">d
                
                        <el-option :label="item.label"  v-for="item in option" :key="item.value" :value="item.value"></el-option>
                        </el-select>
                    </div>
                </div>
           <van-field v-model="value" class="myvant" label-align="right" v-if="index==4" label-class="font15" label="微信地址" border=true :right-icon="bd" placeholder="请输入用户名" />

        </div>
</van-form>


        <div class="flex_center">
        <el-button class="btn2 flex_center" type='danger' v-if="flag">重新提交</el-button>
        </div>
    
        <el-button class="btn" type='danger'  v-if="flag!=true" click="submit">完成提交</el-button>
       
       <newdialog v-if="true">
        <div class="content" >
            <img  class="phoneNum" :src="phone"/>
            <div class="title">手机号验证</div>
            <div class="sub_title">请绑定手机号、查询订单</div>
            <div class="flex">
            <input type="text" class="phone_input" placeholder="请输入手机号"/>
            </div>
            <div class="flex-between message">
                     <input type="text" class="phone_input2" placeholder="请输入手机号"/>
           
            <el-button class="elBtn flex" :disabled="btnflag" :class='[btnflag==false?"btnactive":"nobtnactive"]' @click="getTime">{{message}}</el-button>

            </div>
           

            <div class="phone_btn font15" :class='[active?"active":"noactive"]'>立即验证</div>
        </div>
       </newdialog>
    </div>
</template>

<script>
import {bd,iconPhone,card,phone} from  '../../utils/imgUrl.js';


import wx from 'weixin-js-sdk'
import newdialog from'../../components/newdialog.vue'
export default {
name:'bindPhone',

data(){
    return{
        active:false,
        phone,
        bd:require('./../../assets/img/icon/bd.png')
        ,
        iconPhone:require('./../../assets/img/icon/phone.png'),
        card:require('./../../assets/img/icon/card.png'),
        flag:'true',
        data:[
           { 
               key:"生日",
               value:"",

               pre:'',
               img:''
           },
             { 
               key:"手机号码",
               value:"",
               pre:'请填写您的手机号码',
               img:''
           },
             { 
               key:"身份证号",
               value:"",
               pre:'请准确填写您的身份证号',
               img:''
           },
           { 
               key:"产品规格",
               value:"",
               pre:'点击选择产品规格',
               img:''
           },
            {
                  key:"微信地址",
               value:"",
               pre:'一键获取微信地址',
               img:''
            }
        ],
        option:[
            {
                value:'12',
                label:"123",
            },
              {
                value:'124',
                label:"1233",
            }
        ],
          columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        value:'',
        message:'获取验证码',
        btnflag:false,
        forms:[],
    }
},
propos:{
    flag:{
        type:Boolean,
         default:false
    }
},
 components: { newdialog},
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
        this.getConfig();
  },
  methods:{
      getConfig(){
           this.forms=this.$route.params.from1
           console.log(this.forms, this.$route.params.from1)

      },
      submit(){

      },
      getTime(){
          var timer = null;
        console.log('sdfeexd',this.message)
            var count = 60;
          

            if ( this.message=="获取验证码") {
                   
            timer = setInterval(()=>{
                    count--;

                   this.message=count;
                    console.log('sdfeexd',this.message)
                    if (count <=0) {
                            clearInterval(timer); 
                             this.message='获取验证码' 
                             this.btnflag=false;   
                             
                      }
                    },1000);
            }
            this.btnflag=true;
         }




  },
 watch:{
     message(val){
         if(val>0){
                this.active=true
                  
         }else{
             this.active=false;         
         }

     }
 }


}
</script>

<style  scoped>
.el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover {
   color:white;
  
background:rgba(133,133,144,1);
}
.btnactive{
background:rgba(253,82,79,1);
}
.nobtnactive{
    background:rgba(133,133,144,1);
}
.active{
background:rgba(253,82,79,1);
color:rgba(255,255,255,1);
}
.noactive{
color:rgba(255,255,255,1);
background:rgba(216,216,218,1);
}
.myvant>>>.van-field__value {
        border-bottom: 1px #D1D1D1 solid;
}
.myborder{
    height:41px;
 margin-left: 20px;
   
    border-bottom:1px red solid;


}
.my>>>input{
        width: 190px;
    height: 24px;
     border-radius: 4px;
     border:none;
  background:rgba(238,238,239,1);
  display:block;
}
.my>>>i{
        font-size: 12px;
        line-height: 24px;
}
.elBtn{
    padding: 0px;
width:80px;
height:30px;

border-radius:5px;
font-size:14px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(255,255,255,1);
line-height:30px;
text-align:center;
}
.btn2{

    padding:0px;
   width:89px;
height:26px;
font-size:12px;
background:rgba(253,135,79,1);
border-radius:3px; 
line-height:26px;
text-align:center;
}
.order_title{
    padding-top:9px;

    text-align:center;
    background-color:white;
    padding-bottom:19px
}
.right{
    float:right;
    
}
.sub_title{
     margin-top:6px;
    margin-bottom:22px;
    font-size:12px;
    color:rgba(160,162,166,1);
}
.message{
    margin-bottom:19px;
    padding:0px 13px;

}
.phone_input2{
           border: none;


    background:rgba(238,238,239,1);
    border-radius:7px;

   
      line-height:31px;
      font-size:12px;
        color:rgba(160,162,166,1);
        text-align:left;
        padding-left:7px;
    width:124px;
height:30px;
background:rgba(238,238,239,1);
border-radius:7px;
}
.phone_input{
        border: none;

    width:213px;
    height:31px;
    background:rgba(238,238,239,1);
    border-radius:7px;
    margin:0 auto;
     margin-bottom:7px;
      line-height:31px;
      font-size:12px;
        color:rgba(160,162,166,1);
        text-align:left;
        padding-left:7px;
}
.phone_btn{
    width:202px;
    height:33px;
   color:rgba(255,255,255,1);
    border-radius:3px;
    margin:0 auto;
    line-height:33px;
    

}
   .content{
       text-align:center;
       width:249px;
        height:344px;
        border-radius:6px;
        background-color:white;
   }
.phoneNum{
    margin-top:37px;
    margin-bottom:35px;
    width:50px;
    height:60px;
}
.center{
    dispaly:flex;


}
.van-field__value{
    border-bottom:1px red solid;
}
.page{
    background:rgba(247,247,247,1);
    padding-top:3px ;
}
.birthday{
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding-right:10px ;
    font-size:15px;
    font-weight:500;
    background-color: white;
}
.title{
    font-size:17px;
    flex: 1;
}
.write{
    
    flex:2;
    font-size:12px;
    color:rgba(209,209,209,1);
    border-bottom: 1px #D1D1D1 solid;
}
.write1{
    text-align: left;
    flex:2;
    font-size:12px;
    background-color:rgba(209,209,209,1);
   
}
.btn{
    width:239px;
    margin:68px ;
}
</style>