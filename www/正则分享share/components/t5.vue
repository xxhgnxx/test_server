<template lang="html">
<ul>
  <li><code class="highlighter-rouge">\d</code> 匹配0-9之间的任一数字，相当于<code class="highlighter-rouge">[0-9]</code>。</li>
  <li><code class="highlighter-rouge">\D</code> 匹配所有0-9以外的字符，相当于<code class="highlighter-rouge">[^0-9]</code>。</li>
  <li><code class="highlighter-rouge">\w</code> 匹配任意的字母、数字和下划线，相当于<code class="highlighter-rouge">[A-Za-z0-9_]</code>。</li>
  <li><code class="highlighter-rouge">\W</code> 除所有字母、数字和下划线以外的字符，相当于<code class="highlighter-rouge">[^A-Za-z0-9_]</code>。</li>
  <li><code class="highlighter-rouge">\s</code> 匹配空格（包括换行符、制表符、空格符等），相等于<code class="highlighter-rouge">[\t\r\n\v\f]</code>。</li>
  <li><code class="highlighter-rouge">\S</code> 匹配非空格的字符，相当于<code class="highlighter-rouge">[^\t\r\n\v\f]</code>。</li>
  <li><code class="highlighter-rouge">\b</code> 匹配词的边界。</li>
  <li><code class="highlighter-rouge">\B</code> 匹配非词边界，即在词的内部。</li>
</ul>
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
