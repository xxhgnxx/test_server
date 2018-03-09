<template lang="html">
  <table class="wikitable">
      <tbody>
        <tr>
          <th>POSIX字符组</th>
          <th>说明</th>
          <th>ASCII环境</th>
          <th>Unicode环境</th>
        </tr>
        <tr>
          <td>
            <code>[:alnum:]</code>
          </td>
          <td>字母字符和数字字符</td>
          <td>
            <code>[a-zA-Z0-9]</code>
          </td>
          <td>
            <code>[\p{L&amp;}\p{Nd}]</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>[:alpha:]</code>
          </td>
          <td>字母</td>
          <td>
            <code>[a-zA-Z]</code>
          </td>
          <td>
            <code>\p{L&amp;}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>[:ascii:]</code>
          </td>
          <td>
            <span lang="en">ASCII</span>字符</td>
          <td>
            <code>[\x00-\x7F]</code>
          </td>
          <td>
            <code>\p{InBasicLatin}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>[:blank:]</code>
          </td>
          <td>空格字符和制表符</td>
          <td>
            <code>[ \t]</code>
          </td>
          <td>
            <code>[\p{Zs}\t]</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>[:cntrl:]</code>
          </td>
          <td>控制字符</td>
          <td>
            <code>[\x00-\x1F\x7F]</code>
          </td>
          <td>
            <code>\p{Cc}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>[:digit:]</code>
          </td>
          <td>数字字符</td>
          <td>
            <code>[0-9]</code>
          </td>
          <td>
            <code>\p{Nd}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>[:graph:]</code>
          </td>
          <td>空白字符之外的字符</td>
          <td>
            <code>[\x21-\x7E]</code>
          </td>
          <td>
            <code>[^\p{Z}\p{C}]</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>[:lower:]</code>
          </td>
          <td>小写字母字符</td>
          <td>
            <code>[a-z]</code>
          </td>
          <td>
            <code>\p{Ll}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>[:print:]</code>
          </td>
          <td>类似
            <code>[:graph:]</code>，但包括空白字符</td>
          <td>
            <code>[\x20-\x7E]</code>
          </td>
          <td>
            <code>\P{C}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>[:punct:]</code>
          </td>
          <td>标点符号</td>
          <td>
            <code>[][!"#$%&amp;'()*+,./:;&lt;=&gt;?@\^_`{|}~-]</code>
          </td>
          <td>
            <code>[\p{P}\p{S}]</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>[:space:]</code>
          </td>
          <td>空白字符</td>
          <td>
            <code>[ \t\r\n\v\f]</code>
          </td>
          <td>
            <code>[\p{Z}\t\r\n\v\f]</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>[:upper:]</code>
          </td>
          <td>大写字母字符</td>
          <td>
            <code>[A-Z]</code>
          </td>
          <td>
            <code>\p{Lu}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>[:word:]</code>
          </td>
          <td>字母字符</td>
          <td>
            <code>[A-Za-z0-9_]</code>
          </td>
          <td>
            <code>[\p{L}\p{N}\p{Pc}]</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>[:xdigit:]</code>
          </td>
          <td>十六进制字符</td>
          <td>
            <code>[A-Fa-f0-9]</code>
          </td>
          <td>
            <code>[A-Fa-f0-9]</code>
          </td>
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
