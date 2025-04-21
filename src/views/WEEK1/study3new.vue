<script>
import MyFooter from '@/components/MyFooter.vue'
import MyContainer from '@/components/MyContainer.vue'
import StudyContent from '@/components/StudyContent.vue'
import codeItem from '@/components/codeItem.vue'
import MyTitle from '@/components/MyTitle.vue'
import mydemo from '@/components/demo.vue'
import demoCode from '@/components/demoCode.vue'

export default {
  components: {
    'my-title': MyTitle,
    'my-footer': MyFooter,
    'my-container': MyContainer,
    'study-content': StudyContent,
    'code-item': codeItem,
    'my-demo': mydemo,
    'demo-code': demoCode,
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
  let dx = 2 // Initial speed
  let dy = 2 // Initial speed
  let animationId
  let XisRunning = false
  let YisRunning = false

  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = 'blue'
    ctx.fill()
    ctx.closePath()
  }

  function update() {
    const LevelSpeed = parseInt(
      document.getElementById('LevelSpeedInput').value
    )
    const VerticalSpeed = parseInt(
      document.getElementById('VerticalSpeedInput').value
    )
    if (XisRunning) {
      x += dx * LevelSpeed
    }
    if (YisRunning) {
      y += dy * VerticalSpeed
    }

    if (x + radius > canvas.width || x - radius < 0) {
      dx = -dx // Reverse direction
    }
    if (y + radius > canvas.height || y - radius < 0) {
      dy = -dy // Reverse direction
    }

    drawCircle()
    updateCodeDisplay() // Update code display
    animationId = requestAnimationFrame(update)
  }

  function updateCodeDisplay(speed) {
    const codeDisplay = document.getElementById('codeDisplay')
    codeDisplay.textContent = `
    const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')
  let x = canvas.width / 2
  let y = canvas.height / 2
  let radius = 20
  let dx = 2 // Initial speed
  let dy = 2 // Initial speed
  let animationId
  let XisRunning = false
  let YisRunning = false

  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = 'blue'
    ctx.fill()
    ctx.closePath()
  }

  function update() {
    const LevelSpeed = parseInt(
      document.getElementById('LevelSpeedInput').value
    )
    const VerticalSpeed = parseInt(
      document.getElementById('VerticalSpeedInput').value
    )
    if (XisRunning) {
      x += dx * LevelSpeed
    }
    if (YisRunning) {
      y += dy * VerticalSpeed
    }

    if (x + radius > canvas.width || x - radius < 0) {
      dx = -dx // Reverse direction
    }
    if (y + radius > canvas.height || y - radius < 0) {
      dy = -dy // Reverse direction
    }

    drawCircle()
    updateCodeDisplay() // Update code display
    animationId = requestAnimationFrame(update)
  }

  document.getElementById('LevelSpeedInput').addEventListener('input', () => {
    dx = parseInt(document.getElementById('LevelSpeedInput').value)
  })

  document
    .getElementById('VerticalSpeedInput')
    .addEventListener('input', () => {
      dy = parseInt(document.getElementById('VerticalSpeedInput').value)
    })

  document.getElementById('LevelButton').addEventListener('click', () => {
    if (XisRunning) {
      cancelAnimationFrame(animationId)
      document.getElementById('LevelButton').textContent = 'start level'
    } else {
      update()
      document.getElementById('LevelButton').textContent = 'stop level'
    }
    XisRunning = !XisRunning
  })

  document.getElementById('VerticalButton').addEventListener('click', () => {
    if (YisRunning) {
      cancelAnimationFrame(animationId)
      document.getElementById('VerticalButton').textContent = 'start vertical'
    } else {
      update()
      document.getElementById('VerticalButton').textContent = 'stop vertical'
    }
    YisRunning = !YisRunning
  })

  drawCircle()
})
    `
  }

  document.getElementById('LevelSpeedInput').addEventListener('input', () => {
    dx = parseInt(document.getElementById('LevelSpeedInput').value)
  })

  document
    .getElementById('VerticalSpeedInput')
    .addEventListener('input', () => {
      dy = parseInt(document.getElementById('VerticalSpeedInput').value)
    })

  document.getElementById('LevelButton').addEventListener('click', () => {
    if (XisRunning) {
      cancelAnimationFrame(animationId)
      document.getElementById('LevelButton').textContent = 'start level'
    } else {
      update()
      document.getElementById('LevelButton').textContent = 'stop level'
    }
    XisRunning = !XisRunning
  })

  document.getElementById('VerticalButton').addEventListener('click', () => {
    if (YisRunning) {
      cancelAnimationFrame(animationId)
      document.getElementById('VerticalButton').textContent = 'start vertical'
    } else {
      update()
      document.getElementById('VerticalButton').textContent = 'stop vertical'
    }
    YisRunning = !YisRunning
  })

  drawCircle()
  updateCodeDisplay() // Initial code display
})
</script>

