<template lang="html">
  <div>
    <p>\w匹配的仅仅是中文，数字，字母，对于国人来讲，仅匹配中文时常会用到</p>
    <pre>匹配中文字符的正则表达式： [\u4e00-\u9fa5]</pre>
    <p>或许你也需要匹配双字节字符，中文也是双字节的字符</p>
    <pre>匹配双字节字符(包括汉字在内)：[^\x00-\xff]</pre>
    <p>注：可以用来计算字符串的长度（一个双字节字符长度计2，ASCII字符计1）</p>
    <p>注：想匹配1-31内的数值可以写成/[1-910-31]/</p>
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
