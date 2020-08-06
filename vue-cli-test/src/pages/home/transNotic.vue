<template>
  <div class='contain'>
  
    <div class='title'>
           <span class="title_con">小懵分销平台</span>
    </div>
    <div class='notice'>
        <h1 class='font16'>交易须知</h1>
        <p class='font '>尊敬的小懵分销平台用户，请在购买商家服务,尊敬的小懵分销平台用户，请在购买商家服务</p>
        <p class='font13'> 1 、【服务提示】小懵信息科技有限公司（南京）(以下称 “小懵分销平台”)系提供信息存储空间的网络服务提供者，为多类行业商家提供活动发布服务。 
        <p class='font13'>2 、【交易主体】您在小懵分销平台购买的活动产品或服务均为活动页面展示的商家为您提供，小懵分销平台并非活动权益的提供者和销售者。请您知悉，您一旦支付费用购买在小懵分销平台上其他商家提供的活动权益，
        即与提供权益的商家建立线上服务合同关系，小懵分销平台不构成该权益服务合同关系的任一方。</p>
         <p class='font13'>3 、【虚拟类服务不适用七日无理由退货】根据《《消费者权益保护法》等规定，虚拟类服务不适用七日无理由退换货规定(您与活动举办方达成退款意向的除外)，
        请您于购买时谨慎考虑。如对已购买产品或服务有疑问，请联系活动页面中已购商家客服解决。 若您对以上条款有疑问，敬请您联系小懵分销平台客服(关注 “小懵分销” 公众号，联系客服） </p>
        
     
    </div>
    <div class='footer'>
       <p>小懵信息科技有限公司</p>
        <p> 2020-07-2</p>  
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'post',
  data(){
      return{
            name:'name',
            img:'../../assets/logo1.jpg',

      }
  },
  methods:{
      goHome(){
          
      }
  }
}
</script>

<style scoped>
.black{
    color:black;
}
.notice{
  
   margin:14px 30px;
}
.user>img{
  
    padding:10px;
    width:30px;
    height:30px;
    background-color:white;
    vertical-align: middle;
}
.footer{
    text-align:right;
   
    margin:0 40px;
}
.font{
    font-size:13px;

    line-height:21px;
}
.font13{
    font-size:13px;
    color:rgba(160,162,166,1);
    line-height:21px;
}
.font16{
    font-size:16px;
}
.QRcode{
    position:absolute;
    bottom:28px;
    right:23px;
    width:84px;
    height:84px;
}
.contain{
    height:100%;
    width:100%;

}
.font{
background-color:white;
}
.title_con{
    position:relative;
     margin-left:16px;
    top:25px;
     margin-bottom:16px;
}
.title{
   
color:white;
font-size:23px;
    font-family:PingFangSC-Semibold,PingFang SC;
  height:77px;
  background:linear-gradient(132deg,rgba(253,82,79,1) 0%,rgba(253,135,79,1) 100%);
}
.follow{
     width:90px;
    height:30px;
    background-color:blue;
    border-radius:10%;
}
.p{

}
.voice{
    vertical-align: middle;
  width:50px;
    height:40px;
}

.post{
       position:relative;
    margin: 0 auto;
    width:330px;
    height:641px;
    background-image:url('../../assets/logo1.jpg')
}
h1 {
    margin:0;
    padding:0; 
}
p{
    margin-top:10px;
    margin-bottom:0px;

}
</style>
