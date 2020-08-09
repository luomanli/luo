<template>
  <div class="page">
      <div class="two">
      <div class="head flex-between">
          <div class="left">

      <img  class="user"  alt=""/>
      <span class="font15">name</span>
      <div class="phone font10">12344</div>
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
                <span class="font10">可提现</span> 

              <span class="font17">￥56.20</span>
                </div>
          </div>
       
          <div class="cash font14 white">
            提現
          </div>

      </div>
      </div>
      <div class="record">
          <span class="font15">提现记录</span>
          <div class="table" >
               <el-table :data="tableData" >
                   <el-table-column align="center"  prop="time" label="时间"  width="100" ></el-table-column>
                    <el-table-column  align="center" prop="user"  label="用户"  width="200"></el-table-column>
                    <el-table-column align="center"  prop="money" label="金额"  width="100"></el-table-column>
        
               </el-table>
          </div>
          <span class="more color font10">显示更多</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'er',
    data(){
        return{
            tableData:[
               {
                "time":'123',
                user:'dfs',
                money:1.56,
               } ,
                {
                time:'123',
                user:'dfs',
                money:1.56,
               } 

            ]
        }
    },
}
</script>

<style>
.more{
    text-align: center;
}
.page{
    background:rgba(247,247,247,1);
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