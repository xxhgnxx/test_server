<template lang="html">
    <table cellspacing="0">
        <caption>表2.常用的反义代码</caption>
        <thead>
            <tr>
                <th scope="col">代码/语法</th>

                <th scope="col">说明</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="code">\W</span></td>
                <td><span class="desc">匹配任意不是字母，数字，下划线，汉字的字符</span></td>

            </tr>
            <tr>
                <td><span class="code">\S</span></td>
                <td><span class="desc">匹配任意不是空白符的字符</span></td>
            </tr>
            <tr>
                <td><span class="code">\D</span></td>

                <td><span class="desc">匹配任意非数字的字符</span></td>
            </tr>
            <tr>
                <td><span class="code">\B</span></td>
                <td><span class="desc">匹配不是单词开头或结束的位置</span></td>
            </tr>
            <tr>

                <td><span class="code">[^x]</span></td>
                <td><span class="desc">匹配除了x以外的任意字符</span></td>
            </tr>
            <tr>
                <td><span class="code">[^aeiou]</span></td>
                <td><span class="desc">匹配除了aeiou这几个字母以外的任意字符</span></td>
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
