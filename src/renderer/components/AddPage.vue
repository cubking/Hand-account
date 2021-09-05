<template>
  <div class="bodyer-content">
    <h1 class="add-title">新建手记</h1>
    <textarea name="info" placeholder="请输入内容" v-model="info" class="add-info"></textarea>
    <button class="add-btn" :class="{disabled: !info}" :disabled="!info" @click="add()">新建</button>
  </div>
</template>

<script>
export default {
  name: 'add-page',
  data() {
    return {
      info: ''
    }
  },
  methods: {
    add() {
      let infoList = JSON.parse(localStorage.getItem('info-list')) || [];
      infoList.push({ info: this.info });
      localStorage.setItem('info-list', JSON.stringify(infoList));
        this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss">
.add-title {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
}

.add-info {
  width: 100%;
  height: 200px;
  padding: 20px;
  border: 1px solid #ccc;
  line-height: 28px;
  font-size: 20px;
  box-sizing: border-box;
  resize: none;
}

.add-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 30px;
  margin-top: 20px;
  background: #0079ff;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  color: #fff;
  outline: none;
  cursor: pointer;
}
.add-btn.disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>