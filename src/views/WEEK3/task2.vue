<script>
import MyTitle from '@/components/MyTitle.vue'
import MyContainer2 from '@/components/MyContainer2.vue'

export default {
  components: {
    'my-title': MyTitle,
    'my-container2': MyContainer2
  }
}
</script>

<script setup>
import { ref } from 'vue'

let codeLeft = ref('')

const executeCodeLeft = () => {
  // 获取代码的值
  const code = codeLeft.value
  // 执行代码
  try {
    eval(code)
  } catch (error) {
    console.error('代码执行出错:', error)
  }
}
</script>

<template>
  <my-container2>
    <my-title
      title1="Custom-made timepieces"
      title2="Your task is to time the clock to 3:40:25"
    ></my-title>
    <div class="title">
      <div class="title-content">Code input area</div>
      <div class="title-content">Effect display area</div>
    </div>
    <main>
      <!-- 左边代码输入区 -->
      <div class="code_area">
        <textarea
          type="text"
          v-model="codeLeft"
          placeholder="Enter the javascript code here"
          style="
            width: 763px;
            height: 495px;
            border: none;
            outline: none;
            resize: none;
            font-size: 20px;
          "
        />
      </div>
      <!-- 中间执行按钮 -->
      <button @click="executeCodeLeft" class="executeButton">run</button>
      <!-- 右边效果展示区 -->
      <div class="effect_area">
        <div class="clock">
          <!-- 刻度线 -->
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>

          <!-- 遮罩圆形 -->
          <div class="cover"></div>
          <!-- 表针 -->
          <div class="hour"></div>
          <div class="minute"></div>
          <div class="second"></div>

          <!-- 螺丝 -->
          <div class="dotted"></div>
        </div>
      </div>
    </main>
  </my-container2>
</template>

<style lang="less" scoped>
.title {
  display: flex;
  margin-bottom: 20px;
  .title-content {
    font-size: 40px;
    font-weight: bolder;
    &:nth-child(1) {
      margin-right: 500px;
    }
  }
}
main {
  display: flex;
  justify-content: space-between;
  .code_area {
    width: 48%;
    height: 500px;
    border: 3px solid black;
  }

  .effect_area {
    width: 48%;
    height: 500px;
    border: 2px solid black;
  }
}

.executeButton {
  width: 40px;
  height: 100px;
  margin-top: 200px;
  text-align: center;
  background-color: rgb(24, 163, 24);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
  }
}

.effect_area {
  position: relative;
}

.clock {
  width: 250px;
  height: 250px;
  border: 8px solid #000;
  border-radius: 50%;
  margin: 100px auto;
  position: relative;
}

.line {
  /* 1.定位 */
  position: absolute;
  width: 4px;
  height: 250px;
  background-color: #999;
  left: 50%;
  transform: translate(-50%);
}

/* 线2: 旋转, 每条线旋转角度不同, 单独选中不同的line, 写rotate代码 */
/* 一圈是360度, 等分成  xx 份 */
.line:nth-child(2) {
  transform: translate(-50%) rotate(30deg);
}

.line:nth-child(3) {
  transform: translate(-50%) rotate(60deg);
}

.line:nth-child(4) {
  transform: translate(-50%) rotate(90deg);
}

.line:nth-child(5) {
  transform: translate(-50%) rotate(120deg);
}

.line:nth-child(6) {
  transform: translate(-50%) rotate(150deg);
}

/* 第一根和第四跟宽度大一些 */
.line:nth-child(1),
.line:nth-child(4) {
  width: 5px;
}

/* 遮罩圆形 */
.cover {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 50%;
}

/* 表针 */
/* 并集选择器放在单独选择器的上面, 避免transform属性的层叠 */
.hour,
.minute,
.second {
  position: absolute;
  left: 50%;
  /* 盒子底部在盒子中间 */
  bottom: 50%;
}

.hour {
  width: 6px;
  height: 50px;
  background-color: #333;
  margin-left: -3px;
  transform: rotate(15deg);
  transform-origin: center bottom;
}

.minute {
  width: 5px;
  height: 65px;
  background-color: #333;
  margin-left: -3px;
  transform: rotate(90deg);
  transform-origin: center bottom;
}

.second {
  width: 4px;
  height: 80px;
  background-color: red;
  margin-left: -2px;
  transform: rotate(240deg);
  transform-origin: center bottom;
}

/* 螺丝 */
.dotted {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  background-color: #333;
  border-radius: 50%;
}
</style>
