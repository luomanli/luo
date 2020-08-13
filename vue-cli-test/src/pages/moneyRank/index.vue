<template>
    <div
        class="contain"   
        >
        <div class="head">
                <div class="font13 head_conhead_con flex-between">
               
                    <span>
                         <img class="user" src="" />name
                        <img class="icon marginl8" :src="rank" />
                        <span class="bg font10">第五名</span>
                    </span>
                    <span>
                        <img  src="" />
                        <span class="bg font10">收益提醒</span>

                        
                    </span>

                </div>
                    <div class="flex-around head_cash">
                <div class="flex-around left">
                        <div class="money">
                            <span class="font17 white">¥1.20</span>
                            <div class="font10">已到账</div>
                        </div>
                        <span class="l"></span>
                        <div class="money">
                          <span class="font17 white">¥1.20</span>
                            <div class="font10">已到账</div>
                           
                        </div>
                </div>
                <div></div>
                <div class='btn_cash' @click="openCash" >提现</div>
                    </div>
              
               
         </div>
          <div class="center">
                   <div class="flex-between center_con">
                        <span class="font15" >邀请明细</span>
                        
                          <van-icon  class="icon" name="arrow" color="background:rgba(58,59,60,1);" />
                   </div>
                   <div class="flex-between center_bot">
                       <div class="num flex-around">
                        <span class="font13">邀请人数
                            <div class="font10 color" >
                                <span>您已邀请5个人</span>
                                <van-icon name="arrow" color="rgba(210,34,24,1)" />                          
                            </div>
                             
                        </span>

                        <img class="icon2" :src="come" alt=""/>
                       </div>
                        <div class="num flex-around">
                        <span class="font13">分销订单
                          <div class="font10 color">您已邀请5个人
                           <van-icon name="arrow" color="rgba(210,34,24,1)" />
                          </div>
                        </span>
                        <img class="icon3"  :src="order" alt=""/>
                       </div>
                   </div>
               </div>
               <reve-rank></reve-rank>
               <bottomSet></bottomSet>
               <bottom></bottom>
               <newdialog v-if="cashFlag">
                    <div class="con" >
                    <!-- <img  :src="outcash" class="outcash"/> -->
                        <div class="cash_center">
                        <div class="title font20 white">提现金额</div>
                        <input type="number" readonly @click="number" :value="value">
                        <div class="flex-between cash">
                            <span class="font13">可提现金额:<span >20.57元</span></span>
                            <span class="font12 color">全部提现</span>
                       </div>
                       <div class="tip">*您输入的金额大于可提现的金额</div>
                        <div class="btn" @click="flag=false">提现</div>
                    <van-icon @click="cancle" name="close" color="rgba(255,255,255,1)" />
                        </div>
                    </div>
                   

               </newdialog>
               <van-number-keyboard
                :show="show"
                 theme="custom"
                @blur="show = false"
                @input="onInput"
                @delete="onDelete"
                />
                 <companytwo flag="true" ></companytwo>

        </div>
</template>

<script>
import companytwo from  '../../components/companytwo.vue';

import reveRank from  '../../components/reveRank.vue';
import newdialog from  '../../components/newdialog.vue';
import {come,order,rank,outcash} from  '../../utils/imgUrl.js';

import bottom from  '../paySuccess/component/bottom.vue';
import bottomSet from  '../paySuccess/component/bottomSet.vue';

export default {
  name: 'moneyRank',
    props:{
      flag1:{
          type:Boolean,
          default:false

      }
  },
 

 components: { reveRank,bottomSet,bottom,newdialog,companytwo },
    data(){
        return{
            come,
            order,
            rank,
            outcash,
             show:true,
            name:'name',
             img:'../assets/logo1.jpg',
             flag:true,
             value:'123',
             cashFlag:true
             
        }
    },
  methods:{
      goHome(){
          
      },
      onInput(v){
          this.value+=''+v;
          console.log(v)
      },
      onDelete(){
          this.value=this.value.substr(0,(this.value.length-1))
      },
      number(){
          console.log('123')
          this.show=true
      },
      cancle(){
          this.cashFlag=false
      },
      openCash(){
           this.cashFlag=true;
      }
  }
}
</script>

<style scoped>
.icon{
    width:4px;
height:8px;

}
.title{
padding-top:30px;
margin-bottom:51px;
}
.outcash{
    position:absolute;
    width:300px;
    height:300px;
}
/*.bg1{
    top:0px;
    position:absolute;
    width:400px;
    height:400px;
}*/
input{
   width:225px;
height:34px;
border-radius:5px;
border:1px solid rgba(151,151,151,1);
}
.cash_center{
    
    padding-left: 24px;
    padding-right:32px;
    
}
.center_bot{
    margin-right: 37px;
}
.color{
    color:rgba(210,34,24,1);
}
.icon2{
    width: 35px;
    height:30px;
}
.icon3{
    width: 30px;
    height:29px;
}
.num{
width:154px;
height:64px;
background:rgba(245,246,249,1);
border-radius:2px;
margin-right:10px;
margin-bottom:10px;
}
.bg{
  width:64px;
height:18px;
background:rgba(255,255,255,0.18);  
border-radius:10px;
}
.head_con{

}
.center{

    height:118px ;
    padding-top:15px; ;
   
    padding-left:16px ;

}
.center_con{
    margin-top:12px ;
    margin-bottom: 6px;
    margin-right: 16px;
}
.user{
    margin-top: 14px;
    margin-bottom:10px ;
    width: 40px;
    height: 40px;;
    vertical-align: middle;
}
.l{
    width: 1px;
    height:35px ;
    background-color:#D22218 ;
    margin-right:25px;;

}
.right{
    flex:2;
}
.left{
    
}
.money{
    margin-right:25px;;
}
.head{
    padding: 0px 24px;;
    height:127px ;
    background:linear-gradient(180deg,rgba(253,139,80,1) 0%,rgba(247,67,61,1) 100%);

}
.head_cash{
 

    margin: 0px ;
height:63px;
background-color:rgba(255,255,255,0.6031);
border-radius:11px 11px 0px 0px;

}
.tip{
    margin-top: 8px;
    text-align: left;
    font-size:10px;
    color:rgba(228,52,53,1);
}
.bottom{
    margin-top:10px;
    
}
input{
font-size:16px;
    

}
.cash{
    margin: 0 auto;
    margin-top:12px;
    width: 225px;

}
.btn{
    line-height:32px;
    width:128px;
height:32px;
background:rgba(205,205,205,1);
border-radius:5px;
font-size:16px;
margin: 0 auto;
margin-top:10px;
margin-bottom: 30px;
color:rgba(255,255,255,1);
background:linear-gradient(90deg,rgba(247,70,62,1) 0%,rgba(252,134,78,1) 100%);
}
.btn_cash{
    
    color:rgba(255,255,255,1);
    text-align: center;
    font-size:14px;
    line-height:24px;
    width:59px;
height:24px;
background:linear-gradient(90deg,rgba(247,70,62,1) 0%,rgba(252,134,78,1) 100%);
border-radius:12px;
}
.icon{
   width:12px;
height:16px;
vertical-align:middle;
}

.con{
    position: absolute;
    top: 120px;
width:291px;
height:260px;
background:rgba(255,255,255,1);
background: url('http://m.dian7.net/mobile-split/img/bg/outcash.png');
background-size:cover;
border-radius:16px;
text-align: center;

}





</style>
