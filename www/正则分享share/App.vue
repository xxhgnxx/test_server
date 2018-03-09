<template lang="html">
  <div class="root_main" @click='step++'>
    <H1 @click.stop='exg_run_show.push(exg_run_show.length)'>正则表达式20分钟快速入门</H1>
    <h2 @click.stop='exg_run_show.pop()' v-if="step>=1">正则的定义</h2>
    <h3 v-if="step>=2" @click.stop='step--'>用来表达字符串集合的语法
      <a href="https://zh.wikipedia.org/wiki/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F">点这里查看百科</a>
    </h3>
    <transition name="fade">
      <div class='box' v-if="step>=3">
        <div class='box'>
          <h1>常见元字符</h1>
          <transition name="fade">
            <t1 v-if="step>=4"></t1>
          </transition>
        </div>
        <transition name="fade">
          <div class='box' v-if="step>=5">
            <h1 v-if="step>=5">反义</h1>
            <transition name="fade">
              <t2 v-if="step>=5"> </t2>
            </transition>
          </div>
        </transition>
      </div>
    </transition>
    <transition name="fade">
      <div class='fly' v-if="step>=6" style='    top: 400px; left: 350px'>
        <t6> </t6>
      </div>
    </transition>
    <transition name="fade">
      <div class='box' v-if="step>=7">
        <h1 v-if="step>=7">常用限定符</h1> 
        <h1 v-if="step>=7">重复类 量词符</h1>
        <transition name="fade">
          <t3 v-if="step>=8"> </t3>
        </transition>
      </div>
    </transition>
    <transition name="fade">
      <div class='fly' v-if="step>=9" style='top: 471px; left: 990px;'>
        <t4> </t4>
      </div>
    </transition>
    <transition name="fade">
      <div class='box' v-if="step>=10">
        <h1>贪婪与最小</h1>
        <t9> </t9>
      </div>
    </transition>
    <transition name="fade">
      <div class='box' v-if="step>=11">
        <h1>字符集[a-z] [1-9]</h1>
        <wikitable></wikitable>
      </div>
    </transition>
    <transition name="fade">
      <div class='fly' v-if="step>=12" style='top: 750px; left: 500px;'>
        <t5> </t5>
      </div>
    </transition>
    <transition name="fade">
      <div class='fly' v-if="step>=13" style='    top: 1000px; left:600px'>
        <t7> </t7>
      </div>
    </transition>

<div class='exg_run' @click.stop=''>
 <exg_run  v-for="i in exg_run_show" :key='i'></exg_run>
</div>
    <transition name="fade">
      <div class='fly_box js_box' v-if="step>=14" style=''>
        <h1>分组与后向引用</h1> 
        解决重复或者复用结果的方法
        <h1 v-if="step>=15">后向引用与零宽断言</h1>
        <t10 v-if="step>=15">
        </t10>
      </div>
    </transition> 

    <transition name="fade">
      <div class='fly_box js_box' v-if="step>=16" style=''>
        <h1>在JS中的应用</h1> <t8> </t8>
      </div>
    </transition> 
        <transition name="fade">
      <div class='fly_box js_box' v-if="step>=17" style=''>
        <h1>处理选项</h1> 
        i g m
      </div>
    </transition> 
    <transition name="fade">
      <div class='fly_box js_box' v-if="step>=18" style='left:300px'>
        <h1>相关文章</h1> 
        <a href="https://zh.wikipedia.org/wiki/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F">维基百科</a> <br>
        <a href="http://javascript.ruanyifeng.com/stdlib/regexp.html#toc3">《JavaScript 标准参考教程（alpha）》，by 阮一峰</a> <br>
        <a href="http://deerchao.net/tutorials/regex/regex.htm">正则表达式30分钟入门教程</a><br>
        <a href="http://www.runoob.com/regexp/regexp-syntax.html">www.runoob.com</a> <br>
      </div>
    </transition>


  </div>
</template>





<script>
import Vue from 'vue'
import exg_run from './components/exg_run'
import wikitable from './components/wikitable'
import t1 from './components/t1'
import t2 from './components/t2'
import t3 from './components/t3'
import t4 from './components/t4'
import t5 from './components/t5'
import t6 from './components/t6'
import t7 from './components/t7'
import t8 from './components/t8'
import t9 from './components/t9'
import t10 from './components/t10'
export default {
  components: {
    exg_run,
    wikitable,
    t1, t2, t3, t4, t5, t6, t7, t8, t9,t10
  },
  data () {
    return {
      step: 0,
      exg_run_show: []
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    updata_plan_list (page) {

    }
  }
}
</script>

<style lang="less">
@px2rem: 37.5rem;
.root_main {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
}
.exg_run {
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 2000;
}
.js_box {
  font-size: 30px;
  top: 600px;
  left: 800px;
  z-index: 2001;
  border: 3px solid #000;
}
.box {
  display: inline-block;
  width: fit-content;
  margin: 1%;
  background: #ececec;
  padding: 5px;
  border-radius: 5px;
  vertical-align: top;
}
.fly_box {
  position: absolute;
  display: inline-block;
  width: fit-content;
  margin: 1%;
  background: #ececec;
  padding: 5px;
  border-radius: 5px;
  vertical-align: top;
}
.fly {
  position: absolute;
  width: fit-content;
  // height: fit-content;
  top: 10%;
  right: 10%;
  z-index: 1000;
  background: black;
  color: #fff;
  border-radius: 10px;
}
table {
  margin-left: 0;
  border-style: solid;
  border-width: 1px 1px 0 0;
  border-color: gray;
  background: #eee;
}

td,
th {
  border-style: solid;
  border-width: 0 0 1px 1px;
  border-color: gray;
}

caption {
  margin: auto;
  font-weight: bold;
}

dl {
  margin-left: 20px;
}

dt {
  font-weight: bold;
}

/* 动画样式  渐隐*/
.fade-enter-active {
  transition: opacity 1s;
}
// .fade-leave-active {
//   // transition: opacity 1s;
// }

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
