<template>
  <div class="con">
      <div class="item  flex-between" v-for="i in data">
          <div class="left">
                <img  class="user" src="user" alt=""/>
                <img  class="icon" src="" alt="" />
                   <van-icon  class="font10" name="checked" color="#E43435"  />
                <span class='font15'>name</span>
               
          </div>
          <div class="left color">

           <span class="font13">0.3yuan</span>
          </div>
      </div>
      <div class="bot"> 
       <bottomSet></bottomSet>
        <bottom></bottom>
        </div>
  </div>
</template>

<script>
import bottom from  '../paySuccess/component/bottom.vue';
import bottomSet from  '../paySuccess/component/bottomSet.vue';
export default {
    data(){
        return{
            data:[1,2,3,4]
        }
    },
 components: { bottomSet,bottom},

}

</script>

<style scoped>
.left{
    height:100%;
    line-height:100%;
}

.color{
    color:rgba(228,52,53,1);
}
.user{
    width:34px;
height:34px;
}
.con{
    background:rgba(247,247,247,1);
    position:absolute;
    top:0px;
    right:0;
    left:0px;
    bottom:0px;
}
.item{
    margin:5px 0px ;
    padding:0px 18px;
   background:rgba(255,255,255,1);
   height:52px;
}
.bot{
    position:fixed;
    bottom: 0;
    width: 100%;
}
</style>