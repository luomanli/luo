
<template>
  <div >

    <div>
     <img class="img" src=""></img>
        <div class="content font15">恭喜您,购买成功</div>
        <div class="flex-center font15">
                <div  class="btn">返回首页</div>
                  <div class="btn color">查看订单</div>
        </div>
    </div>
    <bindPhone>
    </bindPhone>
    <buyKown>

    </buyKown>
    <bottom>

    </bottom>
  </div>
</template>

<script>
import bottom from  './component/bottom.vue';
import buyKown from  './component/buyKown.vue';
import bindPhone from  '../home/bindPhone.vue';



export default {
  name: '',
 components: { bottom,buyKown,bindPhone},


}
</script>

<style scoped>

.img{
    width:168px;
height:111px;
background:rgba(253,82,79,1);

}
.content{
    width:100%;
    margin-top:21px;
    margin-bottom:33px;
   
}
.btn{
    width:154px;
    height:36px;
    border-radius:7px;
    border:1px solid rgba(253,82,79,1);
    color:rgba(253,82,79,1);
}
.color{
    background:rgba(253,82,79,1);
}
</style>
