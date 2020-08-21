<template>

     <div  class="dialog__wrapper " v-if="cashFlag" >
           
           
             
               
        


  

        <div class="content" >
            <img  class="phoneNum" :src="phone"/>
            <div class="title">手机号验证</div>
           
            <div class="sub_title">请绑定手机号、查询订单</div>
            <div class="flex" @click="showkeyboard">
                <input type="text" disabled v-model="phoneNum"  class="phone_input" placeholder="请输入手机号"/>
            </div>
             <div class="no" >
                <span  v-if="no0">{{tips}}</span>
             </div>
            <div class="flex-between message" >
            <div  @click="showkeyboard1">

                     <input type="text" v-model="code" disabled  class="phone_input2" placeholder="请输入验证码"/>
            </div>
           
                    <el-button class="elBtn flex" :disabled="btnflag" :class='[btnflag==false?"btnactive":"nobtnactive"]' @click="getTime">{{message}}</el-button>

            </div>
             <div  class="no" >      
               <span  v-if="no1">{{tips2}}</span>
 
             </div>
           

            <div class="phone_btn font15" :class='[active?"active":"noactive"]' @click="checkPhoneAndCode">立即验证</div>
             
             <van-icon name="close" @click="cancle" color="rgba(255,255,255,1)" />
        
        
        </div>
         <van-number-keyboard class="keyboard"
                :show="show"
                theme="custom"
                @blur="show = false"
                @input="onInput"
                @delete="onDelete"
                />
          <van-number-keyboard class="keyboard"
                :show="show1"
                theme="custom"
                @blur="show1 = false"
                @input="onInput1"
                @delete="onDelete1"
                />
           </div>

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
              cashFlag:true,
              message:'获取验证码',
              no0:false,
              no1:false,
              phone:'',
              code:'',
            active:false,
              phoneNum:'',
              show:true,
              show1:true,

              tips:"",
              tips2:"验证码错误"



      }
  },
components: { newdialog,phone},

  methods:{
        onInput(v){
          this.phoneNum+=v;
          console.log(v)
        },
        
      onDelete(){
          this.phoneNum=this.phoneNum.substr(0,(this.phoneNum.length-1))
      },
    onInput1(v){
          this.code+=v;
          console.log(v)
        },
        
      onDelete1(){
          this.code=this.code.substr(0,(this.code.length-1))
      },


    cancle(){
          this.cashFlag=false
      },
      openCash(){
           this.cashFlag=true;
      },
      goHome(){
          
      },
       showkeyboard1(){
            this.show1=true
      },
      showkeyboard(){
            this.show=true
      },
        getTime(){
            if(!this.phoneNum){
                this.no0=true
                      this.tips="手机号码不能为空"
                return;
            
          }else if(!(/^1[3456789]\d{9}$/.test(this.phoneNum))){
              this.no0=true
              this.tips="手机号码格式不正确"
               return;
          }

        this.getPhone()
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
         phoneInput(){  
                console.log("dsdfdgdg")
         },
         getPhone(){
             let url='/weChat/sendCaptcha'

                this.$get(url,{
                    phone:this.phone,
                    aid:52,
                    nickname:'lit'
                }).then(
                    res=>{
                        console.log('231')
                    }

                )

         },
         checkPhoneAndCode(){
                 let url='/weChat/checkCaptcha'

                this.$get(url,{
                    phoneNum:this.phoneNum,
                    captcha:this.code,                 
                }).then(
                    res=>{
                        if(res.message="验证码错误"){
                              this.tips2=res.message
                              this.no2=true
                        }                    
                        console.log(res)
                    }

                )

         }

  },

}
</script>

<style scoped>
.no{
  color:red;
    padding-left: 30px;
    height: 12px;
    text-align: left;
    line-height: 12px;;
    font-size:8px;
    padding-bottom:1px;
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
    margin-bottom:5px;
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
height:28px;
background:rgba(238,238,239,1);
border-radius:7px;
}
.phone_input{
        border: none;

    width:213px;
    height:28px;
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
    margin-bottom:25px;

    margin-top:13px;

}
.keyboard{
    font-size:10px;
    height:200px;
}
   .content{
       position:relative;
       top:75px;
       margin:0 auto;
       text-align:center;
       width:249px;
        height:344px;
        border-radius:6px;
        background-color:white;
   }
.phoneNum{
    margin-top:37px;
    margin-bottom:20px;
    width:50px;
    height:60px;
}
.dialog__wrapper{
    position:fixed;
    top:0px;
    left:0px;
    bottom:0px;
    right:0px;
    background-color:rgba(0,0,0,.3);

    
}
</style>
