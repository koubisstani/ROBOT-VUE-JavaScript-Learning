<template>
  <my-container>
    <header>
      <my-title title1="Bouncing Balls Simulation" />
      <p>
        Click the button to start or stop the simulation of bouncing colored balls. This teaches you how to animate objects, detect boundary collisions and simulate ball interactions using Canvas and JavaScript.
      </p>
      <el-button id="startButton">Start / Stop</el-button>
    </header>

    <main style="margin-top: 20px">
      <canvas id="robotCanvas" width="1200" height="600"></canvas>
      <div id="codeDisplay"></div>

      <!-- 模块介绍部分 -->
      <section class="ball-intro">
        <h2>Why Learn Ball Collision Simulation?</h2>
        <p>
          Physics-based animations like ball collision are commonly used in simulations, games and teaching environments. This project helps you understand how to use <strong>Canvas API</strong> and <strong>basic physics</strong> to simulate motion and interactions between objects.
        </p>
        <p>
          You'll implement <strong>object movement</strong>, <strong>boundary reflection</strong>, and <strong>collision detection</strong> using Euclidean distance calculations.
        </p>
      </section>

      <!-- 核心概念讲解 -->
      <div class="study-highlight">
        <p><strong>Core Concepts Covered:</strong></p>
        <p>
          <code>ctx.arc(x, y, radius, 0, 2π)</code><br />
          Draws each ball as a filled circle using Canvas.
        </p>
        <p>
          <code>ball.x + radius > canvas.width</code><br />
          Boundary detection logic to reverse movement at canvas edges.
        </p>
        <p>
          <code>Math.hypot(ball.x - otherBall.x, ball.y - otherBall.y)</code><br />
          Checks for collisions between two balls based on center distance.
        </p>
        <p>
          <code>requestAnimationFrame()</code><br />
          Efficient animation loop using browser repaint cycles.
        </p>
      </div>
    </main>

    <footer>
      <study-content>
        <code-item>
          <template #code>Boundary Detection of Balls</template>
          <template #item>
            When a ball touches the edge of the canvas, it should bounce back. This is achieved by checking if the ball’s position plus/minus its radius exceeds the canvas dimensions.
          </template>
        </code-item>

        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
  ball.dx = -ball.dx
}
if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
  ball.dy = -ball.dy
}"
            />
          </template>
        </my-demo>

        <code-item>
          <template #code>Ball-to-Ball Collision Detection</template>
          <template #item>
            If the distance between two balls is less than the sum of their radii, we consider that a collision has occurred and invert their motion directions accordingly.
          </template>
        </code-item>

        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
for (let otherBall of balls) {
  if (otherBall !== ball) {
    const dist = Math.hypot(ball.x - otherBall.x, ball.y - otherBall.y)
    if (dist < ball.radius + otherBall.radius) {
      ball.dx = -ball.dx
      ball.dy = -ball.dy
      otherBall.dx = -otherBall.dx
      otherBall.dy = -otherBall.dy
    }
  }
}"
            />
          </template>
        </my-demo>

        <my-footer week="2" num="3" />
      </study-content>
    </footer>
  </my-container>
</template>

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
    'demo-code': demoCode
  }
}
</script>

<script setup>
import { nextTick } from 'vue'

nextTick(() => {
  const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')

  const balls = [
    { x: 100, y: 100, radius: 20, color: 'red', dx: 2, dy: 2 },
    { x: 200, y: 150, radius: 30, color: 'green', dx: 3, dy: 3 },
    { x: 300, y: 200, radius: 40, color: 'blue', dx: 1, dy: 1 }
  ]

  let running = false
  let animationId

  function drawBall(ball) {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    ctx.fillStyle = ball.color
    ctx.fill()
    ctx.closePath()
  }

  function moveBall(ball) {
    ball.x += ball.dx
    ball.y += ball.dy

    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
      ball.dx = -ball.dx
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
      ball.dy = -ball.dy
    }

    for (let otherBall of balls) {
      if (otherBall !== ball) {
        const dist = Math.hypot(ball.x - otherBall.x, ball.y - otherBall.y)
        if (dist < ball.radius + otherBall.radius) {
          ball.dx = -ball.dx
          ball.dy = -ball.dy
          otherBall.dx = -otherBall.dx
          otherBall.dy = -otherBall.dy
        }
      }
    }
  }

  function animate() {
    if (!running) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let ball of balls) {
      moveBall(ball)
      drawBall(ball)
    }

    animationId = requestAnimationFrame(animate)
  }

  document.querySelector('#startButton').addEventListener('click', () => {
    running = !running
    if (running) {
      animate()
    } else {
      cancelAnimationFrame(animationId)
    }
  })

const codeDisplay = document.getElementById('codeDisplay')
codeDisplay.textContent = `
const balls = [
  { x: 100, y: 100, radius: 20, color: 'red', dx: 2, dy: 2 },
  { x: 200, y: 150, radius: 30, color: 'green', dx: 3, dy: 3 },
  { x: 300, y: 200, radius: 40, color: 'blue', dx: 1, dy: 1 }
]

let running = false
let animationId

function drawBall(ball) {
  ctx.beginPath()
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
  ctx.fillStyle = ball.color
  ctx.fill()
  ctx.closePath()
}

function moveBall(ball) {
  ball.x += ball.dx
  ball.y += ball.dy

  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.dy = -ball.dy
  }

  for (let otherBall of balls) {
    if (otherBall !== ball) {
      const dist = Math.hypot(ball.x - otherBall.x, ball.y - otherBall.y)
      if (dist < ball.radius + otherBall.radius) {
        ball.dx = -ball.dx
        ball.dy = -ball.dy
        otherBall.dx = -otherBall.dx
        otherBall.dy = -otherBall.dy
      }
    }
  }
}

function animate() {
  if (!running) return
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (let ball of balls) {
    moveBall(ball)
    drawBall(ball)
  }

  animationId = requestAnimationFrame(animate)
}

document.querySelector('#startButton').addEventListener('click', () => {
  running = !running
  if (running) {
    animate()
  } else {
    cancelAnimationFrame(animationId)
  }
})
`

})
</script>

<style lang="less" scoped>
#robotCanvas {
  background-color: #d3d3d3;
}

#codeDisplay {
  width: 100%;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid black;
  background-color: #f4f4f4;
  font-family: monospace;
  white-space: pre-wrap;
  font-size: 18px;
}

.ball-intro {
  margin-top: 30px;
  padding: 20px;
  background: #eef6f6;
  border-left: 6px solid #007b7b;
  border-radius: 8px;

  h2 {
    font-size: 22px;
    margin-bottom: 10px;
    color: #007b7b;
  }

  p {
    margin: 10px 0;
    line-height: 1.6;
  }
}

.study-highlight {
  background-color: #fff8dc;
  padding: 20px;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.08);

  p {
    margin-bottom: 10px;
    font-size: 16px;
  }

  code {
    background: #f0f0f0;
    padding: 4px 6px;
    border-radius: 4px;
    font-family: monospace;
  }
}
</style>
