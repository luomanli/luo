<template>
  <div >
        <div class='title' >
            <img class='icon margin6' :src='top'/>
               <span class='font14'> 收益排行榜</span>
        </div>
        <div  class='colum'> 
            
            <table border="0" class="table">
            <thead>
                <tr class="thead">
                    <th>排名</th>
                    <th>用户</th>
                    <th class="th2"></th>
                    <th thead>收益</th>
                </tr>
            </thead>
  <tr v-for='(i,index) in data'>
    <th class='tr1' v-if="index===0">
            <img class='icon' :src='top1'/>
            

    </th>
    <th class='tr1' v-if="index===1" >
           <img class='icon' :src='top2'/>
    </th>
    <th class='tr1' v-if="index===2">
    <img class='icon' :src='top3'/></th>
    
    <th class='tr1'  v-if="index>2">{{index+1}}</th>
    <th class='tr2'>
      <img class='user color' :src='i.headImgUrl'/>
     {{i.userName}}</th>
    <th></th>
    <th class='tr3'>{{i.cashBackOrdersAllCount}}</th>
  </tr>
  
</table>
           
        </div>
        <div class='more'>
           
               <span class='color' @click="getMore" >显示更多</span>
                
                <van-icon  class='goIcon color' name="arrow-down" color="#0D93F1" />
             
               
                

        </div>
  </div>
</template>

<script scoped>
import {top,top1,top2,top3,} from  '../utils/imgUrl.js';
// vpeo
export default {
  name: 'reveRank',
  data(){
      return{
          top,top1,top2,top3,
          c:[1    
          ,2,3,4],
          data:[
          ],
          currentPage:1
      }
  },
  mounted(){
      console.log(this.vpeo)


      this.getData()
  },
  methods:{
        getMore(){

  
            this.currentPage=this.currentPage+1;
                      this.getData();
        },
        getData(){
                this.$get('/query/orderForm/rank?activityId=52&currentPage='+this.currentPage+'&pageSize=10').then(

                    res=>{
                        console.log('res.data',res.data)
                        if(res.data){
                            this.data= this.data.concat(res.data);
                        }
                    }
                )
        },
        



  }

}
</script>

<style scoped> 
.tr2{
    font-size:12px;
    color:#A0A2A6;
}
thead{
    margin-bottom:30px;
    color:rgba(58,59,60,1);
}
.thead{
    text-align:center;
    font-size:14px;
}
.th2{
    width:30%;
}
.tr1{
   color:rgba(58,59,60,1);
    width:10%;
    height:24px;
    font-size: 10px;;
    
}
.tr3{
    font-size:12px;

    color:rgba(228,52,53,1);
}
.table{
    width:100%;
}
*{
    text-align:center;
}
.center{
     text-align:center;
}
.icon{
      width:20px;
height:20px;

}
.title{
    height:48px;
    background:rgba(247,247,247,1);
        display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
}

body{
  background-color:white;
}
.goIcon{
    width:7px;
height:4px;
}
.color{
    color:rgba(13,147,241,1);
}
.more{
    margin-top:28px;
    margin-bottom:9px;
    font-size:10px;
}
.colum{
   
   
 padding:20px 30px;

}
.contain{
    display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
height:22px;
}
.user{
    width:20px;
    height:20px;
    border-radius:50%;
vertical-align:middle;;
}
.right{
    display:flex;
   width:80%;
flex-direction:row;
justify-content:space-between;
align-items:center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>