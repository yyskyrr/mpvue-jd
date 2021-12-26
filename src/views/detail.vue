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
      <van-goods-action-button
        type="danger"
        @click="$router.push('/confirm')"
        text="立即购买"
      />
    </van-goods-action>
    <div class="text">
      <div class="price">
        <span style="color: #f2270c"
          >￥
          <span style="font-size: 24px; font-weight: bold">1099</span>.00</span
        >
        <div class="icons">
          <div class="icon">
            <img
              style="height: 20px"
              src="../assets/detail/price1.jpg"
              alt=""
            />
            <div style="font-size: 8px">降价提醒</div>
          </div>
          <div class="icon">
            <img
              style="height: 20px"
              src="../assets/detail/price2.jpg"
              alt=""
            />

            <div style="font-size: 8px">收藏</div>
          </div>
        </div>
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
        <div v-for="i in 3" :key="i">
          <img :src="require(`../assets/detail/detailinfo${i}.jpg`)" />
          <p>{{title1[i-1]}}</p>
          <p>{{title2[i-1]}}</p>
        </div>
      </div>
    </div>
    <div class="sku">
      <div class="sku_window">
        <div class="sku_choose_info">
          <h3>已选</h3>
          <span id="skuChoose1">极光蓝，8GB+128GB，官方标配，1个</span>
        </div>
      </div>
      <div class="sku_window">
        <div class="sku_choose_info">
          <h3>送至</h3>
          <span id="skuChoose1">北京朝阳区三环到四环之间</span>
        </div>
        <p class="send">
          <span id="postNotice" style="">
            <small>
              <span>现货</span>
              <b id="postTip">
                23:00前下单，预计
                <b>明天(12月27日)</b>
                送达</b
              >
            </small>
          </span>
        </p>
      </div>
    </div>

    <div class="detail">
      <div class="detail-icon"></div>
      <span> 详情</span>

      <p>
        <img style="width: 12px" src="../assets/detail/canshu.jpg" alt="" />
        规格参数
      </p>
      <div id="detParam">
        <table
          cellpadding="0"
          cellspacing="1"
          width="100%"
          border="0"
          class="Ptable param_table"
        >
          <tbody>
            <tr>
              <td>商品编号</td>
              <td>100011493273</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th class="tdTitle" colspan="2">主体</th>
            </tr>
            <tr>
              <td class="tdTitle">产品名称</td>
              <td>荣耀Play5T</td>
            </tr>
            <tr>
              <td class="tdTitle">品牌</td>
              <td>荣耀（HONOR）</td>
            </tr>
            <tr>
              <td class="tdTitle">上市年份</td>
              <td>2021年</td>
            </tr>
            <tr>
              <td class="tdTitle">上市月份</td>
              <td>6月</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="open">
        展开
        <img
          style="width: 12px; transform: translateY(3px)"
          src="../assets/detail/jiantou.jpg"
          alt=""
        />
      </div>
      <div
        style="
          width: 120%;
          border: 1px solid #f2f2f2;
          transform: translateX(-18px);
        "
      ></div>
      <p>
        <img style="width: 12px" src="../assets/detail/jieshao.jpg" alt="" />
        产品介绍
      </p>
      <img
        src="https://img30.360buyimg.com/sku/jfs/t1/195341/28/3681/201034/60a26c2fE085cea29/1607015b89942bc5.jpg"
      />
      <img
        src="https://img30.360buyimg.com/sku/jfs/t1/185193/25/4596/716856/60a26c2fE639a8565/81c7adea43848a3d.jpg"
        alt=""
      />
      <img
        src="https://img30.360buyimg.com/sku/jfs/t1/195349/32/3513/416077/60a26c2fE2bc49be7/1034c6d13fcd39dc.jpg"
        alt=""
      />
      <img
        src="https://img30.360buyimg.com/sku/jfs/t1/192806/10/3707/610361/60a26c2fE81f97a2e/06ee90515b889f49.jpg"
        alt=""
      />
      <img
        src="	https://img30.360buyimg.com/sku/jfs/t1/177933/18/4695/829428/60a26c2fEe530ec32/9ac86b74fb0763fc.jpg"
        alt=""
      />
      <img
        src="	https://img30.360buyimg.com/sku/jfs/t1/190380/11/3885/581455/60a26c2fE9f25d038/03b53f5ecf18148f.jpg"
        alt=""
      />
      <img
        src="https://img30.360buyimg.com/sku/jfs/t1/180743/12/4649/310274/60a26c2fEf4f44f70/c738fd623c3de859.jpg"
        alt=""
      />
      <img
        src="	https://img30.360buyimg.com/sku/jfs/t1/195522/37/14033/51678/60fe5315E065d40cb/de9b58a2b3d40c1e.jpg"
        alt=""
      />
      <img
        src="https://img30.360buyimg.com/sku/jfs/t1/191552/40/8866/471991/60cb26b4Ea69ea10e/c99ce3b7485488a1.jpg"
        alt=""
      />
      <p>
        <img style="width: 12px" src="../assets/detail/shouhou.jpg" alt="" />
        包装售后
      </p>
      <p>包装清单</p>
      <p class="info">
        外包装采用贴防拆标签，彩盒内标配：1)手机x1：2）电池(内置)
        x1;3)快速指南x1;4）充电器x1;5) TypeC数据线x1;6)取卡针x1;
        7)TP保护膜(出厂贴在屏幕上)x1;8)三包凭证x1： 9)TPU保护壳x1;
      </p>
      <p>售后服务</p>
      <p class="info">
        本商品质保周期为1年质保，在此时间范围内可提交维修申请，具体请以厂家服务为准。如因质量问题或故障,凭厂商维修中心或特约维修点的质量检测证明，享受7日内退货，15日内换货，15日以上在质保期内享受免费保修等三包服务!(注:如厂家在商品介绍中有售后保障的说明,则此商品按照厂家说明执行售后保障服务。)
      </p>
      <p>价格说明</p>
      <p class="info">
        1.京东价：京东价为商品的销售价，是您最终决定是否购买商品的依据。<br />
        2.划线价：商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价(如厂商指导价、建议零售价等)或该商品在京东平台上曾经展示过的销售价;由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。<br />
        3.折扣：如无特殊说明，折扣指销售商在原价、或划线价(如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价)等某—价格基础上计算出的优惠比例或优惠金额;如有疑问，您可在购买前联系销售商进行咨询。<br />
        4.异常问题：商品促销信息以商品详情页“促销”栏中的信息为准;商品的具体售价以订单结算页价格为准;如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。<br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title1:['上市时间','屏幕尺寸','双卡机类型'],
      title2:['2021年6月','6.5英寸','双卡双待'],
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
  background: #f2f2f2;
}
.van-cell-group {
  margin-top: 20px;
}
.my-swipe {
  background: white;
  border-radius: 0;
  margin: 0;
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
.sku,
.detail {
  margin-top: 12px;
  padding: 0 18px;
  border-radius: 12px;
  background-color: #fff;
  overflow: hidden;
}
#postNotice {
  span {
    color: #f2270c;
  }
}
.send {
  padding-left: 38px;
  margin: 0;
}
.sku_window {
  border-bottom: 1px solid #f7f7f7;
  background: #fff;
  padding: 18px 0;
  position: relative;
  font-size: 13px;
  color: #8c8c8c;
  .sku_choose_info {
    position: relative;
    padding: 0 40px 0 38px;

    h3 {
      position: absolute;
      margin: 0;
      top: 50%;
      left: 0;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      width: 35px;
      color: #262626;
      font-weight: 500;
    }
    span {
      font-size: 13px;
      color: #333;
      line-height: 22px;
    }
  }
}
.sku_window:after {
  content: "";
  position: absolute;
  top: 20px;
  right: 10px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url(../assets/detail/select.png);
  background-repeat: no-repeat;
  background-size: 20px;
}
.text {
  background: white;
  padding: 18px;
  .price {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .icons {
      display: flex;
      .icon {
        margin-right: 10px;
        text-align: center;
      }
    }
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
    width: 100%;
    display: flex;
    div {
      box-sizing: border-box;
      padding: 12px 12px 0 12px;
      width: 33%;
      text-align: center;
      p{
        font-size: 14px;
        margin: 2px;
      }
      p:last-child{
        font-size: 10px;
      }
      img {
        height:'50px'
      }
    }
  }
}
.detail {
  padding: 18px;
  .detail-icon {
    display: inline-block;
    width: 3px;
    position: relative;
    top: 8px;
    content: "213";
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    height: 15px;
    background-image: linear-gradient(180deg, #f5503a, #fad1cb);
  }
}
.open {
  text-align: center;
  font-size: 14px;
  margin-bottom: 12px;
}
table {
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
}
.param_table {
  color: #666;
  border: 1px solid grey;
  width: 100%;
  margin-bottom: 10px;
  border-collapse: collapse;
  font-size: 12px;
  border-spacing: 0;
  line-height: 18px;
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
      td,
      th {
        padding: 8px;
        border: 1px solid #dadada;
        text-align: left;
      }
    }
  }
}
.detail > img {
  width: 100%;
}
.info {
  font-size: 14px;
  color: #8c8c8c;
}
</style>
