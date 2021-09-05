<template>
  <div id="app">
    <header class="header-layout-wapper">
      <div class="header-content">手记</div>
    </header>

    <main class="bodyer-layout-wapper">
      <router-view></router-view>
    </main>

    <footer class="footer-layout-wapper">
      <div class="footer-content">
        <button @click="goAdd()" v-if="path == '/'">+</button>
        <button @click="goBack()" v-else>
          <img src="/static/imgs/back.png" alt="back">
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'electron-vue',
    data() {
      return {
        path: '/'
      }
    },
    watch: {
      '$route.path': {
        handler(n, o) {
          this.path = n;
        },
        immediate: true,
        deep: true
      }
    },
    created() {
      console.log(this.$route)
    },
    methods: {
      goAdd() {
        this.$router.push('/add')
      },
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="scss">
@import url('/static/css/common.css');

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .header-content {
    padding: 10px 30px;
    background: aliceblue;
    font-size: 20px;
  }

  .bodyer-layout-wapper {
    overflow-y: auto;
    flex: 1;
    height: 0;
    // padding: 20px 30px;
  }

  .footer-layout-wapper {
    display: flex;
    justify-content: center;
    padding: 20px 30px;
    background: aliceblue;

    & button {
      // display: block;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: #ccc;
      border-radius: 50%;
      border: none;
      font-size: 30px;
      color: #fff;
      outline: none;
      cursor: pointer;
      transition: background .4s ease 0s;

      img {
        width: 26px;
      }

      &:hover {
        background: #ddd;
      }
    }
  }
}
</style>
