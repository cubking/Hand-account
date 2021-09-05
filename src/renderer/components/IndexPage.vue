<template>
  <div class="bodyer-content">
    <ul v-if="list.length">
      <li v-for="(item, idx) in list" :key="idx">
        <span class="info" @click="goDetail(idx)">{{ item.info }}</span>

        <button class="handle" @click="del(idx)">Delete</button>
      </li>
    </ul>
    <p class="null-tips" v-else>暂无手帐</p>
  </div>
</template>

<script>
export default {
  name: 'index-page',
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.initList();
  },
  methods: {
    initList() {
      let infoList = JSON.parse(localStorage.getItem('info-list')) || [];
      this.list = infoList;
    },
    goDetail(idx) {
      this.$router.push('/detail?id=' + idx)
    },
    del(idx) {
      this.list.splice(idx, 1);
      localStorage.setItem('info-list', JSON.stringify(this.list));
    }
  }
}
</script>

<style lang="scss">

</style>