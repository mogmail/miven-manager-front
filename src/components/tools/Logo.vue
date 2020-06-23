<template>
  <section>
    <div class="logo">
      <!-- <router-link :to="{name:'dashboard'}"> -->
      <!-- <LogoSvg alt="logo" /> -->
      <!-- <view class="img-con"> -->
      <!-- <img src="../../assets/logo2.png" style="width:100%;height:auto;" /> -->
      <h1>活动后台管理</h1>
      <!-- </view> -->
      <!-- </router-link> -->
    </div>
    <!-- <h1 v-if="showTitle" style="color:#ffffff">{{ title }}</h1> -->
  </section>
</template>

<script>
import LogoSvg from '@/assets/logo.svg?inline'

export default {
  name: 'Logo',
  components: {
    LogoSvg
  },
  props: {
    title: {
      type: String,
      default: '活动后台管理',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>
<style scoped>
.logo h1 {
  font-size: 26px;
}
</style>
