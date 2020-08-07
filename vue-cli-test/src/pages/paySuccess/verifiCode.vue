<template>

     <div  class="flex">
           
        <bottom></bottom>
        </div>

</template>

<script>
import bottom from  './component/bottom.vue';

export default {
  name: 'post',
  data(){
      return{
            name:'name',
            
      }
  },
 components: { bottom},

  methods:{
      goHome(){
          
      }
  }
}
</script>

<style scoped>

</style>