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

// User command input, one per line: e.g. "forward 100", "left 120", "forward 100", "left 120", "forward 100"
const commands = ref(`forward 100
left 120
forward 100
left 120
forward 100
left 120`)  

const canvasRef = ref(null)
let ctx = null

// Car state
let posX = 200, posY = 200
let angle = -90  // facing up
const speed = 1  // pixels per frame
let cmdList = []
let cmdIndex = 0
let moveProgress = 0

function drawScene() {
  // clear
  ctx.clearRect(0, 0, 400, 400)
  // draw equilateral triangle path (for reference)
  ctx.strokeStyle = '#ccc'
  ctx.lineWidth = 2
  const size = 100
  const center = { x:200, y:200 }
  const pts = [0,120,240].map(deg => {
    const rad = (deg-90)*Math.PI/180
    return { x: center.x + size*Math.cos(rad), y: center.y + size*Math.sin(rad) }
  })
  ctx.beginPath()
  pts.forEach((p,i) => i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y))
  ctx.closePath()
  ctx.stroke()
  // draw car as triangle
  ctx.save()
  ctx.translate(posX, posY)
  ctx.rotate(angle * Math.PI/180)
  ctx.fillStyle = '#42b983'
  ctx.beginPath()
  ctx.moveTo(0, -8)
  ctx.lineTo(6, 8)
  ctx.lineTo(-6, 8)
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}

function step() {
  if (cmdIndex >= cmdList.length) return
  const [cmd, val] = cmdList[cmdIndex]
  if (cmd === 'forward') {
    if (moveProgress < val) {
      // move one pixel
      posX += Math.cos(angle*Math.PI/180) * speed
      posY += Math.sin(angle*Math.PI/180) * speed
      moveProgress++
    } else {
      cmdIndex++
      moveProgress = 0
    }
  } else if (cmd === 'left') {
    if (moveProgress < val) {
      angle -= 1
      moveProgress++
    } else {
      cmdIndex++
      moveProgress = 0
    }
  } else if (cmd === 'right') {
    if (moveProgress < val) {
      angle += 1
      moveProgress++
    } else {
      cmdIndex++
      moveProgress = 0
    }
  } else {
    cmdIndex++
  }
  drawScene()
  requestAnimationFrame(step)
}

function runCommands() {
  posX = 200; posY = 200; angle = -90
  cmdIndex = 0; moveProgress = 0
  // parse
  cmdList = commands.value.split('\n')
    .map(line => line.trim().split(/\s+/))
    .map(([c,v]) => [c.toLowerCase(), parseInt(v)||0])
  drawScene()
  requestAnimationFrame(step)
}

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
  drawScene()
})
</script>

<template>
  <my-container2>
    <my-title
      title1="Week 4 Task 2"
      title2="Triangle Path Control"
    />
    <div class="task-desc">
      <p><strong>Exercise Topic:</strong> Control the car along an equilateral triangle using commands.</p>
      <p><strong>Objective:</strong> Learn precise motion control, path planning, and JS animation techniques.</p>
      <p>Enter commands below (e.g., <code>forward 100</code>, <code>left 120</code>) and click Run to execute.</p>
    </div>
    <div class="layout">
      <div class="code-area">
        <label>Enter commands:</label>
        <textarea v-model="commands" placeholder="forward 100\nleft 120\n..." />
        <button @click="runCommands">Run ▶</button>
      </div>
      <div class="canvas-area">
        <canvas ref="canvasRef" width="400" height="400"/>
      </div>
    </div>
  </my-container2>
</template>

<style lang="less" scoped>
.task-desc {
  background: #fff8e1;
  border-left: 4px solid #ffb300;
  padding: 16px;
  margin-bottom: 20px;
}
.layout { display: flex; gap: 16px; }
.code-area { flex: 1; display: flex; flex-direction: column; }
.code-area label { font-weight: bold; margin-bottom: 8px; }
.code-area textarea { flex: 1; width: 100%; height: 200px; font-family: monospace; padding: 8px; border: 1px solid #ccc; resize: vertical; }
.code-area button { margin-top: 8px; align-self: flex-end; padding: 6px 12px; background: #ffb300; color: white; border: none; border-radius: 4px; cursor: pointer; }
.code-area button:hover { background: #e0a800; }
.canvas-area { flex: 1; }
.canvas-area canvas { width: 100%; background: #fafafa; border: 1px solid #ccc; border-radius: 4px; }
</style>