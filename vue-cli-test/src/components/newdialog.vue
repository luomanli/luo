<template>

     <div  class="dialog__wrapper flex_center" v-if="true">
           
           
              <slot></slot>
               
        
        </div>

</template>

<script>
export default {
  name: 'post',
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
.dialog__wrapper{
    position:fixed;
    top:0px;
  
    left:0px;
    bottom:0px;
    right:0px;
    background-color:rgba(0,0,0,.3);

    
}
</style>