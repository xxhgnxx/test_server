<template lang="html">
<table cellspacing="0">
        <caption>表4.常用分组语法</caption>
        <caption>核心就是 先执行断言表达式为真 则继续匹配 先行是从右往左走 后发断言从左往右走 负向取反</caption>
        <tbody>
            <tr>
                <th scope="col">分类</th>
                <th scope="col">代码/语法</th>
                <th scope="col">说明</th>
            </tr>
            <tr>
                <th rowspan="3">捕获</th>
                <td><span class="code">(exp)</span></td>
                <td><span class="desc">匹配exp,并捕获文本到自动命名的组里</span></td>
            </tr>
            <tr>
                <td><span class="code">(?&lt;name&gt;exp)</span></td>
                <td><span class="desc">匹配exp,并捕获文本到名称为name的组里，也可以写成(?'name'exp)</span></td>
            </tr>
            <tr>
                <td><span class="code">(?:exp)</span></td>

                <td><span class="desc">匹配exp,不捕获匹配的文本，也不给此分组分配组号</span></td>
            </tr>
            <tr>
                <th rowspan="4">零宽断言</th>
                <td><span class="code">(?=exp)</span></td>
                <td><span class="desc">匹配exp前面的位置 零宽度正预测先行断言</span></td>
            </tr>

            <tr>
                <td><span class="code">(?&lt;=exp)</span></td>
                <td><span class="desc">匹配exp后面的位置 宽度正回顾后发断言</span></td>
            </tr>
            <tr>
                <td><span class="code">(?!exp)</span></td>
                <td><span class="desc">匹配后面跟的不是exp的位置 零宽度负预测先行断言</span></td>

            </tr>
            <tr>
                <td><span class="code">(?&lt;!exp)</span></td>
                <td><span class="desc">匹配前面不是exp的位置 零宽度负回顾后发断言</span></td>
            </tr>
            <tr>
                <th rowspan="1">注释</th>

                <td><span class="code">(?#comment)</span></td>
                <td><span class="desc">这种类型的分组不对正则表达式的处理产生任何影响，用于提供注释让人阅读</span></td>
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
