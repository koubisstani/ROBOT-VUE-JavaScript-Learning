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
  let dx = 2 // Initial speed
  let radius = parseInt(document.getElementById('sizeInput').value)
  let color = document.getElementById('colorInput').value
  let animationId
  let isRunning = false

  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  function update() {
    const speed = parseInt(document.getElementById('speedInput').value)
    x += dx * speed

    if (x + radius > canvas.width || x - radius < 0) {
      dx = -dx // Reverse direction
    }

    drawCircle()
    updateCodeDisplay(speed) // Update code display
    animationId = requestAnimationFrame(update)
  }

  function updateCodeDisplay(speed) {
    const codeDisplay = document.getElementById('codeDisplay')
    codeDisplay.textContent = `
  const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')
  let x = canvas.width / 2
  let y = canvas.height / 2
  let dx = 2 // Initial speed
  let radius = parseInt(document.getElementById('sizeInput').value)
  let color = document.getElementById('colorInput').value
  let animationId
  let isRunning = false

  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  function update() {
    const speed = parseInt(document.getElementById('speedInput').value)
    x += dx * speed

    if (x + radius > canvas.width || x - radius < 0) {
      dx = -dx // Reverse direction
    }

    drawCircle()
    animationId = requestAnimationFrame(update)
  }

  document.getElementById('speedInput').addEventListener('input', () => {
    dx = parseInt(document.getElementById('speedInput').value)
  })

  document.getElementById('colorInput').addEventListener('input', () => {
    color = document.getElementById('colorInput').value
  })

  document.getElementById('sizeInput').addEventListener('input', () => {
    radius = parseInt(document.getElementById('sizeInput').value)
  })

  document.getElementById('startStopButton').addEventListener('click', () => {
    if (isRunning) {
      cancelAnimationFrame(animationId)
      document.getElementById('startStopButton').textContent = 'Press to Start'
    } else {
      update()
      document.getElementById('startStopButton').textContent = 'Press to Stop'
    }
    isRunning = !isRunning
  })

  drawCircle()
    `
  }

  document.getElementById('speedInput').addEventListener('input', () => {
    dx = parseInt(document.getElementById('speedInput').value)
  })

  document.getElementById('colorInput').addEventListener('input', () => {
    color = document.getElementById('colorInput').value
  })

  document.getElementById('sizeInput').addEventListener('input', () => {
    radius = parseInt(document.getElementById('sizeInput').value)
  })

  document.getElementById('startStopButton').addEventListener('click', () => {
    if (isRunning) {
      cancelAnimationFrame(animationId)
      document.getElementById('startStopButton').textContent = 'Press to Start'
    } else {
      update()
      document.getElementById('startStopButton').textContent = 'Press to Stop'
    }
    isRunning = !isRunning
  })

  drawCircle()
  updateCodeDisplay(dx) // Initial code display
})
</script>

<script setup></script>

<template>
  <my-container>
    <header>
      <my-title title1="Moving Circle Robot"></my-title>
      <p>Fantastic! You've come to the second mission of the week, 
        where I've moved the ball, and you can see that the ball is 
        bouncing back and forth horizontally and the speed is definable, now try it yourself.
      </p>
      <br>
      <p>Define velocity and wall bounce</p>
      <p>The Start/Stop button starts/stops the robot.</p>
      <div class="choices">
        <label for="speedInput">Speed: </label>
        <input type="number" id="speedInput" value="2" min="1" max="10" />
        <label for="colorInput">Color: </label>
        <input type="color" id="colorInput" value="#0000ff" />
        <label for="sizeInput">Size: </label>
        <input type="number" id="sizeInput" value="20" min="5" max="100" />
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
          <template #code>document.getElementById</template>
          <template #item>
            In this code, we use the document.getElementById method to get HTML elements, such 
            as getting the canvas element robotCanvas and the value of the user input. Through 
            these DOM operations, we can access elements on the page and change their behaviour and display content through JavaScript.
          </template>
        </code-item>
        <code-item>
          <template #code>addEventListener('click', ()=>{})</template>
          <template #item>Click the function that is called</template>
        </code-item>
        <code-item>
          <template #code>requestAnimationFrame(function)</template>
          <template #item>
          To create a smooth animation effect, we use the requestAnimationFrame method. 
          This method tells the browser to call the specified function before the next 
          redraw. In this function, we update the position of the circle and redraw it. 
          By constantly changing the position of the circle, we achieve a moving effect.
          </template>
        </code-item>
        <code-item>
          <template #code>cancelAnimationFrame(function)</template>
          <template #item>
            Through this function that cancels the loop</template
          >
        </code-item>

        <code-item>
          <template #code>parseInt()</template>
          <template #item
            >Because the input data in the input box is sometimes in the form of
            a string, we need to convert this character form to the number form
            we need</template
          >
        </code-item>

        <p>
          If the coordinates of the ball are out of range, we will reverse the
          velocity to achieve the effect of rebound
        </p>
        <br>
        <p>
          Variable Scope and Life Cycle : The scope of a variable determines where 
          we can access or modify it. In this code, we use lets to define variables 
          such as x, y, and dx, which are continually updated during the animation 
          function to keep the animation coherent.
        </p>
        <br>
        <p>
          Conditional Statements in JavaScript : During the animation, we use conditional 
          statements to detect whether the circle touches the canvas boundary or not. If it 
          touches it, we reverse the direction of its movement by changing the sign of the dx. 
          This conditional control is a common technique used in animation logic to ensure that 
          the animation stays within a given range.
        </p>
        <br>
 
        <my-footer week="1" num="2"></my-footer>
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
