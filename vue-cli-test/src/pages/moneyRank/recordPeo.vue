<template>
  <div class="con">
      <div class="item flex-between" v-for="i in data">
          <div class="left">
            <img src="" alt="">
                <img src="" alt="" class="icon">
                <span class='font15'>name</span>
                <span class="font13">0.3yuan</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            data:[1,2,3,4]
        }
    }
}
</script>

<style scope>
.con{
    background:rgba(247,247,247,1);
}
.item{
    margin:5px 0px ;
   background:rgba(255,255,255,1);
}
</style>