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

const canvasRef = ref(null)
let ctx = null
const WIDTH = 400, HEIGHT = 200

// PWM state
const dutyCycle = ref(0.5) // default 50%
const speed = ref('')
const maxSpeed = 100 // e.g. 100 rpm

// Functions exposed to user code
function setDutyCycle(val) {
  dutyCycle.value = Math.min(Math.max(val, 0), 1)
  updateDisplay()
}

function updateDisplay() {
  // compute speed
  speed.value = (dutyCycle.value * maxSpeed).toFixed(1) + ' rpm'
  // draw waveform
  drawPWM()
}

function drawPWM() {
  if (!ctx) return
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
  const periods = 5
  const periodWidth = WIDTH / periods
  for (let i = 0; i < periods; i++) {
    const x0 = i * periodWidth
    const highWidth = periodWidth * dutyCycle.value
    ctx.fillStyle = '#42b983'
    ctx.fillRect(x0, 0, highWidth, HEIGHT / 2)
    ctx.fillStyle = '#e0e0e0'
    ctx.fillRect(x0 + highWidth, 0, periodWidth - highWidth, HEIGHT / 2)
    // waveform baseline
    ctx.strokeStyle = '#333'
    ctx.beginPath()
    ctx.moveTo(x0, HEIGHT / 2)
    ctx.lineTo(x0 + periodWidth, HEIGHT / 2)
    ctx.stroke()
  }
  // draw speed text
  ctx.fillStyle = '#000'
  ctx.font = '16px sans-serif'
  ctx.fillText('Speed: ' + speed.value, 10, HEIGHT - 10)
}

function runCode() {
  try {
    const fn = new Function('setDutyCycle', 'draw', userCode.value)
    fn(setDutyCycle, drawPWM)
  } catch (err) {
    alert('Execution error: ' + err.message)
  }
}

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
  updateDisplay()
})
</script>

<template>
  <my-container2>
    <my-title
      title1="Week 3 Task 3"
      title2="PWM Duty Cycle & Motor Speed"
    />

    <div class="task-desc">
      <p>This exercise lets you control a simulated motor's speed by adjusting PWM duty cycle.</p>
      <ul>
        <li>Call <code>setDutyCycle(x)</code> with <code>x</code> between 0 and 1.</li>
        <li><code>draw()</code> refreshes the waveform and speed display.</li>
      </ul>
      <p>Example: <code>setDutyCycle(0.75); draw();</code></p>
    </div>

    <div class="layout">
      <!-- code input -->
      <div class="code-area">
        <label>Enter JavaScript here:</label>
        <textarea v-model="userCode" placeholder="// e.g. setDutyCycle(0.8); draw();" />
        <button @click="runCode">Run ▶</button>
      </div>

      <!-- canvas output -->
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
.code-area textarea { flex: 1; width: 100%; height: 150px; font-family: monospace; padding: 8px; border: 1px solid #ccc; resize: vertical; margin-bottom: 8px; }
.code-area button { padding: 8px 16px; background: #1976d2; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
.canvas-area { flex: 1; }
.canvas-area canvas { width: 100%; background: #fafafa; border: 1px solid #ccc; border-radius: 4px; }
</style>