<template>
  <div class="page">
      <div class="two">
      <div class="head flex-between">
          <div class="left flex">
       
                    <img  class="user" src="./../../assets/logo1.jpg" alt=""/>
                    <div class="flex-col-center">
                      
                                <span class="font15 white">name</span>
                        <div class="phone font10">12344</div>
                        
                        
                    </div>
             
      
      
          </div>
          <div class="right">
              <img src="" alt="" class="vip">
              <span class="font10" >普通会员:20天</span>
          </div>

      </div>
      <div class="money flex-around">
          <div class="money1 font10">
              
              <span class="font10">可提现金额</span>
              <span class="font20">￥56.20</span>
               <div class="money2 font12 white">
                  <span class="font10">已到账</span> 
              <span class="font17">￥56.20</span>
                <span class="money3 font10">可提现</span> 

              <span class="font17">￥56.20</span>
                </div>
          </div>
       
          <div class="cash font14 white">
            提現
          </div>

      </div>
      </div>
      <div class="">
          <span class="record font15">提现记录</span>
            <div class="record_out">
            <div  class="out flex" v-for="i in tableData">
                    <span>{{i.time}}</span>
                    <span>
                        <img class="record_user" src="./../../assets/logo1.jpg" v-if="i.user_img" alt="" />
                        {{i.user}}
                        </span>
                    <span>{{i.money}}</span>
            </div>
            </div>


          <!-- <div class="table" >
               <el-table :data="tableData"  >
                   <el-table-column align="center"  prop="time" width='100'  label="时间"  ></el-table-column>
                    <el-table-column  align="center" prop="user" width='400'   label="用户"  ></el-table-column>
                    <el-table-column align="center"  prop="money" width='500'  label="金额"  ></el-table-column>
        
               </el-table>
          </div> -->
          <div class="more color font10">显示更多</div>
      </div>
          <div class="bot"></div>

  </div>
</template>

<script>
export default {
    name:'er',
    data(){
        return{
            tableData:[
               {
                time:'时间',
                user:'用户',
                money:'收益',
               } ,
                {
                time:'2020.06.30',
                user:'小捣蛋',
                user_img:"123",
                money:1.56,
               } ,
                {
                time:'123',
                user:'猪猪笑',
                user_img:"123",

                money:1.56,
               } 


            ]
        }
    },
}
</script>

<style  scoped>


.record{
    margin-left: 18px;
    margin-bottom: 9px;
}
.money3{
    margin-left:26px;
}
.phone{
    text-align: center;
    width:80px;
height:16px;
background:rgba(255,255,255,0.16);
border-radius:9px;
border:1px solid rgba(255,255,255,0.72);
line-height: 16px;
}
.record_user{
    width:20px;
    height:20px;
    vertical-align: middle;
    border-radius:50%;
    line-height:29px;

}
.record_out{
    background-color: #fff;
    border-radius:30px 30px 6px 6px;
}
.record_out div:nth-of-type(1){
    font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(58,59,60,1);
    font-size:15px;
    line-height:61px ;
    }
.record_out div:nth-of-type(n+2){
    font-size:13px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(160,162,166,1);
    line-height:29px ;
    

    }
.out{
    text-align: center;
    
}
span:nth-child(1){
 width: 136.5px;
}
span:nth-child(2){
 width: 129px;
}
span:nth-child(3){
 width: 109.5px;
}



.el-table td,.el-table th{
    padding: 0px;
  

}
.el-table tr td:nth-child(1){
    width: 10px;
    height: 100px;
}
.el-table tr td:nth-child(2){
    width: 100px;
    height: 10px;
}
.el-table tr td:nth-child(2){
    width: 300px;
    height: 10px;
}
.el-table .cell{
    padding: 0px;
   
    font-size:13px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(160,162,166,1);
}

.el-table th>.cell{
     padding: 0px;
    font-size: 15px;
    font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(58,59,60,1);
}



.more{
    
    padding-top:30px;
    text-align: center;
    background:rgba(255,255,255,1);
padding-bottom: 15px;
}
.page{
    position: absolute;
    background:rgba(247,247,247,1);
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    bottom: 0;
}
.table{
    width:375px;
    background:rgba(255,255,255,1);
    border-radius:30px 30px 6px 6px;
}
el-table-column{
    height: 29px;
}
.user{
    width: 54px;
    height: 54px;
    vertical-align: middle;
    border-radius:4px;
}
.cash{
    text-align: center;
width:59px;
height:24px;
background:linear-gradient(90deg,rgba(247,70,62,1) 0%,rgba(252,134,78,1) 100%);
border-radius:12px;
line-height:24px;
}
.two{
    height: 153px;

    background:rgba(247,247,247,1);
background:linear-gradient(180deg,rgba(253,136,79,1) 0%,rgba(247,68,62,1) 100%);

}
.head{
    height: 83px;
    padding:0px 24px 0px 18px;
   
   
}
.money{
    height: 70px;
    width:339px;
    margin: 0 auto;
    border-radius:14px 14px 0px 0px;
    margin-bottom: 28px;
    background:linear-gradient(90deg,rgba(255,192,123,1) 0%,rgba(252,131,35,1) 100%);
}

</style>