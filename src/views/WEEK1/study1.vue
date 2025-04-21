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
  let radius = parseInt(document.getElementById('sizeInput').value)
  let color = document.getElementById('colorInput').value
  let animationId

  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  function update() {
    drawCircle()
    animationId = requestAnimationFrame(update)
  }

  function updateCodeDisplay() {
    const codeDisplay = document.getElementById('codeDisplay')
    codeDisplay.textContent = `
  const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')
  let x = canvas.width / 2
  let y = canvas.height / 2
  let radius = parseInt(document.getElementById('sizeInput').value)
  let color = document.getElementById('colorInput').value
  let animationId

  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  function update() {
    drawCircle()
    animationId = requestAnimationFrame(update)
  }
  // update data
  document.getElementById('colorInput').addEventListener('input', () => {
    color = document.getElementById('colorInput').value
  })

  document.getElementById('sizeInput').addEventListener('input', () => {
    radius = parseInt(document.getElementById('sizeInput').value)
  })

  drawCircle()
  update()
    `
  }

  document.getElementById('colorInput').addEventListener('input', () => {
    color = document.getElementById('colorInput').value
  })

  document.getElementById('sizeInput').addEventListener('input', () => {
    radius = parseInt(document.getElementById('sizeInput').value)
  })

  drawCircle()
  update()
  updateCodeDisplay() // Initial code display
})
</script>

<script setup></script>

<template>
  <my-container>
    <header>
      <my-title title1="Defines the color size of the ball"></my-title>
      <h1></h1>
      <p>
      First of all, welcome to the start of your JavaScript learning programme, this is the first
      task of the week, we start with a very simple module that defines a ball's colour and size,
      and after this learning experience, go ahead and draw your favourite ball!
      </p>
      <p>As you change the color or size of the input box, the balls in the
        canvas change accordingly</p>
      <div class="choices">
        <label for="colorInput">Color: </label>
        <input type="color" id="colorInput" value="#0000ff" />
        <label for="sizeInput">Size: </label>
        <input type="number" id="sizeInput" value="20" min="5" max="100" />
      </div>
    </header>
    <main style="margin-top: 20px">
      <canvas id="robotCanvas" width="1200" height="600"></canvas>
      <div id="codeDisplay"></div>
    </main>
    <footer>
      <study-content>
        <code-item>
          <template #code>addEventListener('input',()=>{})</template>
          <template #item>
            This function is triggered when the value of the input box changes,
            and we modify our color data here</template
          >
        </code-item>

        <code-item>
          <template #code>requestAnimationFrame(function)</template>
          <template #item
            >We use this event to loop a function, and by calling the js method
            and passing in a function name, we can keep the function
            executing</template
          >
        </code-item>

        <p>
          Here, we use the loop method to execute this function, then update the
          data by modifying the input box, and finally update the canvas through
          drawCircle
        </p>
     
        <my-footer week="1" num="1"></my-footer>
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
