<template>
  <div class="page">
    <div class="head">
      <div class="head_content flex">
          <div  :class="[isActive?'active':'noactive']" @click="off"><span>线下核销 </span></div>
          <div :class="[isActive?'noactive':'active']"  @click="all">全部状态</div>
      </div>
    </div>
    <div class="cards" v-for="i in data">
        <div class="intro flex-around">
          <img class="card"  src="" alt="" >
          <div class="">
              <div class="flex-between">
                    <div>
                        <span class="font15">活动主题XXCXXXXX</span>
                    <div class="font10_grey">这是一个活动简介这是一个活动简介这是…</div>
                    </div>
                    <div  class="font10">
                        <div class="right0">              
                            已结束              
                        </div>    
                        <div class="right1">              
                            未使用           
                        </div>  
                    </div>          
              </div>              
              <div class="font10_grey">2020.06.02</div>
              <span class="price font13">价格:¥10.00</span>
              <div class="font10_grey"> 
                    <span class="font10 tip">线下核销</span>
                    <span class="font10 tip">分销</span>
                    <span class="font10 tip">已结束</span>
                </div>
                <div class="flex-around">
                    <div class="btn font10_grey" >分销海报</div>
                    <div class="btn font10_grey">收益排行</div>
                    <div class="btn font10_grey">购买凭证</div>
                </div>
            </div>
        </div>              
    </div>
      
  </div>
</template>

<script>
export default {
  data(){
      return{
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
          isActive :true,
          isNoActive :true,
      }
  },
  methods:{
        off(){
                this.isActive=true;
        },
        all(){
                this.isActive=true;

        }
  }
}
</script>

<style scoped>
.active{
        color:rgba(253,82,79,1);
        font-size:15px;
        line-height:21px;
        height:21px;
        flex:1;

}
.noactive{
       color:rgba(160,162,166,1);
    height:18px;
font-size:13px;
line-height:18px;
flex:1;
}
.icon{
    display:inline-block;
    width: 0;
    margin-top:10px;
				height: 0;
				border: 10px solid #000;
				border-color: blue transparent transparent transparent;
}
.tip{
    width:30px;
height:14px;
font-size:10px;

font-weight:500;
color:rgba(255,255,255,1);
line-height:14px;
}
.price{
    color:rgba(228,51,52,1);
}
.right0{
width:46px;
height:18px;
background:rgba(255,185,185,1);
border-radius:2px;
line-height:18px;
text-align:center;
margin-bottom:10px;
}
.right1{
    width:46px;
height:18px;
background:rgba(210,255,215,1);
border-radius:2px;
line-height:18px;
text-align:center;


}
input{
    color: rgba(246,246,246,1);
    padding:0px;
    border-size:1px;
    display:inline-block;
    width:308px;
height:30px;
background:rgba(246,246,246,1);
border-radius:15px;
}
.search{
   text-align:center;
    margin:0 auto;
     
      margin-top:10px;
      margin-bottom:28px;
}
.head{
    height:43px; 
}
.head_content{
     background:white;
    height:21px;
    text-align:center;
    padding-bottom:11px;
}
.intro{
 align-items:flex-start;
margin-bottom:20px;

}
.cards{
    padding-top:19px;
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
       text-align:center;
color:rgba(253,82,79,1);
    line-height:22px;
     margin-top:25px;
      margin-bottom:14px;
   width:66px;
    height:22px;
    border-radius:11px;
    border:1px solid rgba(253,82,79,1);
}
   .btn:hover{
            color: #fff;
            background: #0a90f5;
        }
        .btn:focus{
            color: #fff;
            background: rgba(253,82,79,1);
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