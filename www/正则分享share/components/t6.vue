<template lang="html">
<div>
注意 <br>
脱字符[^]只有在字符类的第一个位置才有特殊含义
<br>否则就是字面含义。
</div>
</template>

<script>
import Vue from 'vue'
export default {
  props: ['vdata'],
  data () {
    return {
    }
  },
  created () {

  },
  methods: {
    set_color (color) {
    }
  },
  filters: {
  }
}
</script>

<style lang="less">
@px2rem: 37.5rem;
.root_main {
  position: relative;
  width: 100%;
  width: 100%;
  overflow-y: auto;
}

table.wikitable {
  background-color: #f8f9fa;
  color: #222;
  margin: 1em 0;
  border: 1px solid #a2a9b1;
  border-collapse: collapse;
}
</style>
