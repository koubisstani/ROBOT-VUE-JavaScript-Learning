<script>
import MyFooter from '@/components/MyFooter.vue'
import MyContainer from '@/components/MyContainer.vue'
import StudyContent from '@/components/StudyContent.vue'
import codeItem from '@/components/codeItem.vue'
import MyTitle from '@/components/MyTitle.vue'

export default {
  components: {
    'my-title': MyTitle,
    'my-footer': MyFooter,
    'my-container': MyContainer,
    'study-content': StudyContent,
    'code-item': codeItem
  }
}
</script>

<script setup>
import { nextTick } from 'vue'

nextTick(() => {
  const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')
  let x = canvas.width / 2
  let y = canvas.height / 2
  let radius = 20
  let color = 'blue'

  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  function updateCodeDisplay(speed) {
    const codeDisplay = document.getElementById('codeDisplay');
    codeDisplay.textContent = `
  const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')
  let x = canvas.width / 2
  let y = canvas.height / 2
  let radius = 20
  let color = 'blue'

  // when learn this model, the code of product ball you can copy, but the keydown, you have to come turn it by youself
  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  document.getElementById('startStopButton').addEventListener('click', () => {
    document.addEventListener('keydown', (e) => {
      let code = e.keyCode
      //   console.log(code)
      //   console.log(x)
      //   console.log(y)
      // left
      if (code == 37) {
        x -= 10
      }
      // top
      if (code == 38) {
        y -= 10
      }
      // right
      if (code == 39) {
        x += 10
      }
      // bottom
      if (code == 40) {
        y += 10
      }
      drawCircle()
    })
  })

  drawCircle()
  updateCodeDisplay() // Initial code display
    `
  }

  document.getElementById('startStopButton').addEventListener('click', () => {
    document.addEventListener('keydown', (e) => {
      let code = e.keyCode
      //   console.log(code)
      //   console.log(x)
      //   console.log(y)
      // 左
      if (code == 37) {
        x -= 10
      }
      // 上
      if (code == 38) {
        y -= 10
      }
      // 右
      if (code == 39) {
        x += 10
      }
      // 下
      if (code == 40) {
        y += 10
      }
      drawCircle()
    })
  })

  drawCircle()
  updateCodeDisplay() // Initial code display
})
</script>

<script setup></script>

<template>
  <my-container>
    <header>
      <my-title title1="The keyboard controls the ball movement"></my-title>
      <h1></h1>
      <p>
        We can listen to keyboard events via JS events and then react to them a
        bit
      </p>
      <p>
        Please click the button to start, and then control the up, down, left,
        and right buttons on the keyboard to move the ball
      </p>
      <div class="choices">
        <el-button id="startStopButton" style="margin-left: 20px"
          >Press to Start</el-button
        >
      </div>
    </header>
    <main style="margin-top: 20px">
      <canvas id="robotCanvas" width="1200" height="600"></canvas>
      <div id="codeDisplay"></div>
    </main>
    <footer>
      <study-content>
        <p>
          Here, when we learn how to use keyboard events, we can use the code
          that generates the balls directly to avoid wasting more time, which we
          will learn later
        </p>
        <code-item>
          <template #code>addEventListener('keydown',()=>{})</template>
          <template #item
            >Here, when we learn how to use keyboard events, we can use the code
            that generates the balls directly to avoid wasting more time, which
            we will learn later</template
          >
        </code-item>
        <code-item>
          <template #code>e.keyCode == 40</template>
          <template #item>
            In a keyboard event, there is a keyCode property that records which
            keyboard fires.</template
          >
        </code-item>

        <p>left is 37</p>
        <p>top is 38</p>
        <p>right is 39</p>
        <p>bottom is 40</p>

        <my-footer week="2" num="1"></my-footer>
      </study-content>
    </footer>
  </my-container>
</template>

<style lang="less" scoped>
.choices {
  label {
    margin-left: 20px;
  }
}
#robotCanvas {
  background-color: #d3d3d3; /* Light grey background for the canvas */
}

#codeDisplay {
  width: 100%;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid black;
  background-color: #f4f4f4;
  font-family: monospace;
  white-space: pre-wrap; /* Ensure code formatting is preserved */
  font-size: 18px;
}
</style>
