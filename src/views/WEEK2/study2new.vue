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
    const codeDisplay = document.getElementById('codeDisplay')
    codeDisplay.textContent = `
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

  document.getElementById('startStopButton').addEventListener('click', () => {
    canvas.addEventListener('mousemove', (e) => {
      console.log(e.offsetX)
      console.log(e.offsetY)
      x = e.offsetX
      y = e.offsetY
      drawCircle()
    })
  })

  drawCircle()
    `
  }

  document.getElementById('startStopButton').addEventListener('click', () => {
    canvas.addEventListener('mousemove', (e) => {
      console.log(e.offsetX)
      console.log(e.offsetY)
      x = e.offsetX
      y = e.offsetY
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
      <my-title title1="The ball follows the mouse"></my-title>
      <p>
        When you click this button, when you move your mouse over the canvas,
        the balls in the canvas will move with the mouse movement
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
        <code-item>
          <template #code
            >element.addEventListener('mousemove', ()=>{})</template
          >
          <template #item>
            Above, we used a mousemove that listens for the mouse to swipe
            through the object</template
          >
        </code-item>

        <code-item>
          <template #code>e.offsetX e.offsetY</template>
          <template #item
            >This offsetX is a number-type property, which is the distance of
            the current event or element from the left of the parent element,
            and the same goes for offsetY</template
          >
        </code-item>

        <p>
          Here, when our mouse moves directly into the canvas, we set the center
          of the ball to the center of our mouse and re-render the canvas
        </p>

        <my-footer week="2" num="2"></my-footer>
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
