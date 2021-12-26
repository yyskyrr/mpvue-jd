<template>
  <div class="main">
    <van-swipe
      @change="onChange"
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item v-for="i in 6" :key="i">
        <div>
          <img :src="require(`../assets/detail/phone${i}.jpg`)" />
        </div>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/4</div>
      </template>
    </van-swipe>
    <van-goods-action>
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" @click="$router.push('/confirm')" text="立即购买" />
    </van-goods-action>
    <div class="text">
      <div class="price">
        <span style="color: red">￥1099.00</span>
        <img style="height: 40px" src="../assets/detail/price.jpg" alt="" />
      </div>
      <div class="check">
        <span>
          <span
            style="
              color: red;
              background: #fcedeb;
              padding: 2px 5px 2px 5px;
              margin-right: 10px;
            "
            >赠品</span
          >
          <span
            style="color: red; background: #fcedeb; padding: 2px 5px 2px 5px"
            >优惠套装</span
          >
        </span>
        <span style="color: red">查看 > </span>
      </div>
      <div class="title">
        荣耀Play5T 22.5W超级快充5000mAh大电池6.5英寸护眼屏全网通8GB+128GB钛空银
      </div>
      <div class="info">
        【限时优惠100元】销量榜单明星产品，配备22.5W超级快充~
      </div>
      <div class="detailinfo">
        <img
          v-for="i in 3"
          :key="i"
          :src="require(`../assets/detail/detailinfo${i}.jpg`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  height: calc(100vh - 50px);
  overflow: auto;
  background: white;
}
.my-swipe {
  height: 355px;
  img {
    height: 100%;
  }
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.text {
  padding: 20px;
  .price {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .check {
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .title {
    margin-bottom: 10px;
  }
  .info {
    font-size: 10px;
    color: #999999;
  }
  .detailinfo {
    img {
      width: 33%;
    }
  }
}
</style>
