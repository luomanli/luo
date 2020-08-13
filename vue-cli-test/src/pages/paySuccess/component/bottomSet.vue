<template>

     <div  class="flex-around contain" >
           
           
        <div class="footer" v-if="false">
              <span class='color' @click='goNotic'>交易须知</span>
              <span  class='color'>投诉建议</span>
               <div class="top13">
                  <span class='grey'>此页面的产品或服务由</span>
                  <span class='color'  @click='goComp'>XXXX有限公司</span>
                  <span class='grey'> 提供</span>

                  <p>
                      <span class='color' >小懵科技</span>
                      <span class='grey font10'>仅提供技术支持</span>
                  </p>
              </div>  
    </div>  
    <div class="found">
        <div class="company">
                   <img style='width:30px;height:30px;vertical-align: middle;' class="margin3" src="../../../assets/logo1.jpg" alt="">

        <div class="flex-col-center" style="align-items:baseline;color:rgba(58,59,60,1);">

            <span style='font-size:12px'>小懵裂变</span>
          
            <p  class='grey font10'>你也可以免费参与这样的活动</p>
          </div>
          
        </div>
        <div class="goFound" @click="goFound">
                  马上创建
        </div>
    </div>  
    </div>
    </div>

</template>

<script>
export default {
  name: 'bottomSet',
  data(){
      return{
            name:'name',
            
      }
  },
  propos:{
      flag:{
          type:Boolean,
          default:false

      }
  },
  methods:{
      goHome(){
          
      }
  }
}
</script>

<style scoped>
.contain{
    width:100%
}

.company{
  text-align: left;
  display:flex;
flex-direction:row;

align-items:center;
}
.found{
 margin:10px 0px;
  width: 100%;

  display:flex;
  height:54px;
flex-direction:row;
justify-content:space-around;
align-items:center;
margin-bottom:93px;

}
.goFound{
  text-align:center;
  line-height:26px;
  width:89px;
height:26px;
background:rgba(253,135,79,1);
border-radius:3px;
font-size: 12px;
}
.footer{
  width:100%;
  height:114px;
  padding-top:19px;
  padding-bottom:35px;
  background-color:#F7F7F7;
}

</style>