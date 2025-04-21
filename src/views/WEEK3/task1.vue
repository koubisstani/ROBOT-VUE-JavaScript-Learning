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
  <div class="container">
    <header>
      <h1>move car</h1>
      <h2>
        There is an image on the right, please use the js method to make it move
        to the right, and back to left. cue: you can use setTimeOut() to do it
      </h2>
    </header>
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
        <div class="car">
          <img
            style="margin-top: 200px"
            src="@/assets/week3/car.png"
            alt=""
            width="100"
            height="100"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="less">
template {
  background-color: #fff;
}
.container {
  width: 1600px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 50px;
}
header {
  text-align: center;
  margin-bottom: 100px;
  h1 {
    color: red;
  }
}
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
</style>
