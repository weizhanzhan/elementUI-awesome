<template>
  <div id="app">
    <div id="nav">
      <el-tabs v-model="active" @tab-click="handleClick">
        <el-tab-pane label="Form" name="/"></el-tab-pane>
        <el-tab-pane label="Table" name="/table"></el-tab-pane>
      </el-tabs>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: '/'
    }
  },
  methods: {
    handleClick() {
      this.$router.push(this.active)
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
</style>
