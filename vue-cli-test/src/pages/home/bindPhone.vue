<template>
    <div class="page">
        <div class="birthday" v-for='(i,index) in data'>
            <span class='title'> {{i.key}}</span> 
             <span class="write" v-if="index===3" >
                <span class="write1">
                {{i.pre}}
                <img src='i.img'/>
                </span>
            </span> 
            <span class="write" v-else>
                {{i.pre}}
                <img src='i.img'/>
            </span>
           
        </div>

        <el-button class="btn" type='danger'>完成提交</el-button>
       
       <newdialog>
        <div class="content">
            <img  class="phoneNum" src=""></img>
            <div class="title">手机号验证</div>
            <div class="sub_title">请绑定手机号、查询订单</div>
            <div class="phone_input">请输入手机号</div>
            <div class="phone_btn" >立即验证</div>
        </div>
       </newdialog>
    </div>
</template>

<script>
import newdialog from'../../components/newdialog.vue'
export default {
name:'bindPhone',

data(){
    return{
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
    }
},
 components: { newdialog},

methods:{},
}
</script>

<style  scoped>
.sub_title{
     margin-top:6px;
    margin-bottom:22px;
    font-size:12px;
    color:rgba(160,162,166,1);
}
.phone_input{
    width:222px;
    height:31px;
    background:rgba(238,238,239,1);
    border-radius:7px;
    margin:0 auto;
     margin-bottom:22px;
      line-height:31px;
      font-size:12px;
        color:rgba(160,162,166,1);
        text-align:left;
        padding-left:7px;
}
.phone_btn{
    width:152px;
    height:33px;
    background:rgba(253,82,79,1);
    border-radius:3px;
    margin:0 auto;
    line-height:33px;
    color:white;

}
   .content{
       text-align:center;
       width:249px;
        height:310px;
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

.page{
    background:rgba(247,247,247,1);
    padding-top:3px ;
}
.birthday{
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding:0px 30px ;
    font-size:15px;
    font-weight:500;
    background-color: white;
}
.title{
    
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