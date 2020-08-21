
<template>

     <div  class="" >
     

     post
           
    </div>

</template>

<script>
import qs from'qs'
export default {
  name: 'post1',
  data(){
      return{
            name:'name',
            ContentData:"",
            time:'2647823492',
            codeopenId:"",
            openId:"",
      }
  },
  mounted(){
      this.open()
       
        // var str0 = "2020/8/15 22:00:00";
        // var str1 = "2020/8/14 10:00:00";
        // this.countTime(str0,str1)
  },
  methods:{
             open(){
                   let  beginCode=""
                 this.openId = this.$route.query.id;
                 beginCode = this.$route.query.beginCode;

                // code="sdfs"
                   alert("openId"+this.openId)
                console.log("code==",this.openId)
               
                     if(!this.openId || !beginCode){
                        this.$router.push({
                            name:"user",                      
                            })
                    }else{ 
                            alert("openId"+this.openId)
                    }
              
             },

          getUser(){
            
              this.$post('weChat/record/userInfo?code='+this.code,{}).then((data)=>{
                    this.openId=data.data

                      console.log('11111'+data)                 
                  })

                },
         
    
  }
}
</script>

<style scoped>
.van-count-down {
    color:red;
    font-size:20px;
}


</style>