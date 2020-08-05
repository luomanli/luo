<template>
  <div >
        <div>
            <img class='icon' src='../assets/logo1.jpg'/>
               <span> 收益排行榜</span>
        </div>
        <div  class='colum'> 
            <div v-for='(i,index) in c' class='contain'>
                    <div class='rank'>
                        <div >1111{{index}}</div>
                    </div>
                    <div class='right'>
                        <div>
                            <img class='user' src='../assets/logo1.jpg'/>
                            <span> xxx</span>
                        </div>
                        <div>累计收益1.5元</div>
                    </div>
            </div>
        </div>
        <div class='more'>
           
               <span class='color' >more</span>
                <img class='goIcon color' src='../assets/logo1.jpg'/>

        </div>
  </div>
</template>

<script scoped>
export default {
  name: 'App',
  data(){
      return{
          c:[1,2,3,4]
      }
  },
  methods:{

  }

}
</script>

<style scoped> 
*{
    text-align:center;
}
.icon{
      width:20px;
height:18px;
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