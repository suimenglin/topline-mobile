<template>
  <div>
    <van-nav-bar title="登陆" />
    <van-cell-group>
      <van-field v-model="user.mobile" clearable label="手机号" :error-message="errmsg.mobile" placeholder="请输入手机号码">
        <template slot="left-icon">
          <i class="iconfont icon-iphone"></i>
        </template>
      </van-field>
      <van-field v-model="user.code" clearable label="验证码" :error-message="errmsg.code" placeholder="请输入验证码">
        <template slot="left-icon">
          <i class="iconfont icon-lock"></i>
        </template>
        <van-button class="mycode" slot="button" size="small" round>获取验证码</van-button>
      </van-field>
      <div class="login-btn">
        <van-button :loading="loginLoading" loading-text="加载中..." class="l-btn" type="info" size="large" @click="login">登陆</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
import { userLogin } from '@/api/user.js'
export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      errmsg: {
        mobile: '',
        code: ''
      },
      loginLoading: false
    }
  },
  methods: {
    async login () {
      if (!this.validData()) {
        return
      }
      //   console.log('111111')
      //   this.$http({
      //     url: '/authorizations',
      //     method: 'post',
      //     data: this.user
      //   })
      try {
        this.loginLoading = true
        let res = await userLogin(this.$http, {
          url: '/authorizations',
          method: 'post',
          data: this.user
        })
        // console.log(res)
        this.$store.commit('setUser', res)
        this.loginLoading = false
        this.$router.push('/home')
      } catch (error) {
        console.log(error)
        this.$toast.fail('手机或者验证码错误')
        setTimeout(() => {
          this.loginLoading = false
        }, 2000)
      }
      /* .then(res => {
        console.log(res)
        window.localStorage.setItem('user', JSON.stringify(res.data.data))
        this.$router.push('/home')
      }).catch(err => {
        console.log(err)
      }) */
    },
    validData () {
      if (this.user.mobile.trim().length === 0) {
        this.errmsg.mobile = '手机号码不能为空'
        return false
      }
      if (this.user.mobile.trim().length !== 11) {
        this.errmsg.mobile = '手机号码必须为11位'
        return false
      }
      this.errmsg.mobile = ''
      if (this.user.code.trim().length === 0) {
        this.errmsg.code = '验证码不能为空'
        return false
      }
      if (this.user.code.trim().length !== 6) {
        this.errmsg.code = '验证码不正确'
        return false
      }
      this.errmsg.code = ''
      return true
    }
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
.mycode {
  background-color: #eee;
  color: #aaa;
}
.login-btn {
  margin: 30px 20px;
  .l-btn {
    border-radius: 5px;
  }
}
</style>
