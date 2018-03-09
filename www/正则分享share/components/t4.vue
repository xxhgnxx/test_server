<template lang="html">
<ul>
  <li><code class="highlighter-rouge">?</code> 等同于<code class="highlighter-rouge">{0, 1}</code>。</li>
  <li><code class="highlighter-rouge">*</code> 等同于<code class="highlighter-rouge">{0,}</code>。</li>
  <li><code class="highlighter-rouge">+</code> 等同于<code class="highlighter-rouge">{1,}</code>。</li>
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
