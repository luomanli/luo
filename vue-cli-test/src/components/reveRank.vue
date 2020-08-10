<template>
  <div >
        <div class='title' >
            <img class='icon' src='../assets/logo1.jpg'/>
               <span> 收益排行榜</span>
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
    <th class='tr1'>{{index+1}}</th>
    <th class='tr2'>
      <img class='user color' src='../assets/logo1.jpg'/>
     {{i.user}}</th>
    <th></th>
    <th class='tr3'>Savings {{i.money}}</th>
  </tr>
  
</table>
           
        </div>
        <div class='more'>
           
               <span class='color' >显示更多</span>
                <img class='goIcon color' src='../assets/img/down.svg'/>

        </div>
  </div>
</template>

<script scoped>
export default {
  name: 'App',
  data(){
      return{
          c:[1
          
          
          ,2,3,4],
          data:[{
            'rank':'1',
            'user':'we',
            'money':'收益'
          },{
            'rank':'1',
            'user':'we',
            'money':'收益'
          },{
            'rank':'1',
            'user':'we',
            'money':'收益'
          },
          ]
      }
  },
  mounted(){
      
        this.data.push
  },
  methods:{

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
height:18px;

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