<template>
  <my-container2>
    <my-title title1="Reaction Time Test"></my-title>
    <div class="title">
      <div class="title-content">Code Input Area</div>
      <div class="title-content">Reaction Test Area</div>
    </div>
    <main>
      <!-- 左边代码输入区 -->
      <div class="code_area">
        <textarea
          v-model="codeLeft"
          placeholder="Enter JavaScript code here to change the color of the box"
          style="
            width: 763px;
            height: 495px;
            border: none;
            outline: none;
            resize: none;
            font-size: 20px;
          "
        ></textarea>
      </div>
      <!-- 中间执行按钮 -->
      <button @click="executeCodeLeft" class="executeButton">Run</button>
      <!-- 右边效果展示区 -->
      <div class="effect_area">
        <div id="colorBox" class="box"></div>
        <p>{{ result }}</p>
      </div>
    </main>
  </my-container2>
</template>

<script>
import MyTitle from '@/components/MyTitle.vue'
import MyContainer2 from '@/components/MyContainer2.vue'
import { ref } from 'vue'

export default {
  components: {
    'my-title': MyTitle,
    'my-container2': MyContainer2
  },
  setup() {
    const codeLeft = ref('')
    const result = ref('')
    let isGreen = false
    let startTime = null

    const executeCodeLeft = () => {
      try {
        const code = codeLeft.value
        eval(code)
      } catch (error) {
        console.error('Error executing code:', error)
      }
    }

    const changeColor = () => {
      startTime = new Date().getTime()
      const box = document.getElementById('colorBox')
      box.style.backgroundColor = 'green'
      isGreen = true
    }

    const handleClick = () => {
      if (isGreen) {
        const endTime = new Date().getTime()
        const reactionTime = (endTime - startTime) / 1000
        result.value = `Your reaction time: ${reactionTime} seconds`
        const box = document.getElementById('colorBox')
        box.style.backgroundColor = 'grey' // Reset the color
        isGreen = false
      } else {
        alert('Wait for the box to turn green!')
      }
    }

    return {
      codeLeft,
      executeCodeLeft,
      changeColor,
      handleClick,
      result
    }
  },
  mounted() {
    document.getElementById('colorBox').addEventListener('click', this.handleClick)
  }
}
</script>

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

.executeButton {
  width: 60px;
  height: 50px;
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

.box {
  width: 400px;
  height: 400px;
  background-color: grey;
}
</style>
