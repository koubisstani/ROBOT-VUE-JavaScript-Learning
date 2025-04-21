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
import { ref, onMounted } from 'vue'

// Canvas and context setup
const canvasRef = ref(null)
let ctx = null
const WIDTH = 400, HEIGHT = 400
const SPEED_SOUND = 343 // m/s
const SCALE = 50       // pixels per meter

// Obstacles and sensor readings
let obstacles = []
const readings = ref([])

// Editable user code
const userCode = ref(`// Example usage:
// initObstacles(4)
// drawScene()
// sendPing()
`)

function initObstacles(count = 5) {
  obstacles = []
  for (let i = 0; i < count; i++) {
    obstacles.push({
      x: Math.random() * (WIDTH - 40) + 20,
      y: Math.random() * (HEIGHT - 40) + 20,
      r: 10
    })
  }
  drawScene()
}

function drawScene() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
  ctx.fillStyle = '#b71c1c'
  obstacles.forEach(o => {
    ctx.beginPath()
    ctx.arc(o.x, o.y, o.r, 0, 2 * Math.PI)
    ctx.fill()
  })
  ctx.fillStyle = '#1e88e5'
  ctx.fillRect(WIDTH/2 - 10, HEIGHT/2 - 15, 20, 30)
}

function sendPing() {
  readings.value = []
  const cx = WIDTH/2, cy = HEIGHT/2
  obstacles.forEach(o => {
    const distPx = Math.hypot(o.x - cx, o.y - cy)
    const distM = distPx / SCALE
    readings.value.push(distM.toFixed(2) + ' m')
    animateWave(distPx)
  })
}

function animateWave(maxRadius) {
  let r = 0
  function step() {
    if (r > maxRadius) return
    drawScene()
    ctx.strokeStyle = 'rgba(30,136,229,0.5)'
    ctx.beginPath()
    ctx.arc(WIDTH/2, HEIGHT/2, r, 0, 2 * Math.PI)
    ctx.stroke()
    r += 2
    requestAnimationFrame(step)
  }
  step()
}

function runCode() {
  try {
    const fn = new Function(
      'initObstacles','drawScene','sendPing','ctx','canvas',
      userCode.value
    )
    fn(initObstacles, drawScene, sendPing, ctx, canvasRef.value)
  } catch (err) {
    alert('Execution error: ' + err.message)
  }
}

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
  initObstacles()
})
</script>

<template>
  <my-container2>
    <!-- Title -->
    <my-title
      title1="Week 4 Task 1"
      title2="Ultrasonic Sensor Simulation"
    />

    <!-- Task description -->
    <div class="task-desc">
      <p>
        Simulate an ultrasonic sensor perched on a vehicle in the center of the canvas. Random obstacles appear on each load.<br>
        Use the provided functions below to:
      </p>
      <ul>
        <li><strong>initObstacles(n)</strong>: Generate <em>n</em> random obstacles.</li>
        <li><strong>drawScene()</strong>: Redraw the car and obstacles.</li>
        <li><strong>sendPing()</strong>: Emit ultrasonic pings and display measured distances.</li>
      </ul>
      <p>Experiment by changing obstacle counts and observing how the measured distances update.</p>
    </div>

    <div class="layout">
      <!-- Code editor -->
      <div class="code-area">
        <label>Enter JavaScript code:</label>
        <textarea v-model="userCode" placeholder="// your code here" />
        <button @click="runCode">Run ▶</button>
        <div class="readings">
          <p>Distances (m):</p>
          <ul>
            <li v-for="(d,i) in readings" :key="i">{{ d }}</li>
          </ul>
        </div>
        <p class="formula">
          <em>Distance = (Speed of Sound × Time) / 2</em>
        </p>
      </div>

      <!-- Canvas display -->
      <div class="canvas-area">
        <canvas ref="canvasRef" :width="WIDTH" :height="HEIGHT" />
      </div>
    </div>
  </my-container2>
</template>

<style lang="less" scoped>
.task-desc {
  background: #e3f2fd;
  border-left: 4px solid #1976d2;
  padding: 16px;
  margin-bottom: 20px;
}
.layout { display: flex; gap: 20px; }
.code-area { flex: 1; display: flex; flex-direction: column; }
.code-area label { font-weight: bold; margin-bottom: 8px; }
.code-area textarea { flex: 1; width: 100%; height: 200px; font-family: monospace; padding: 8px; border: 1px solid #ccc; resize: vertical; margin-bottom: 8px; }
.code-area button { padding: 8px 16px; background: #43a047; color: #fff; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 12px; }
.readings ul { list-style: disc; padding-left: 20px; margin: 0 0 12px; max-height: 100px; overflow-y: auto; }
.formula { font-size: 14px; color: #555; }
.canvas-area { flex: 1; }
.canvas-area canvas { width: 100%; background: #fafafa; border: 1px solid #ccc; border-radius: 4px; }
</style>