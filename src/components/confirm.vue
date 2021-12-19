<template>
  <div class="main">
    <van-nav-bar title="确认订单" left-arrow />

    <van-cell center is-link>
      <template #title>
        <van-tag style="margin-right: 10px" type="danger">默认</van-tag>
        <van-tag style="margin-right: 10px" type="primary">家</van-tag>
        <span class="custom-title">浙江省杭州市滨江区</span>
        <div>兴五路华盛顿小区</div>
        <div>张三 188****1951</div>
      </template>
    </van-cell>

    <div class="top">
      <div class="jd">
        <van-cell title="JD 京东自营" />
      </div>
      <div class="phone">
        <img src="../assets/confirm/phone.jpg" alt="" />
        <div class="text">
          <div class="titel">荣耀Play5T 22.5W超级快充5000mAh</div>
          <div class="info">钛空银|8GB+128GB</div>
          <van-cell title="￥1099.00" size="large" value="0.420kgx1" />
          <van-tag plain type="danger">7天无理由退货[合约版不支持]</van-tag>
        </div>
      </div>
      <div class="info">
        <van-cell size="large">
          <template>
            <div class="van-ellipsis">
              [赠品]中国移动首充享120话费月享专属流量30G月租19(需×1
            </div>
          </template>
        </van-cell>
      </div>
      <div class="express">
        <van-cell title="配送" is-link size="large">
          <template>
            <div>京东快递</div>
            <div style="white-space: nowrap; overflow: visible !important">
              12月20日[周一]09:00-15:00
            </div>
          </template>
        </van-cell>
      </div>
    </div>
    <div class="content">
      <van-cell-group>
        <van-cell title="商品金额" size="large" value="￥1099.00" />
        <van-cell title="运费(总重:0.420kg)" size="large" value="￥0.00" />
        <van-cell title="优惠券" is-link size="large" value="无可用" />
        <van-cell title="京豆" size="large" value="共482，满500可用" />
        <van-cell
          title="礼品卡(京东卡/E卡)"
          is-link
          size="large"
          value="无可用"
        />
      </van-cell-group>

      <van-cell-group>
        <van-cell
          title="发票"
          size="large"
          is-link
          value="电子(商品明细-个人)"
        />
        <van-cell title="支付方式" is-link size="large" value="在线支付" />
      </van-cell-group>
    </div>

    <van-submit-bar
      label=" "
      text-align="left"
      :price="109900"
      button-text="提交订单"
    >
      <template class="mybutton" #button>
        <van-button round color="#ffb600">帮我付</van-button>
        <van-button round type="danger">自己付</van-button>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main {
  height: calc(100vh - 50px);
  overflow: auto;
  background: #f5f5f5;
}
.top {
  margin-top: 10px;
}
.van-button--normal {
  padding: 0 25px;
  margin-right: 10px;
}
.content {
  .van-cell-group {
    margin: 10px 0 10px 0;
  }
}
.phone {
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
      width: 67%;

    .titel {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
    }
    .van-cell {
      color: red;
      margin: 10px 0 10px 0;
      padding: 0;
    }
    .info {
      color: #808080;
      font-size: 10px;
    }
  }
}
</style>