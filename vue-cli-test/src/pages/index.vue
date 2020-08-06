  <template>
  <div class="body">
  <div>
    <img src='../assets/logo1.jpg'/>
    </div>
    <div class="price">
        <div class="old_price">原价:1788{{activityMsg.originalPrice}}</div>
        <div class='curentP'>
            <div style="font-size:12px;color:#E40000;width:48px;
            height:100%;left:30px;bottom:0px">限时特价</div>
            <span  style="color:red;font-size:21px;">￥</span>
            <div class='out' style="font-size:39px;width:100px;
            height:54px;">
            1288{{activityMsg.activityPrice}}
            </div>
        </div>

        <div class="right flex_column">
          <div style='font-size:10px;line-height:14px;'>距离活动结束</div>
          <div class='time'>time</div>
        </div>
    </div>
    <div class="content">
      <div class="title">
      {{activityMsg.activityTitle}}
      
        演示活动:电脑端点击推广按钮,在手机上预览活动xxxx预览活动
      </div>
      <div class="sub_title">
        <span>演示活动:活动副标题{{activityMsg.activityTitle}}</span>
       <img class="custSer" src="../assets/logo1.jpg" alt="" v-if='activityMsg.selectCs'>

      </div>
    <div>
        <span class='store'>剩余库存:12{{activityMsg.activityStock}}</span>
      </div>
  
    </div>

    <div class="peoNum"> 
     <img class="peo" src="../assets/logo1.jpg" alt="">
     <img class="peo" src="../assets/logo1.jpg" alt="">
     <img class="peo" src="../assets/logo1.jpg" alt="">
     <div class="more">
        <div class='one'>1</div>
            <div class='one buyer'>1</div>
            <div class='one buyer1'>1</div>    
            <div class='one buyer2'>1
            <span class='status-point'></span>
            <span class='status-point'></span>
            <span class='status-point'></span>
            </div>

      </div>
      <div class="back">
       {{activityMsg.virtualQuantity}}12人已购买
      </div>
      <div class="">
        <img style='width:6px;height:10.8px' src="../assets/logo1.jpg" alt="">
      </div>
    </div>
    <div class="shop">       
        <div class="name">
          <img class="icon" src="../assets/logo1.jpg" alt="">
          <div class="center">
            <div style="font-size:14px;" >小米自营旗舰店{{activityMsg.uname}}</div>
            <div style="font-size:10px;">该商家很懒,还没有完成基础设置</div>
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
        <div class="ql-editor" v-html="ContentData"></div>
  
      </div>
      
   
      <reveRank class='rank'></reveRank>
        <div class="footer">
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

    <el-dialog
  
    :visible.sync='flag'
    width="60%"
      >
      <company  ></company>
    </el-dialog>

   <nopay :flag="false"></nopay>
  <div class='bottom'>
    <div>原价
    <span style='text-decoration:line-through;'>:1788</span>
    <div>限时特价  ￥12.88</div>
    </div>
    
      <div class='buy'>立即购买</div>
  </div>
 
  </div>
  
</template>

