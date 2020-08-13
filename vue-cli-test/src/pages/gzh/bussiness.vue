<template>
 
  <div class='content'>
    <div class='title font15'>
        <el-row class="cell">
            <el-col :span="5" class="cell0"><div class=""> 商家名称:</div></el-col>
            <el-col :span="12">      
         <img class="QRcode" src="" /><span class=""> dedfe</span></el-col>
        </el-row>
        <el-row  class="cell" >
            <el-col :span="5" class="cell0"><div class=""> 联系电话:</div></el-col>
            <el-col :span="12"><div class=""> dedfe</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="5" class="cell0"><div class=""> 简介:</div></el-col>
            <el-col :span="12"><div class=""> dedfe</div></el-col>
        </el-row>
        <div>
          
        </div>
    </div>
     <div class='post'>
      
         <img class="QRcode2" src="" />
      
    </div>
    <div class='footer font13'>
     长按识别二维码联系我们 
    </div>
</div>

</template>

<script>
export default {
  name: 'bus',
  data(){
      return{
            name:'name',
             img:'../assets/logo1.jpg',
          
      }
  },
    propos:{
      flag:{
          type:Boolean,
          default:false

      }
  },
  methods:{
      goHome(){
          
      }
  }

}
</script>

<style scoped>
.content{
    text-align:center;
 
}
.cell{
    margin-bottom:19px;
   
}
.cell0{
     margin-right:20px;
}
.title{
    width:343px;
    height:336px;
    margin:0 auto;
    padding-top:20px;
    padding-left:38px;
}
.QRcode{
    width:24px;
    height:24px;
    vertical-align:middle;
       
}
.QRcode2{
    width:117px;
    height:117px;
    vertical-align:middle;
    margin-top:24px;
    margin-bottom:12px;
}      
</style>
