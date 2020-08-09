<template>
  <div class="page">
     
      <div class="pre">

        <div class="head flex-between font12">
            <div>演示活动:在电脑端点击推广按钮,在手机上</div>
              <div class="right">切换活动</div>
        </div>
        <div class="money ">
            <div class="flex-around" >
                <div class="font13" >实收金额(元)
                    <div class="font28" >2.4</div>
                </div>
                

                <div class="font12">
                    <span>全部</span>
                    <span>今日</span>
                    <span>七日</span>
                </div>

            </div>
          
            <div class="flex-around"> 
                <div v-for='i in num'>
                  <span class="font13">收款总额</span>
                  <div class="font12">10</div>
                </div>
            </div>
        </div>
          
      </div>
    <div class="order">
        <span></span>
        <span class="font15">订单详情</span>
    </div>
      <div class="cards" v-for="i in data">
         
          <div class="flex-around">
            <div class="left">

                    <img src="" alt="" class="user"/>
                    <span class="font15" >name</span>
                    <div class="font10">12344</div>
            </div>
            <div class="right">
                <span  class="font15">¥1元</span>
                <div  class="font13">未支付</div>
            </div>
          </div>
          <div class="bottom flex-around">
              <div >
                  <span  class="font13">直接上级</span>
                  <div  class="font10">2</div>
              </div>
                <div >
                 <span  class="font13">直接上级</span>
                  <div  class="font10">2</div>
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
              1,2,3
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
.head{
height:59px;

}
.cards{
    width:343px;
height:123px;
background:rgba(255,255,255,1);
border-radius:5px;
}
.bottom{
  width:343px;
height:51px;
background:rgba(245,246,249,1);
}
.user{
    width: 40px;
    height: 40px;
}
.pre{
    height: 147px;
    background:linear-gradient(180deg,rgba(253,136,79,1) 0%,rgba(247,68,62,1) 100%);
}
.money{
    margin: 0 auto;
    width:343px;
height:127px;
background:rgba(255,255,255,1);
border-radius:5px;
}
.right{
    width:67px;
height:22px;
background:rgba(255,255,255,1);
border-radius:11px;
}
.out_footer{
    position: relative;
    bottom: 0px;
    display: flex;

}
.out1{
    flex: 1;
}
.out2{
    flex: 1;
}
.footer{
    float: right;
}
</style>