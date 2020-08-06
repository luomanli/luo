<template>
  <div class="page">
      <div class="search">
          <img src="" alt="">
          <input type="text" placeholder="搜索活动">
      </div>
      <div class="head">
          <div >线下核销</div>
          <div>全部状态</div>
      </div>

      <div class="cards" v-for="i in data">
          <img src="" alt="" class="card">
          <div class="right">
              <span>活动主题XXCXXXXX</span>
              <span>已结束</span>
              <div>这是一个活动简介这是一个活动简介这是…</div>
              <div class="price">价格:¥10.00</div>
              <span>线下核销</span>
                <span>分销</span>
          </div>
          <div class="data">
              <div v-for='i in num'>
                  <span>10</span>
                  <div>浏览量</div>
              </div>
          </div>
          <div class="footer">
              <el-button class="btn" >查看订单</el-button>
              <el-button class="btn" type="danger">查看</el-button>
          </div>
      </div>
      <div class="out_footer">
          <div class="out1">
              <img src="" alt="" class="icon">
              <span>分销活动</span>

          </div>
          <div class="out2">
              <img src="" alt="" class="icon">
              <span>商家中心</span>

          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          data:[
              1,2,3
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
          },
          ],
      }
  }
}
</script>

<style>
.out_footer{
    position: relative;
    bottom: 0px;
    display: flex;

}
.out1{
    flex: 1;
}
.out2{
    flex: 1;
}
.footer{
    float: right;
}
</style>