  <template>
  <div class="body">
  <div>
    <img src='../assets/logo1.jpg'/>
    </div>
    <div class="price">
        <div class="old_price">原价:1788</div>
        <div class='curentP'>
            <div style="font-size:12px;color:#E40000;width:48px;
            height:100%;left:30px;bottom:0px">限时特价</div>
            <span  style="color:red;font-size:21px;">￥</span>
            <div class='out' style="font-size:39px;width:100px;
            height:54px;">
            1288
            </div>
        </div>

        <div class="right">
          <div>jdieu</div>
          <div class='time'>time</div>
        </div>
    </div>
    <div class="content">
      <div class="title">
        SDA
      </div>
      <div class="sub_title">
        <span>dgeyu</span>
       <img class="custSer" src="../assets/logo1.jpg" alt="">

      </div>
    <div>
        <span class='store'>剩余库存</span>
      </div>
  
    </div>

    <div class="peoNum"> 
     <img class="peo" src="../assets/logo1.jpg" alt="">
     <img class="peo" src="../assets/logo1.jpg" alt="">
     <img class="peo" src="../assets/logo1.jpg" alt="">
     <div class="more">
        <div class='one'>1</div>
            <div class='one buyer'>1</div>
            <div class='one buyer'>1</div>    
            <div class='one buyer'>1</div>

      </div>
      <div class="back">
       12人已购买
      </div>
      <div class="">
        <img style='width:6px;height:10.8px' src="../assets/logo1.jpg" alt="">
      </div>
    </div>
    <div class="shop">       
        <div class="name">
          <img class="icon" src="../assets/logo1.jpg" alt="">
          <div class="center">
            <div>小米自营旗舰店</div>
            <div>该商家很懒,还没有完成基础设置</div>
          </div>         
        </div>
        <div class="concate">
          联系商家
        <img style='width:6px;height:10.8px' src="../assets/logo1.jpg" alt="">

        </div>
    </div>
    <div class="img_text">
      <div class="body1">        
        <img class="icon" src="../assets/logo1.jpg" alt="">
        <span class="center">
                图文详情
        </span>    
      </div>
      <div class="shop_title">        
        <img class="icon" src="../assets/logo1.jpg" alt="">
        <span class="center">
                小米自营单
        </span>    
      </div>
      <div class="qualificat">     
        <div v-for='i in c' >
          <img class="icon" src="../assets/logo1.jpg" alt="">
          <div class="">
                  产品参数
          </div>   
        </div>    
      </div>
      <div class="proParam" >  
         <span >产品参数</span>
        <div v-for='i in c' class='proParam_item' >
          <span>123</span>
          <div class="">
                  单品展示
          </div>   
        </div>    
      </div>
      <div class="display" >  
         <span >单品展示</span>
          <div  class='display_total' >
            <img  v-for='i in c' class="display_img" src="../assets/logo1.jpg" alt="">
        </div>    
      </div>
      <reveRank class='rank'></reveRank>
        <div class="footer">
              <span class='color'>交易须知</span>
              <span  class='color'>投诉建议</span>
               <div class="top13">
                  <span class='grey'>此页面的产品或服务由</span>
                  <span class='color'>XXXX有限公司</span>
                  <span class='grey'> 提供</span>

                  <p>
                      <span class='color' >小懵科技</span>
                      <span class='grey font10'>仅提供技术支持</span>
                  </p>
              </div>  
    </div>  
    <div class="found">
        <div class="company">
          <img style='width:30px;height:30px;vertical-align: middle;' src="../assets/logo1.jpg" alt="">
          <div >
            <span style='font-size:12px'>小懵裂变</span>
          
            <p  class='grey font10'>你也可以免费参与这样的活动</p>
          </div>
          
        </div>
        <div class="goFound">
                  马上创建
        </div>
    </div>  
    </div>
     <div class='moneyReward'>
            <img  class="money_img" src="../assets/logo1.jpg" alt="">
              <div>￥1.5</div>
      </div>
  <div class='bottom'>
    <div>原价
    <div>限时特价  ￥12.88</div>
    </div>
    
      <div class='buy'>立即购买</div>
  </div>
  
  </div>
  
</template>

