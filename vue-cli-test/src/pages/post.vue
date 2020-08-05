<template>
  <div class='contain'>
  
    <div class='title'>
        
        <div>
            <img  class="voice" src="../assets/logo1.jpg" alt="">
            <span class='font'>关注公号 即是接受奖励到账通知</span>
        </div>
        <div class='follow'>
            马上关注 
         </div>
    </div>
     <div class='post'>
        <div class="user">
            <img   src="../assets/logo1.jpg" alt=""/>
            <span style='color:white'>{{name}}</span>
        </div>
         <img class="QRcode" src="../assets/logo1.jpg" alt=""/>
        <div class="home">
        <img   src="../assets/logo1.jpg" alt="">
        <div @click='goHome' style='background-color:white;'>进入活动主页</div>
    </div>
    </div>
    <div class='footer'>
        恭喜您获得分销资格，请长按保存图片
        每推广一位好友下单，您立即获得  
        <span style='color:red'>0.3</span>  元收益
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'post',
  data(){
      return{
            name:'name',
            img:'',

      }
  },
  methods:{
      goHome(){
          
      }
  }
}
</script>

<style scoped>
.user{
    position:relative;
   top:29px;
    left:27px;
    text-align:left;
}
.user>img{
  
    padding:10px;
    width:30px;
    height:30px;
    background-color:white;
    vertical-align: middle;
}
.footer{
    text-align:center;
    color:white;
    margin:0 40px;
}
.home{
position:absolute;
top:50%;
bottom:0px;
left:100%;
transform:translate(-50%,50%);


}
.home>img{
     width:60px;
    height:60px;
}
.QRcode{
    position:absolute;
    bottom:28px;
    right:23px;
    width:84px;
    height:84px;
}
.contain{
    height:100%;
    width:100%;
    background-color:black;
}
.font{
background-color:white;
}
.title{
    margin:10px 30px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    height:50px;
}
.follow{
     width:90px;
    height:30px;
    background-color:blue;
    border-radius:10%;
}
.voice{
    vertical-align: middle;
  width:50px;
    height:40px;
}

.post{
       position:relative;
    margin: 0 auto;
    width:330px;
    height:641px;
    background-image:url('../assets/logo1.jpg')
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
