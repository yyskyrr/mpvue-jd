<template>
  <div class="main">
    <div class="header">
      <van-search
        shape="round"
        background="#d53221"
        placeholder="请输入搜索关键词"
        show-action
      >
        <template #left-icon>
          <img src="..\assets\index\search.jpg" alt="" />
        </template>
        <template #right-icon>
          <img src="..\assets\index\camera.jpg" alt="" />
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
        <div v-for="i in 10" :key="i">
          <img :src="require(`../assets/index/${i}.jpg`)" />
          <span>{{ titleList[i] }}</span>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div v-for="i in 10" :key="i">
          <img :src="require(`../assets/index/${i + 10}.jpg`)" />
          <span>{{ titleList[i + 10] }}</span>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div v-for="i in 10" :key="i">
          <img :src="require(`../assets/index/${i + 20}.jpg`)" />
          <span>{{ titleList[i + 20] }}</span>
        </div>
      </van-swipe-item>
    </van-swipe>
    <div class="middle-card">
      <img src="../assets/index/middle.jpg" alt="" />
    </div>
    <div class="top-card">
      <van-cell title="京东秒杀" is-link value="更多好货限时疯抢" />
      <div class="top">
        <div class="top-content">
          <div v-for="i in 7" :key="i">
            <img
              style="height: 80px"
              :src="require(`../assets/index/top${i}.jpg`)"
            />
            <span>￥{{ priceList[i - 1] }}</span>
          </div>
        </div>
      </div>
      <div class="middle">
        <div v-for="i in 4" :key="i">
          <div>{{ bookList[i - 1].title1 }}</div>
          <span
            style="font-size: 10px"
            :style="'color:' + bookList[i - 1].color"
            >{{ bookList[i - 1].title2 }}</span
          >
          <img :src="require(`../assets/index/middle${i}.jpg`)" />
        </div>
      </div>
      <div class="bottom">
        <div class="card">
          <div v-for="i in 2" :key="i">
            <div>{{ cardList[i - 1] }}</div>

            <img :src="require(`../assets/index/bottom${i}.jpg`)" />
          </div>
        </div>
        <div class="card">
          <div v-for="i in 2" :key="i">
            <div>{{ cardList[i + 1] }}</div>
            <img :src="require(`../assets/index/bottom${i + 2}.jpg`)" />
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-card">
      <div class="card-item">
        <img
          @click="$router.push('/detail')"
          src="../assets/index/bottom-card1.jpg"
          alt=""
        />
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
export default {
  data() {
    return {
      bookList: [
        {
          title1: "品牌闪购",
          title2: "汇大牌好价",
          color: "#683af0",
        },
        {
          title1: "排行榜",
          title2: "跟榜购好物",
          color: "#ff2342",
        },
        {
          title1: "品牌闪购",
          title2: "9块9疯抢",
          color: "#fd5812",
        },
        {
          title1: "品牌闪购",
          title2: "全网抢先购",
          color: "#4685f6",
        },
      ],
      priceList: [7449, 10969, 12699, 299, 1679, 699, 580, 29.9],
      cardList: ["京东超市", "居家嗨购", "京东直播",'主播力荐'],
      titleList: [
        "",
        "京东超市",
        "京东家电",
        "京东服饰",
        "京东手机",
        "低价爆款",
        "1元疯抢",
        "领京豆",
        "领优惠券",
        "免费水果",
        "充值中心",
        "京东国际",
        "视频号",
        "潮燃青年",
        "拍拍二手",
        "沃尔玛",
        "京东电器",
        "排行榜",
        "京东生鲜",
        "京东到家",
        "领现金",
        "京东特价",
        "女装",
        "电脑",
        "寄件服务",
        "新品首发",
        "京东试用",
        "京东图书",
        "发现好货",
        "京东家居",
        "装修定制",
      ],
    };
  },
};
</script>

<style lang="less">
.top-content {
  div {
    text-align: center;
    color: #f2270c;
    span {
      display: inline-block;
      margin: 5px 0;
    }
  }
}
.van-field__right-icon {
  img {
    margin-right: 5px;
    width: 20px;
    transform: translateY(15%);
  }
}
.van-field__left-icon {
  img {
    margin-right: 5px;
    width: 14px;
    transform: translateY(15%);
  }
}
.van-tabs__line {
  background-color: white;
}
.main {
  background: #f4f4f4;
  .header {
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
.my-swipe-item .van-swipe-item {
  display: flex;
  flex-wrap: wrap;
  div {
    box-sizing: border-box;
    padding: 5px;
    position: relative;
    width: 20%;
    text-align: center;
  }
  img {
    height: 60px;
  }
  span {
    position: relative;
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

  .top {
    .top-content {
      display: flex;
      overflow: auto;
    }
  }
  .middle {
    display: flex;
    img {
      height: 80px;
    }
  }
  .bottom {
    display: flex;
    width: 100%;
    .card {
      display: flex;
      img {
        width: 100%;
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