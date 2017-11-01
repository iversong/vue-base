<template>
<div>
  <div class="preview">
    <img :src="image" class="preview__image">
  </div>

  <van-row class="orders-preview">
    <van-col v-for="(item, index) in ordersData" span="6" :key="index">
      <a :href="item.type | getOrderLink">
        <p class="orders-preview__icon-container">
          <van-icon :name="item.icon" class="orders-preview__icon"></van-icon>
          <span v-if="item.num > 0" class="orders-preview__count" v-text="item.num"></span>
        </p>
        <p class="orders-preview__title">
          {{ item.title }}
        </p>
      </a>
    </van-col>
  </van-row>

  <van-cell-group>
    <van-cell isLink :url="'' | getOrderLink">
      <van-icon name="records" class="orders-icon"></van-icon>
      全部订单
    </van-cell>
  </van-cell-group>
  <van-cell-group class="item-list">
    <van-cell isLink>
      <van-icon name="points" class="orders-icon"></van-icon>
      我的积分
    </van-cell>
    <van-cell isLink>
      <van-icon name="gift" class="orders-icon"></van-icon>
      我收到的礼物
    </van-cell>
  </van-cell-group>
</div>
</template>

<script>
import { Cell, CellGroup, Icon, Col, Row } from 'vant'
import each from 'lodash/each'
import orderConfig from '../utils/orders-config'
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [Col.name]: Col,
    [Row.name]: Row
  },
  data () {
    return {
      image: 'https://img.yzcdn.cn/upload_files/2017/07/19/Fml_7Kkd2H6pLolssY8bqoAPwyU5.png',
      orders: {
        topay: 0,
        toaccept: 0,
        tosend: 6,
        send: 0
      },
      msg: '',
      list: []
    }
  },
  created () {
    console.log(this.$http ? 'Axios works!' : 'Uh oh..')
    this.getRepository()
  },
  computed: {
    ordersData () {
      const ordersData = []
      each(this.orders, (num, status) => {
        const showConfig = orderConfig[status] || {}
        const itemData = {
          icon: showConfig.icon || '',
          title: showConfig.title || '',
          num,
          type: status
        }
        ordersData.push(itemData)
      })
      return ordersData
    }
  },
  methods: {
    getRepository () {
      let params = {
        sort: 'updated'
      }
      this.$http.get('https://api.github.com/users/iversong/repos', {params})
      // this.$http.get('https://api.github.com/user/repos', {params})
      .then(response => {
        this.list = response.data
      })
    }
  },
  filters: {
    getOrderLink (type) {
      return `/h5/trade/order/list?type=${type || 'all'}`
    }
  }
}
</script>

<style>
.preview {
  text-align: center;
}
.preview__image {
  width: 100%;
  min-height: 200px;
}
.orders-preview {
  padding: 10px 0;
  background: white;
  text-align: center;
}
.orders-preview__icon-container {
  position: relative;
}
.orders-preview__icon {
  padding: 20px 0 10px;
  font-size: 24px;
  color: #333;
}
.orders-preview__title {
  padding-bottom: 10px;
  line-height: 1.4;
  font-size: 12px;
  color: #333;
}
.orders-preview__count {
  position: absolute;
  top: 15px;
  left: 50%;
  padding: 3px 6px;
  background: red;
  transform: translate3d(5px, 0, 0);
  border-radius: 100%;
  color: white;
  font-size: 12px;
  text-align: center;
}
.orders-icon {
  margin-right: 5px;
  font-size: 20px;
}
.item-list {
  margin-top: 10px;
}
</style>