<template>
  <div class="page">
     
      <div class="pre">

        <div class="head flex-between">
            <div>演示活动:在电脑端点击推广按钮,在手机上</div>
              <div class="right">切换活动</div>
        </div>
        <div class="money">
            <div >
                <div>实收金额(元)</div>
                <div>
                    <span>全部</span>
                    <span>今日</span>
                    <span>七日</span>
                </div>
            </div>
            <div>全部状态</div>
            <div class="flex"> 
                <div v-for='i in num'>
                  <span>收款总额</span>
                  <div>10</div>
                </div>
            </div>
        </div>
          
      </div>
    <div class="order">
        <span></span>
        订单详情
    </div>
      <div class="cards" v-for="i in data">
         
          <div class="">
            <div class="left">

                    <img src="" alt="" class="user"/>
                    <span>name</span>
                    <div class="phone">12344</div>
            </div>
          <div class="right">
             <span>¥1元</span>
              <span>未支付</span>
          </div>
          </div>
          <div class="bottom">
              <div >
                  <span>直接上级</span>
                  <div>2</div>
              </div>
                <div >
                  <span>间接上级</span>
                  <div>2</div>
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
.money{
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