<template>

     <div  class="flex-center contain" >
           
           
        <div  class="home font15" v-html="ContentData">                  
            <div >买家购买须知</div>   
        </div>     
        <div  class="" >
          
        </div>  
    </div>

</template>

<script>
export default {
  name: 'post',
  data(){
      return{
            name:'name',
            ContentData:"",
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

.right{
flex:2
}
.home{
  color:white;
  height:44px;
background:rgba(44,44,45,1);
}



</style>