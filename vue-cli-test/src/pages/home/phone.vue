<template>

  
    <newdialog v-if="cashFlag" @click="()=>{}">
        <div class="content" >
            <img  class="phoneNum" :src="phone"/>
            <div class="title">手机号验证</div>
           
            <div class="sub_title">请绑定手机号、查询订单</div>
            <div class="flex">
            <input type="text" class="phone_input" placeholder="请输入手机号"/>
             <span v-if="no">手机号错误 </span>
            </div>
            <div class="flex-between message">
                     <input type="text" class="phone_input2" placeholder="请输入手机号"/>
            <span v-if="no">验证码错误 </span>
            <el-button class="elBtn flex" :disabled="btnflag" :class='[btnflag==false?"btnactive":"nobtnactive"]' @click="getTime">{{message}}</el-button>

            </div>
           

            <div class="phone_btn font15" :class='[active?"active":"noactive"]'>立即验证</div>
             
             <van-icon name="close" @click="cancle" color="rgba(255,255,255,1)" />
        
        
        </div>
    </newdialog>

</template>

<script>
import {bd,iconPhone,card,phone} from  '../../utils/imgUrl.js';

import  newdialog from "./../../components/newdialog";
export default {
  name: 'phone',
  data(){
      return{
          phone,
            name:'name',
            img:'../../assets/logo1.jpg',
            btnflag:false,
              cashFlag:true


      }
  },
components: { newdialog,phone},

  methods:{
        cancle(){
          this.cashFlag=false
      },
      openCash(){
           this.cashFlag=true;
      },
      goHome(){
          
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
         },
         getPhone(){
             let url='/WeChat/sendCaptcha'

                this.$get(url,{
                    phone:'12',
                    aid:'',
                    nickname:''
                }).then(
                    res=>{
                        
                    }

                )

         }

  }
}
</script>

<style scoped>
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
.title{
    font-size:17px;
    flex: 1;
}
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
    margin-bottom:23px;

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

</style>
