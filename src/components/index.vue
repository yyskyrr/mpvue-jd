<template>
  <div class="main">
    <div class="header">
      <van-search
        shape="round"
        background="#d53221"
        placeholder="请输入搜索关键词"
        show-action
      >
        <template #right-icon>
          <div>
            <img src="..\assets\index\camera.jpg" alt="" />
          </div>
        </template>
        <template #action>
          <img src="..\assets\index\huiben.jpg" alt="" />
        </template>
      </van-search>
      <van-tabs>
        <van-tab title="首页"></van-tab>
        <van-tab title="补贴爆品"></van-tab>
        <van-tab title="拍拍二手"></van-tab>
        <van-tab title="奢侈品"></van-tab>
        <van-tab title="大家电"></van-tab>
        <van-tab title="手机"></van-tab>
      </van-tabs>
    </div>

    <div
      style="background: #d53221; height: 75px; position: absolute; width: 100%"
    ></div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="..\assets\index\ad.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="..\assets\index\ad1.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="..\assets\index\ad2.jpg" alt="" />
      </van-swipe-item>
    </van-swipe>

    <van-swipe class="my-swipe-item" indicator-color="black">
      <van-swipe-item>
        <div>
          <img v-for="i in 10" :key="i" :src="require(`../assets/index/${i}.jpg`)" />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <img
            v-for="i in 10"
            :key="i"
            :src="require(`../assets/index/${i + 10}.jpg`)"
          />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <img
            v-for="i in 10"
            :key="i"
            :src="require(`../assets/index/${i + 20}.jpg`)"
          />
        </div>
      </van-swipe-item>
    </van-swipe>
    <div class="top-card">
      <div class="top">
        <div class="top-header">
          <span>京东秒杀</span>
          <span> 更多好货限时疯抢 > </span>
        </div>
        <div class="top-content">
          <img
            v-for="i in 7"
            :key="i"
            :src="require(`../assets/index/top${i}.jpg`)"
          />
        </div>
      </div>
      <div class="middle">
        <img
          v-for="i in 4"
          :key="i"
          :src="require(`../assets/index/middle${i}.jpg`)"
        />
      </div>
      <div class="bottom">
        <div class="bottom-header">
          <span>东家小院</span>
          <span>京东直播</span>
        </div>
        <div class="bottom-content">
          <img
            v-for="i in 4"
            :key="i"
            :src="require(`../assets/index/bottom${i}.jpg`)"
          />
        </div>
      </div>
    </div>
    <div class="middle-card">
      <img src="../assets/index/middle.jpg" alt="" />
    </div>
    <div class="bottom-card">
      <div class="card-item">
        <img src="../assets/index/bottom-card1.jpg" alt="" />
        <div class="text">
          <div class="van-multi-ellipsis--l2">
            vivo iQOO Neo5 SE 新上市 热血酷玩 【12月20日】
          </div>
          <div class="price">￥9999.00</div>
          <div class="Praise">
            <div>100%好评率</div>
            <div>...</div>
          </div>
        </div>
      </div>
      <div class="card-item">
        <img src="../assets/index/bottom-card2.jpg" alt="" />
        <div class="text">
          <div class="van-multi-ellipsis--l2">
            寻味君 广西皇帝柑 贡柑 新鲜水果桔橘子 精选9
          </div>
          <div class="price">￥36.80</div>
          <div class="Praise">
            <div>93.4%好评率</div>
            <div>...</div>
          </div>
        </div>
      </div>
      <div class="card-item">
        <img src="../assets/index/bottom-card3.jpg" alt="" />
        <div class="text">
          <div class="van-multi-ellipsis--l2">
            京东超市SK-II安迪沃霍尔圣诞限定版(红)神仙水2
          </div>
          <div class="price">￥1540.00</div>
          <div class="Praise">
            <div>2万+条评论</div>
            <div>...</div>
          </div>
        </div>
      </div>
      <div class="card-item">
        <img src="../assets/index/bottom-card4.jpg" alt="" />
        <div class="text">
          <div class="van-multi-ellipsis--l2">
            集南鲜江西赣南脐橙当季新鲜橙子大果手剥橙.
          </div>
          <div class="price">￥46.90</div>
          <div class="Praise">
            <div>10万+条评论</div>
            <div>...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.main {
  background: #f4f4f4;
  .header{
      position: sticky;
      top: 0;
      z-index: 999;
  }
}
.my-swipe {
  margin: 10px;
  height: 150px;
  border-radius: 20px;
  text-align: center;
  img {
    width: 100%;
    height: 150px;
  }
}
.my-swipe-item .van-swipe-item div {
  display: flex;
  flex-wrap: wrap;
  img {
    height: 80px;
    width: 50px;
    flex: 0 0 20%;
    box-sizing: border-box;
    padding: 5px;
  }
}
.van-tabs__nav {
  background: #d53221 !important;
}
.van-tab {
  color: white !important;
}
.top-card {
  flex-direction: column;
  height: 420;
  background: white;
  display: flex;
  margin: 10px;
  border-radius: 15px;
  padding: 10px;
  div {
    flex: 0 0 33%;
  }
  .top {
    .top-header {
      display: flex;
      justify-content: space-between;
    }
    .top-content {
      display: flex;
      overflow: auto;
    }
  }
  .middle {
    display: flex;
    img {
      width: 25%;
    }
  }
  .bottom {
    .bottom-header {
      display: flex;
      justify-content: space-between;
    }
    .bottom-content {
      display: flex;
      img {
        width: 25%;
      }
    }
  }
}
.middle-card {
  margin: 10px;
  border-radius: 20px;
  img {
    width: 100%;
  }
}
.bottom-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .card-item {
    margin-bottom: 10px;
    background-color: white;
    box-sizing: border-box;
    border-radius: 10px;
    flex: 0 0 45%;
    img {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
    .text {
      padding: 10px;
      .price {
        color: red;
      }
      .Praise {
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        color: #999999;
      }
    }
  }
}
</style>