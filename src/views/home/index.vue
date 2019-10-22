<template>
  <div class="home">
    <van-nav-bar title="首页" fixed/>
    <div class="mytabs">
      <van-tabs>
        <van-tab v-for="(item,index) in channelList" :key="index" :title="item.name">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <van-cell v-for="item in list" :key="item" :title="item" />
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
      <div class="icon">
        <van-icon name="wap-nav" />
      </div>
    </div>
  </div>
</template>

<script>
import { apiGetChannelList } from '@/api/channel'
export default {
  data () {
    return {
      list: [],
      channelList: [],
      loading: false,
      isLoading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      this.list = [...this.list, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      if (this.list.length >= 100) {
        this.finished = true
      }
      console.log('onload')
      this.loading = false
    },
    onRefresh () {
      this.finished = false
      this.list = []
      this.onLoad()
      this.isLoading = false
    },
    async getChannelList () {
      try {
        let res = await apiGetChannelList(this.$http, {
          url: '/user/channels',
          method: 'get'
        })
        console.log(res)
        this.channelList = res.channels
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    this.getChannelList()
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar.van-hairline--bottom {
  background-color: #3296fa;
  .van-nav-bar__title.van-ellipsis {
    color: #fff;
  }
}
.home {
   margin-top: 90px;
   margin-bottom: 50px;
}
.mytabs {
  position: relative;
  .icon {
    position: fixed;
    right: 0;
    top: 46px;
    font-size: 26px;
    line-height: 44px;
    width: 10%;
    text-align: center;
  }
}
.mytabs /deep/ .van-tabs__wrap {
  width: 90%;
  position: fixed;
  top: 46px;
  z-index: 5;
}
// .mytabs /deep/ .van-tabs__nav {
//     width: 90%;
// }
</style>
