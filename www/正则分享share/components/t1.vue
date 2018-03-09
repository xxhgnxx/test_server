<template lang="html">
<table cellspacing="0">
        <caption>表1.常用的元字符</caption>
        <thead>
            <tr>
                <th scope="col">代码</th>

                <th scope="col">说明</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="code">.</span></td>
                <td><span class="desc">匹配除换行符以外的任意字符</span></td>

            </tr>
            <tr>
                <td><span class="code">\w</span></td>
                <td><span class="desc">匹配字母或数字或下划线或汉字</span></td>
            </tr>
            <tr>
                <td><span class="code">\s</span></td>

                <td><span class="desc">匹配任意的空白符</span></td>
            </tr>
            <tr>
                <td><span class="code">\d</span></td>
                <td><span class="desc">匹配数字</span></td>
            </tr>
            <tr>

                <td><span class="code">\b</span></td>
                <td><span class="desc">匹配单词的开始或结束</span></td>
            </tr>
            <tr>
                <td><span class="code">^</span></td>
                <td><span class="desc">匹配字符串的开始</span></td>
            </tr>

            <tr>
                <td><span class="code">$</span></td>
                <td><span class="desc">匹配字符串的结束</span></td>
            </tr>
        </tbody>
    </table>
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
