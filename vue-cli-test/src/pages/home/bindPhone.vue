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
        <el-dialog
        custom-class="er"
        :visible.sync="flag"
        >
        <span>fgh</span>
        </el-dialog>
    </div>
</template>

<script>
export default {
name:'',
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
methods:{},
}
</script>

<style  scoped>
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