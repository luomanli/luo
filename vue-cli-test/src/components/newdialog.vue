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
    right:0px;
    left:0px;
    bottom:0px;
    right:0px;
    z-index:2001;
    background-color:rgba(0,0,0,.3);
  
    overflow: auto;
    margin: 0;

    
}
.dialog_body{
   
    background-color:white;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
}
</style>