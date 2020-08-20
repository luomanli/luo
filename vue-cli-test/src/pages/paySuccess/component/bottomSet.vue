<template>

     <div  class="contain" >
           
           
        <div class="footer" v-if="true">
              <span class='color font12' @click='goNotic'>交易须知</span>
              <span  class='color font12' @click="goCustom">投诉建议</span>
               <div class="top13">
                  <span class='grey'>此页面的产品或服务由</span>
                  <span class='color font10'  @click='goComp'>XXXX有限公司</span>
                  <span class='grey'> 提供</span>
                  <p>
                      <span class='color font10' @click="found" >小懵科技</span>
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
        <div class="goFound" @click="found">
                  马上创建
        </div>
    </div> 
    <div class="place"></div>



    </div>
    </div>

</template>

<script>
export default {
  name: 'bottomSet',
  data(){
      return{
            name:'name',
            comp:""
            
      }
  },
  props:{
      flag:{
          type:Boolean,
          default:false

      }
  },
  methods:{
      goHome(){
          
      },
      goCustom(){
        console.log("Dwewrw")
        let url="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5MzQxMjA1MQ==&scene=110#wechat_redirect"
        console.log(url)
        
        window.location.href=url
      },
      found(){
            this.$router.push({name:'activity'})
      },
      goComp(){
        this.comp=true;
        
      },
      goNotic(){
        this.$router.push({name:'transNotic'})
      },


  }
}
</script>

<style scoped>
.place{
  height:40px;
  
}
.top13{
  margin-top:13px;
  font-size:10px;
}
.contain{
    width:100%;
    background:rgba(247,247,247,1);
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
margin-bottom:3px;
background-color:white;

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
  text-align: center;
  background-color:#F7F7F7;
}
p{
  margin:0px;
  padding:0px;
}
</style>