<template>
    <div
        class="contain"   
        >
        <div class="head">
                <div class="font17">
                <img class="user" src="../assets/logo1.jpg" />
                    <span>
                <img class="icon" src="../assets/logo1.jpg" />

                        第五名
                        </span>
                    <span>
                <img class="icon" src="../assets/logo1.jpg" />
                        收益提醒
                        </span>

                </div>
                    <div class="font12">
                <div class="left">
                        <div class="money">
                            <span>¥1.20</span>
                            <span>已到账</span>
                        </div>
                        <span class="l"></span>
                        <div class="money">
                            <span>¥1.20</span>
                            <span>已到账</span>
                        </div>
                </div>
                <div class='btn' >提现</div>
                    </div>
              
               
         </div>
          <div class="center">
                   <div class="flex-between">
                        <span>邀请明细</span>
                        <img src="" alt="">
                   </div>
                   <div class="flex-between">
                       <div class="num flex-between">
                        <span>邀请明细
                            <div>您已邀请5个人</div>
                        </span>

                        <img src="" alt="">
                       </div>
                        <div class="num flex-between">
                        <span>分销订单
                          <div>您已邀请5个人</div>
                        </span>
                        <img src="" alt="">
                       </div>
                   </div>
               </div>
               <reve-rank></reve-rank>
               <bottom></bottom>
               <bottomSet></bottomSet>
               <newdialog>
                    <div class="con">
                        <img src="" alt=""/>
                        <input type="text">
                        <div class="flex-between cash">
                            <span class="font13">可提现金额:<span>20.57元</span></span>
                            <span class="color">全部提现</span>
                       </div>
                       <div class="tip">*您输入的金额大于可提现的金额</div>
                        <div class="btn">提现</div>
                    </div>
                    <img src="" alt="" class="bottom">

               </newdialog>


        </div>
</template>

<script>
import reveRank from  '../../components/reveRank.vue';
import newdialog from  '../../components/newdialog.vue';

import bottom from  '../paySuccess/component/bottom.vue';
import bottomSet from  '../paySuccess/component/bottomSet.vue';

export default {
  name: 'post',
  data(){
      return{
            name:'name',
             img:'../assets/logo1.jpg',
      }
  },
  props:{
      flag:{
          type:Boolean,
          default:false

      }
  },
 components: { reveRank,bottomSet,bottom,newdialog },

  methods:{
      goHome(){
          
      }
  }
}
</script>

<style scoped>
.tip{
    font-size:10px;
    color:rgba(228,52,53,1);
}
.bottom{
    margin-top:23px;
    
}
input{
    margin-top:34px;

}
.cash{
    margin-top:12px;
}
.btn{
    line-height:32px;
    width:128px;
height:32px;
background:rgba(205,205,205,1);
border-radius:5px;
font-size:16px;
margin: 0 auto;
margin-top:32px;
margin-bottom: 19px;
color:rgba(255,255,255,1);
}
.icon{
    position:absolute;
    width:33px;
height:29px;
top:0px;
left:50%;
transform:translate(-50%,-50%);
vertical-align:middle;
}

.con{
     width:291px;
height:245px;
background:rgba(255,255,255,1);
border-radius:16px;
}





</style>