<script>
import reveRank from  '../components/reveRank.vue';
import company from  '../components/company.vue';
import nopay from  '../components/nopay.vue';
export default {
  name: 'H3',
  data () {
    return {
      flag:false,
      msg: 'Welcome to Your Vue.js App',
      v1:'',
      v2:'wewr',
      c:[1,2,3,4],
      proParam:'',
      activityMsg:{},
      forms:{},
      posters:{},
      ContentData: '<p><img src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAkACQAAD/4QB0RXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAACQAAAAAQAAAJAAAAABAAKgAgAEAAAAAQAAANagAwAEAAAAAQAAANYAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAiBJQ0NfUFJPRklMRQABAQAAAhBhcHBsBAAAAG1udHJSR0IgWFlaIAfkAAYAHgAIADoAHmFjc3BBUFBMAAAAAEFQUEwAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtYXBwbNypxmSUwO/VhVWV1rKv7lMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAZGNwcnQAAAFgAAAAI3d0cHQAAAGEAAAAFHJYWVoAAAGYAAAAFGdYWVoAAAGsAAAAFGJYWVoAAAHAAAAAFHJUUkMAAAHUAAAAEGNoYWQAAAHkAAAALGJUUkMAAAHUAAAAEGdUUkMAAAHUAAAAEGRlc2MAAAAAAAAACkxHIEhEUiA0SwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDIwAABYWVogAAAAAAAA8xYAAQAAAAEWylhZWiAAAAAAAAB51wAAOFEAAABcWFlaIAAAAAAAAFTZAAC6UAAAC5tYWVogAAAAAAAAKCYAAA1gAADHNXBhcmEAAAAAAAAAAAAB9gRzZjMyAAAAAAABDHIAAAX4///zHQAAB7oAAP1y///7nf///aQAAAPZAADAcf/AABEIANYA1gMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAICAgICAgMCAgMFAwMDBQYFBQUFBggGBgYGBggKCAgICAgICgoKCgoKCgoMDAwMDAwODg4ODg8PDw8PDw8PDw//2wBDAQICAgQEBAcEBAcQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/3QAEAA7/2gAMAwEAAhEDEQA/APw/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0Pw/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0fw/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0vw/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0/w/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1Pw/ooooAKKKKACiiigAooooAKKKKACiiigAor2X4Z/CO+8eP9omm+yWQ6yEZ/SvaYf2dPBUjFJPFMaEdflH+NfOY/irBYeo6VSTut7Jv8j7TL/D/NMTh44mnTtCWzbSv6XZ8Y0V9xz/ALK+j3ujXd94X19L+6tV3eWqgZxye9fFWpQSW19NbyrtaJipH+6cV0ZRxDhcc5LDyu473TTXyZ5OdcNYvL+X6zG3NtZpp/NFGiiivbPBCiiigAooooAKKKKACiiigAooooA//9X8P6KKKACiiigAooooAKKKKACiiigAooooA+xPhPdvB8PLkIcHY3T8a+Tbu/vftcxFxIPnb+M+v1r6R+EWqadeeH5fD7TiO4dSMH3rHb4D3dxPI4v1AZieg7mvhsFi6GExeIeIduZ3V0f0FxDw1js2yfLZ5bHnUINSs1o9NHqd/wDso6jci+1oSzO4MR4Zif4T618q+KjnxBfH/pq//oRr7V+F3giD4X2up6vql+rJJGR29CK+INcuUu9Xu7iPlXkYj86OH6tOtmWKr0dYtRV/S58hxplNfA5TgsNi1y1E5tq+trqxk0UUV9yflgUUUUAFFFFABRRRQAUUUUAFFFFAH//W/D+iiigAooooAKKKKACiiigAooooAKKKKAL+n6ne6XcC6sZDHIvQiunHxD8WA5F635VxNFYVcLSm7zin8j0sJnOLw8eShVlFdk2jsL7x54o1G0ayu7xnhfqK48nJyaKKqjh4U1aEUvQwxePr4iXNXm5PzdwooorU5AooooAKKKKACiiigAooooAKKKKAP//X/D+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Q/D+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//R/D+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//S/D+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//T/D+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//U/D+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z"/>频、超链接等，支持富文本编辑。实时手机版效果预览，请看PC编辑器右边。</p>',
      
    }
  },
  mounted(){
   this.getdata();
  },
 components: { reveRank ,company,nopay},
  methods:{
    getdata(){
      console.log('123333'+this.axios)
      this.$axios.get('/activity/selectById?id=58').then(
      
        response => (console.log('123:'+response))

      )
    },
    goComp(){
      this.flag=true
    },
   goNotic(){
     this.$router.push({name:'transNotic'})
   },
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
.buyer1{
  position:absolute;

  -webkit-transform: translate(-40%);
}
.buyer2{
  position:absolute;

  -webkit-transform: translate(-10%);
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
align-items:center;
}
.buy{
  width:120px;
  text-align:center;
  background-color:orange;
  height:32px;
  border-radius:8%;
  line-height:32px;
}
.rank{
  width:100%
}
.body{
   width:100%;
  background-color:rgba(247,247,247,1);
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
  text-align:center;
  width:73px;
  height:22px;
  line-height:22px;
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
  margin:4px 0px;
  padding-left:23px;
   padding-right:22px;
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
  border-radius:50%;
}
.store{
      text-align: center;
  float:right;
  width:103px;
height:20px;
font-size:12px;
background:rgba(253,246,242,1);
border-radius:12px;
color:rgba(228,52,53,1);
}
.peoNum>span{
  margin:0;
  padding:0;

}
.status-point {
  position:absolute;
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color:red;
}
.peoNum{
  padding:0px 13px;
  margin:4px 0px;
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
.flex_column{
   display: flex;
  flex-direction: column;
 justify-content: space-around;
     align-items: center;
    
}
.right {
  text-align: center;
 position: absolute;
 top:0px;
 right: 0px;
  width: 225px;
  height: 50.9px;
 
  background-image:url('../assets/img/bg1.png');
      background-size: 225px 51px;
    background-repeat:repeat-x;

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
  font-size:10px;
}

.color{
    color:rgba(13,147,241,1);
}
a {
  color: #42b983;
}
</style>
