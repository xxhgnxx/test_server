<template lang="html">
<div class="exg_run_main">
  <div class='box'>
    <div>
      <textarea name="" id="" cols="50" rows="2" v-model="str"></textarea>
    </div>
    <div>
      <textarea name="" id="" cols="50" rows="2" v-model="exg"></textarea>
    </div>
  </div>
  <!-- <div class='go' @click='run_exg'>go ></div> -->
  <div class='go'>
  <textarea  name="" id="" cols="25" rows="5" v-model="res" @click='run_exg'></textarea>

  </div>
</div>


</template>

<script>
import Vue from 'vue'
export default {
  props: ['vdata'],
  data () {
    return {
      str: 'cost xx皇冠鸟xx oo皇冠鸟oo daskl;dna',
      exg: '/([a-z]){2}/g',
      res: ''
    }
  },
  created () {

  },
  methods: {
    run_exg () {
      console.log(this.str)
      console.log(this.exg)

      this.$axios.get(`/send_exg?exg=${this.exg}&str=${this.str}`)
      this.res = JSON.stringify(this.str.match(eval(this.exg.replace(/\/\//g, "\/"))))
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
.exg_run_main {
  font-size: 0;
  width: 800px;
  background: gray;
  margin: 1px;
  border-radius: 10px;
}
.go {
  display: inline-block;
}
textarea {
  font-size: 18px;
}
</style>