<script>
import reveRank from  '../components/reveRank.vue';
export default {
  name: 'H3',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      v1:'',
      v2:'wewr',
      c:[1,2,3,4],
      proParam:'',
      
    }
  },
  mounted(){
   
  },
 components: { reveRank },
  methods:{
   
    con(){
      this.v1='34'
      this.$store.commit('edit')
      console.log('1234',this.$store.getters.todo,this.v1)
    },
     toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }

  },
  watch:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.more{
  display:inline-block;
  position:relative;
}


.one{
  border-radius:50%;
   display:inline-block;
   background-color:black;
   width:27px;
   height:27px;
   border:3px white solid;
   
}
.buyer{
  position:absolute;
  -webkit-transform: translate(-70%);
}
.custSer{
  
  width: 40px;
  height:40px;

}
.money_img{
  width:100px;
  height:100px;
}
.moneyReward{
  position:fixed;
  bottom:100px;
  right:0px;
}
.bottom{
  border:3px green solid;
  background-color:white;
  width: 100%;
  position:fixed;

bottom:0px;
  display:flex;
flex-direction:row;
justify-content:space-around;
}
.buy{
  background-color:orange;
height:40px
}
.rank{
  width:100%
}
.body{
   width:100%;
  background-color:rgba(247,247,247,1);
}
.company{
  display:flex;
flex-direction:row;
text-align:left;
align-items:center;
}
.found{
  padding:0 30px;
  width: 100%;
  margin-left:38px;
  margin-right:24px;
  display:flex;
  height:54px;
flex-direction:row;
justify-content:space-between;
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
}
.footer{
  width:100%;
  height:114px;
  padding-top:19px;
  padding-bottom:35px;
  background-color:#F7F7F7;
}
.display_total{
  display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
}
.display_img{

height:235px;
}
.proParam{
    padding:20px 30px;
}  
.proParam_item{
 
  display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
}

.qualificat{
  display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
}
.shop_title{
  height:63px;
}
.img_text>img{
    width:18px;
height:18px;
}
.img_text>div{
  font-size:14px;
   font-weight:500;
    width: 100%;
}
.img_text{
 text-align: center;
display:flex;
flex-direction:column;



height:48px;
background:rgba(255,255,255,1);

}
.concate{
  width:73px;
height:22px;
  font-size:12px;
  background:rgba(255,222,204,1);
border-radius:5px;
}
.icon{
  width:34px;
height:34px;
}
.name{
    display:flex;
  flex-direction:row;


}
.shop{
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  height:58px;
  background-color:white;
  align-items:center;

}
.back
{
  font-weight:500;
  font-size:14px;
  color:rgba(160,162,166,1);
}
.peo{
  width:35px;
  height:35px;
}
.store{
  float:right;
  width:103px;
height:20px;
background:rgba(253,246,242,1);
border-radius:12px;
color:rgba(228,52,53,1);
}
.peoNum{
  margin:4px 13px;
  width:375px;
  height:62px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  background-color:white;
  align-items:center;
  
}
.sub_title{
 display:flex;
 flex-direction:row;
 justify-content:space-between;
  font-size:13px;
  color:rgba(160,162,166,1);
   
}
.title{
  font-size:15px;
}
.content{
  padding-top:3px;
  padding-left:18px;
background-color:white;
 
height:109px;
}
.time{
  font-size:29px;
  color:rgba(255,255,255,1);
  text-shadow:1px 1px 1px rgba(65,0,153,1);
}
.curentP{
top:11px;
margin-left:15px;
  display: flex;
   position:relative;
  flex-direction: row;
  justify-content: flex-start;
     align-items: center;
     position: absolute;

}
.right {
  text-align: center;
 position: absolute;
 top:0px;
 right: 0px;
  width: 225px;
  height: 50.9px;

}

.old_price{
  padding-top:13px;
  margin-left:16px;
height:13px;
width:59px;
text-decoration:line-through;
line-height:13px;
 font-size:9px;
font-weight:600;
color:#E40000;

   margin-bottom:6px;
}
.price{
  position:relative;
  width: 100%;
  height: 65px;
  background:linear-gradient(270deg,rgba(234,219,51,1) 0%,rgba(255,233,61,1) 100%);

}

img{
  width: 375px;
  height: 375px;
}
.font10{
  font-size:10px;
}
.grey{
  color:rgba(160,162,166,1);
}
.out{
  text-shadow:1px 1px 2px rgba(150,139,4,1);
  color:#E40200;
}
.top13{
  margin-top:13px;
}
*{
  margin:0px;
  padding:0px;
}
a {
  color: #42b983;
}
</style>
