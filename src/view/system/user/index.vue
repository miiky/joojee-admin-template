<template>
  <div>用户管理</div>
</template>
<script>
export default {
  mounted () {
    this.$net.getUsers().then(res => {
      console.log('getUser=>', res)
    })
  }
}
</script>
<style lang="less" scoped>
</style>
