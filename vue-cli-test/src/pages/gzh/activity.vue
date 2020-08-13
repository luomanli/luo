<template>
  <div class="page" @touchmove="scroll">
    <div class="head">
      <div class="search">       
         <van-search class="search_input" shape="round" v-model="value" placeholder="搜索活动" 
         input-align="left"
          />
      </div>
        <van-dropdown-menu >
            <van-dropdown-item :title="title1"   @change="getChange1" v-model="value1" :options="option1" />
            <van-dropdown-item  :title="title2"   @change="getChange2"  v-model="value2" :options="option2" />
        </van-dropdown-menu>

      <!--<div class="head_content flex">
            
          <div class="half font15" :class="[active?'active':'noactive']">线下核销<div></div></div>
          <div class="half font15" :class="[active?'noactive':'active']">全部状态</div>
      </div>-->
    </div>
      <div class="cards" v-for="i in data">
        <div class="intro flex-around">
          <img   src="" alt="" class="card"/>
          <div class="">
              <span class="font15">活动主题:{{activityMsg.activityTitle}}</span>
              <span class="tip_status font10">已结束{{activityMsg.activityStatus}}</span>
              <div class="font10_grey">这是一个活动简介{{activityMsg.activitySubheading}}</div>
              <div class="font13 tip">
                <span class="price font13">价格:¥10.00 {{activityMsg.activityPrice}}</span>
                <span class="font10">线下核销</span>
                <span class="font10">分销</span>
                </div>

             
          </div>
        </div>
          <div class="data flex-around">
              <div v-for='i in num' class="flex-col-center">
                  <span class="font12">10{{num.num}}</span>
                  <div class="font12">浏览量</div>
              </div>
          </div>
          <div class="footer">
          
              <div class="btn font10_grey" :class="[btnActive?'btn_active':'btn_noactive']" @click="order" >查看订单</div>
              <div class="btn font10_grey" @click="user" >查看用户</div>
               <div class="btn font10_grey" @click="close" >关闭活动</div>
             
          </div>
      </div>
      <div class="out_footer flex_center font15">
          <div class="out1 half">
              <img  class="icon" src="./../../assets/img/icon/outMoney.png" alt="" >
              <span >分销活动</span>

          </div>
          <div class="out2 half">
              <img  class="icon1" src="./../../assets/img/icon/busi.png" alt="" >
              <span >商家中心</span>

          </div>
      </div>
  </div>
</template>

<script>

export default {
  data(){
      return{
          value:'',
          input2:'',
          active:true,
          btnActive:true,
          data:[
              1,2,3,4
          ],
          num:[
              {
              num:10,
              name:'dgsyh'
          },
            {
              num:10,
              name:'dgsyh'
          },
            {
              num:10,
              name:'dgsyh'
          }
          ],
          option1:[
               { text: '自定义', value: 0 },
        { text: '线下核销', value: 1 },
        { text: '跳转连接', value: 2 },
        { text: '兑换码', value: 3 },

          ],
        title1:'线下核销',
        title2:'全局',
          value1:'1',
              option2:[
               { text: '自定义', value: 0 },
        { text: '核销码', value: 1 },
       

          ],
          value2:'2',
          activityMsg:{},

      }

  },
  mounted(){
      this.getData();
  },
  methods:{

    getData(){
        let data={
            pageSize:3,
            activityName:'',
            type:'',
            status:'',

        }
      console.log('123333'+this.axios)
      this.$post('/WeChat/searchByCategory',
      data
      
      ).then(
      
        response => 
        {
          console.log('123:',response)
          this.activityMsg=response.data.activityMsg
          
        }

      )
    },

    close(){
 
        
      console.log('123333')
      this.$get('/Wechat/close').then(
      
        response => 
        {
          console.log('123:',response)
         
          
        }

      )
    },

      move(data){
        console.log('data',data)
      },
      
      scroll(data){
       alert('scrolldata',data)
      },

      order(){
            this.$router.push({name:'activityOrder'})
      },
      user(){
            this.$router.push({name:'activityUser'})

      },
      getChange1(){
            this.option1.map(item=>{
             if(item.value==this.value1){
                  this.title1=this.option1.text
             }
            })
           

      },
      getChange2(){
              this.option2.map(item=>{
             if(item.value==this.value2){
                  this.title2=this.option2.text
             }
            })
            this.title2=this.value2
      }

  }

}
</script>

<style scoped>
.tip_status{
  width:46px;
height:18px;
background:rgba(246,246,246,1);
border-radius:2px;
color:rgba(160,162,166,1);
margin-left:18px;
}
.icon{
  width:27px;
  height:21px;
  vertical-align:middle;
}
.icon1{
  width:25px;
  height:25px;
  vertical-align:middle;

}
/* input,el-input{
    outline: none;
    border: none;
    padding:0
}
el-input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 100px white inset;
        -webkit-text-fill-color: #333;              
}
input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 100px white inset;
        -webkit-text-fill-color: #333;              
}
 
#inputBT:focus { border: 1px solid red; }
*:focus{
    outline:none;
}

input{
outline: none; 
-webkit-appearance: button; 
-webkit-appearance: none; 
border-radius: 0; 
} */
.tip{
    margin-top:7px;
}
.price{
   color:rgba(228,51,52,1); 
}
.btn_active{
background:rgba(253,82,79,1);
color:rgba(255,255,255,1);
}
.btn_noactive{
background:rgba(255,255,255,1);
color:rgba(253,82,79,1);
}
.active{
    color:rgba(253,82,79,1);
}
.noactive{
    color:rgba(160,162,166,1);
}
.search_input{
    margin:0px;
    border-color: white;
    color: rgba(246,246,246,1);
    padding:0px;
  margin:0 auto;
  border-size:0px;
  font-size:10px;
    width:308px;
    height:30px;
    background:rgba(246,246,246,1);
    border-radius:15px;
}
.search{
   text-align:center;
    margin:0 auto;
     background:rgba(255,255,255,1);
      padding-top:10px;
       padding-bottom:28px;
}
.head{
    height:97px; 
}
.head_content{
     background:white;
    height:21px;
    text-align:center;
    padding-bottom:11px;
}
.intro{
margin-bottom:20px;
}
.cards{
  
    background:white;
    width:343px;
    height:190px;
    margin:12px auto;
}
.out_footer{
    position:fixed;
    text-align:center;
    width:100%;
   
    bottom: 0px;
    background:white;
    height:49px;
   

}
.card{
   width:62px;
    height:62px;
    border-radius:6px;
    
}
.btn{
    display:inline-block;
    width:66px;
    height:22px;
    border-radius:11px;
    border:1px solid rgba(253,82,79,1);
    text-align:center;
    font-size:10px;
    line-height:22px;
    margin-top:20px;
    margin-right:12px;
}

.page{
    position:absolute;
    background:rgba(247,247,247,1);
    width:100%;
    height:100%;
}
.footer{
    float: right;
}
</style>