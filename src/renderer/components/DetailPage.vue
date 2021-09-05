<template>
  <div class="bodyer-content">
    <h1 class="detail-title">手记详情</h1>
    <p class="detail-info">{{ info }}</p>
  </div>
</template>

<script>
export default {
  name: 'detail-page',
  data() {
    return {
      info: ''
    }
  },
  mounted() {
    this.initInfo();
  },
  methods: {
    initInfo() {
      let id = Number(this.$route.query.id || "");
      let infoList = JSON.parse(localStorage.getItem('info-list')) || [];

      if(typeof id != "number" || !infoList.length) {
        this.$router.go(-1);
        return;
      }

      this.info = infoList[id].info;
    }
  }
}
</script>

<style lang="scss">
.detail-title {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
}

.detail-info {
  width: 100%;
  height: 200px;
  padding: 20px 0;
  line-height: 28px;
  font-size: 20px;
  box-sizing: border-box;
  resize: none;
}
</style>