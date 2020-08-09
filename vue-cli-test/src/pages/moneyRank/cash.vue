<template>
  <div class="con" v-if="true">
      <div class="top">
          <img src="" alt="">
          <span>昵称</span>
          <div>赵家玲 6224***********2256</div>
      </div>
      <div class="center">
          <div class="font12">提现金额:</div>
          <div class="input flex-between">
              ￥<span class="font13">请输入提现金额</span>
              <div class="btn">全部提现</div>
          </div>
            <span class="font12">可提现金额:25元</span>
      </div>
              <div class="bot" @click="flag=false">提现</div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            falg:true,
        }
    }
}
</script>

<style>
.con{
    width:352px;
height:251px;
background:rgba(239,239,239,1);
border-radius:7px;
filter:blur(10px);
}
.btn{
    width:352px;
height:251px;
background:rgba(255,255,255,1);
border-radius:7px;
}
.bot{
    width:235px;
height:32px;
background:linear-gradient(270deg,rgba(254,148,83,1) 0%,rgb(5, 3, 3) 100%);
border-radius:4px;
}
</style>