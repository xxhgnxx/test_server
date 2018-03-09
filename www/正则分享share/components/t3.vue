<template lang="html">
<table cellspacing="0">
        <caption>表3.常用的限定符</caption>
        <thead>
            <tr>
                <th scope="col">代码/语法</th>
                <th scope="col">说明</th>
            </tr>

        </thead>
        <tbody>
            <tr>
                <td><span class="code">*</span></td>
                <td><span class="desc">重复零次或更多次</span></td>
            </tr>
            <tr>
                <td><span class="code">+</span></td>

                <td><span class="desc">重复一次或更多次</span></td>
            </tr>
            <tr>
                <td><span class="code">?</span></td>
                <td><span class="desc">重复零次或一次</span></td>
            </tr>
            <tr>

                <td><span class="code">{n}</span></td>
                <td><span class="desc">重复n次</span></td>
            </tr>
            <tr>
                <td><span class="code">{n,}</span></td>
                <td><span class="desc">重复n次或更多次</span></td>
            </tr>

            <tr>
                <td><span class="code">{n,m}</span></td>
                <td><span class="desc">重复n到m次</span></td>
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
