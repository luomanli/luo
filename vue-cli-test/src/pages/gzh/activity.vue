<template>
  <div class="page">
    <div class="head">
      <div class="search">
          
           <el-input class="search_input"
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input2">
  </el-input>
                <input class="search_input" type="text" placeholder="搜索活动">
                   
                    <img src="" alt="">
                </input>
             
        
          
      </div>
      <div class="head_content flex">
          <div class="half font15" :class="[active?'active':'noactive']">线下核销<div></div></div>
          <div class="half font15" :class="[active?'noactive':'active']">全部状态</div>
      </div>
    </div>
      <div class="cards" v-for="i in data">
        <div class="intro flex-around">
          <img   src="" alt="" class="card"/>
          <div class="">
              <span class="font15">活动主题XXCXXXXX</span>
              <span class="font10">已结束</span>
              <div class="font10_grey">这是一个活动简介这是一个活动简介这是…</div>
              <div class="font13 tip">
                <span class="price font13">价格:¥10.00</span>
                <span class="font10">线下核销</span>
                <span class="font10">分销</span>
                </div>

             
          </div>
        </div>
          <div class="data flex-around">
              <div v-for='i in num' class="flex-col-center">
                  <span class="font12">10</span>
                  <div class="font12">浏览量</div>
              </div>
          </div>
          <div class="footer">
              <div class="btn font10_grey" :class="[btnActive?'btn_active':'btn_noactive']" >查看订单</div>
              <div class="btn font10_grey">查看</div>
             
          </div>
      </div>
      <div class="out_footer flex font15">
          <div class="out1 half">
              <img src="" alt="" class="icon">
              <span >分销活动</span>

          </div>
          <div class="out2 half">
              <img src="" alt="" class="icon">
              <span >商家中心</span>

          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          input2:'',
          active:true,
          btnActive:true,
          data:[
              1,2,3,4
          ],
          num:[
              {
              num:10,
              name:'dgsyh'
          },
            {
              num:10,
              name:'dgsyh'
          },
            {
              num:10,
              name:'dgsyh'
          },
          ],
      }
  }
}
</script>

<style>
input,el-input{
    outline: none;
    border: none;
    padding:0
}
el-input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 100px white inset;
        -webkit-text-fill-color: #333;              
}
input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 100px white inset;
        -webkit-text-fill-color: #333;              
}
 
#inputBT:focus { border: 1px solid red; }
*:focus{
    outline:none;
}

input{
outline: none; 
-webkit-appearance: button; 
-webkit-appearance: none; 
border-radius: 0; 
}
.tip{
    margin-top:7px;
}
.price{
   color:rgba(228,51,52,1); 
}
.btn_active{
background:rgba(253,82,79,1);
color:rgba(255,255,255,1);
}
.btn_noactive{
background:rgba(255,255,255,1);
color:rgba(253,82,79,1);
}
.active{
    color:rgba(253,82,79,1);
}
.noactive{
    color:rgba(160,162,166,1);
}
.search_input{
    margin:0px;
    border-color: white;
    color: rgba(246,246,246,1);
    padding:0px;
  margin:0 auto;
  border-size:0px;
    width:308px;
    height:30px;
    background:rgba(246,246,246,1);
    border-radius:15px;
}
.search{
   text-align:center;
    margin:0 auto;
     background:rgba(255,255,255,1);
      padding-top:10px;
       padding-bottom:28px;
}
.head{
    height:97px; 
}
.head_content{
     background:white;
    height:21px;
    text-align:center;
    padding-bottom:11px;
}
.intro{
margin-bottom:20px;
}
.cards{
  
    background:white;
    width:343px;
    height:190px;
    margin:12px auto;
}
.out_footer{
    position:fixed;
    text-align:center;
    width:100%;
   
    bottom: 30px;
    background:white;
    height:30px;
   

}
.card{
   width:62px;
    height:62px;
    border-radius:6px;
    
}
.btn{
    display:inline-block;
    width:66px;
    height:22px;
    border-radius:11px;
    border:1px solid rgba(253,82,79,1);
    text-align:center;
    font-size:10px;
    line-height:22px;
    margin-top:20px;
    margin-right:12px;
}
   .btn:hover{
            color: #fff;
            background: yellow;
        }
        .btn:focus{
            color: #fff;
            background: red;
            outline: none;
        }
.page{
    position:absolute;
    background:rgba(247,247,247,1);
    width:100%;
    height:100%;
}
.footer{
    float: right;
}
</style>