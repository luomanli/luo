<template>
  <div class="page">
     
      <div class="pre">

        <div class="head flex-between font12">
            <div  class="white" style="width:5.56rem">演示活动:在电脑端点击推广按钮,在手机上</div>
              <div class="head_right" @click="back">切换活动</div>
        </div>
        <div class="money">
                <div class="money_bot flex-around" >
                    <div class="font13 height  flex-col-center" >
                            <span class="fact">实收金额(元)</span>
                        <div class="font28" >2.4</div>
                    </div>
                

                    <div class="font12 date">
                        <span class="half">全部</span>
                        <span class="half">今日</span>
                        <span class="half">七日</span>
                    </div>

            </div>
          
            <div class="money_list flex-around"> 
                <div v-for='i in num' class="flex-col-center">
                  <span class="font13" style="color:rgba(160,162,166,1);">收款总额</span>
                  <div class="font12">10</div>
                </div>
            </div>
        </div>
          
      </div>
    <div class="order flex">
        <div src="" alt="" class="l"></div>
       
        <span class="font15">订单详情</span>
    </div>
      <div class="cards" v-for="i in data">
         
          <div class="cards_top flex-between">
            <div class="left flex-around">
                      <img  class="user" src="./../../assets/logo1.jpg" alt=""/>
                    
                        <div class="flex-col-center" style="align-items: baseline;">
                            
                            <span class="font15">大熊今天很酷</span>
                                <div class="time font10">2020.06.23</div>
                                
                                
                            </div>
                  
            </div>
            <div class="right flex-col-center">
                <span  class="margin4 font15">¥1元</span>
                <div  class="font13">未支付</div>
            </div>
          </div>
          <div class="bottom flex-around">
              <div class="flex-col-center">
                  <span  class="margin3 font13">直接上级</span>
                  <div  class="font10" style="color:rgba(160,162,166,1);">2</div>
              </div>
              <span style="width:1px;height:37px;background-color:#CBCCCF"></span>
                <div class="flex-col-center">
                 <span  class="margin3 font13">直接上级</span>
                  <div  class="font10" style="color:rgba(160,162,166,1);">2</div>
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
  },
  methods:{
      back(){
            this.$router.push({name:'activity'})
      },
  }
}
</script>

<style scoped>
.margin4{
    margin-bottom: 4px;
}
.margin3{
    margin-bottom: 3px;
}
.time{
    color:rgba(160,162,166,1);
}
.cards_top{
    padding:15px 19px 17px 17px;
}
.right{
    
}
.left{
    text-align: left;
}
.l{
    width:5px;
    height:19px;
    background:rgba(247,74,63,1);
    border-radius:3px;
    margin-right:8px;
      margin-left:18px ;

}
.order{
    margin-top: 70px;
    margin-bottom:14px ;
    margin-left: 1px;
    height: 21px;
    
}
.money_list{
    height: 51.5px;
    text-align: center;
}
.money_bot{
    border-bottom:1px #E6E9EF  solid;
 
}
.money_item{

}
.height{
    height: 74.5px;
}
.date{
    text-align: center;
    width:118px;
height:24px;
background:rgba(230,233,239,1);
border-radius:3px;
display:flex;
line-height: 24px;
}
.fact{
    font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(160,162,166,1);
}
.head{
height:59px;

}
.cards{
    margin: 0px 14px 24px 18px;
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
    margin-right:8px ;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.pre{
    padding: 17px 14px 0px 18px;
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
.head_right{
    color:rgba(248,71,63,1);
    width:67px;
height:22px;
background:rgba(255,255,255,1);
border-radius:11px;
line-height: 22px;
text-align: center;
}
.out_footer{
    position: relative;
    bottom: 0px;
    display: flex;

}

</style>