<script setup></script>

<template>
  <my-container>
    <header>
      <my-title title1="Move up, down, left and right"></my-title>
      <h1></h1>
      <p>
        Clicking on the different buttons will allow the ball to move in
        different directions
      </p>
      <div class="choices">
        <label for="VerticalSpeedInput">Vertical Speed: </label>
        <input
          type="number"
          id="VerticalSpeedInput"
          value="2"
          min="1"
          max="10"
        />
        <label for="LevelSpeedInput">Level Speed: </label>
        <input type="number" id="LevelSpeedInput" value="2" min="1" max="10" />
        <el-button id="LevelButton" style="margin-left: 20px"
          >start level</el-button
        >
        <el-button id="VerticalButton" style="margin-left: 20px"
          >start vertical</el-button
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
          <template #code>The variables x and y:</template>
          <template #item>
            x controls the position of the circle in the horizontal (left-right) direction.
y controls the position of the circle in the vertical (up and down) direction.
          </template>

        </code-item>
        <code-item><template #code>Variables dx and dy:</template>
        <template #item>dx represents the incremental horizontal movement of the circle, with an initial value of 2.
          dy represents each incremental movement of the circle in the vertical direction, with an initial value of 2.</template>
        </code-item>  
        <code-item>
        <template #code>Horizontal and vertical speed input:</template>
        <template #item>Get the speed values entered by the user in the input box via document.getElementById(‘LevelSpeedInput’) and document.getElementById(‘VerticalSpeedInput’), which are used to control the horizontal and vertical speed respectively.
          These two values are updated in real time as the user enters them and affect the movement of x and y.</template>
        </code-item>
        
        <my-demo>
          <template #code>
          <demo-code
            type="JavaScript"
            code='
if (XisRunning) {
  x += dx * LevelSpeed; // Updates the horizontal position according to the entered velocity value
}

if (x + radius > canvas.width || x - radius < 0) {
  dx = -dx; // Reverse direction on reaching the boundary

}

if (YisRunning) {
  y += dy * VerticalSpeed; // Updates the vertical position according to the input velocity value
}

if (y + radius > canvas.height || y - radius < 0) {
  dy = -dy; // Reverse direction when reaching the upper and lower boundaries
}

              '
          ></demo-code>

          <demo-code
          type="JavaScript"
          code="document.getElementById('LevelSpeedInput').addEventListener('input', () => {
  dx = parseInt(document.getElementById('LevelSpeedInput').value);
});

document.getElementById('VerticalSpeedInput').addEventListener('input', () => {
  dy = parseInt(document.getElementById('VerticalSpeedInput').value);
});"

          </demo-code>
          </template>
        </my-demo>  
        <p>
          The user can enter the horizontal and vertical speeds through two input boxes (LevelSpeedInput and VerticalSpeedInput).
When the user enters a new speed, the programme listens to the input event and immediately assigns the value of the new input to dx or dy, which affects the speed of the circle.
        </p>
        <br>
        <br>
        <p>
          In order to achieve this, we only need to make a dy on the original
          basis to represent the vertical velocity, and then click the vertical
          button to manipulate the position of the ball y in the vertical
          direction, and then execute the loop function at the same time to
          render
        </p>

        <my-footer week="1" num="3"></my-footer>
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
