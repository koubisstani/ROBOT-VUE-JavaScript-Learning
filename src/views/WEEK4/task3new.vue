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

const userCode = ref(`// Implement the Q-Learning algorithm here
// Provided parameters: maze, start, goal, alpha, gamma, epsilon, maxSteps
// The function should return an array of coordinates: [{x:0,y:0}, ..., {x:9,y:4}]

function qLearning(maze, start, goal) {
  // Initialize Q-table, train for multiple episodes, then extract the optimal path
  const path = [start, goal]; // Example placeholder, replace with actual path
  return path;
}
`)

// Default maze and points
const maze = [
  [0,1,0,0,0,0,1,0,0,0],
  [0,1,0,1,1,0,1,1,1,0],
  [0,0,0,0,1,0,0,0,1,0],
  [1,1,1,0,1,1,1,0,1,0],
  [0,0,0,0,0,0,1,0,0,'G'],
]
const start = { x: 0, y: 0 }
const goal  = { x: 9, y: 4 }
const alpha   = 0.1
const gamma   = 0.9
const epsilon = 0.2
const maxSteps = 200

const canvasRef = ref(null)
let ctx = null

function runCode() {
  if (!ctx) return
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  try {
    const fn = new Function(
      'ctx','canvas','maze','start','goal','alpha','gamma','epsilon','maxSteps',
      userCode.value + '\nreturn qLearning(maze,start,goal)'
    )
    const path = fn(ctx, canvasRef.value, maze, start, goal, alpha, gamma, epsilon, maxSteps)
    const cellW = 40, cellH = 40
    maze.forEach((row,j) => row.forEach((v,i) => {
      ctx.fillStyle = v === 1 ? '#333' : (v === 'G' ? '#4caf50' : '#fff')
      ctx.fillRect(i*cellW, j*cellH, cellW-2, cellH-2)
    }))
    if (Array.isArray(path)) {
      ctx.strokeStyle = '#e91e63'
      ctx.lineWidth = 4
      ctx.beginPath()
      path.forEach((p,k) => {
        const x = p.x * cellW + cellW/2
        const y = p.y * cellH + cellH/2
        k === 0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y)
      })
      ctx.stroke()
    }
  } catch (err) {
    console.error(err)
    alert('Execution error: ' + err.message)
  }
}

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
})
</script>

<template>
  <my-container2>
    <my-title
      title1="Week 4 Task 3"
      title2="Maze Escape with Q-Learning (User Implementation)"
    />

    <div class="task-desc">
      <p><strong>Exercise Topic:</strong> Implement Q-Learning to find the maze exit.</p>
      <p><strong>Objective:</strong> Understand states, actions, rewards. Write the algorithm and observe the resulting path.</p>
      <p>Enter your Q-Learning code on the left and click "Run" to draw the maze and path on the right.</p>
    </div>

    <div class="layout">
      <div class="code-area">
        <label>Implement Q-Learning here:</label>
        <textarea
          v-model="userCode"
          placeholder="function qLearning(maze, start, goal) { ... }"
        />
        <button @click="runCode">Run ▶</button>
      </div>

      <div class="canvas-area">
        <canvas
          ref="canvasRef"
          width="400"
          height="200"
        />
      </div>
    </div>
  </my-container2>
</template>

<style lang="less" scoped>
.task-desc {
  background: #f0f8ff;
  border-left: 4px solid #00796b;
  padding: 16px;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.6;
}
.layout {
  display: flex;
  gap: 16px;
}
.code-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.code-area label {
  margin-bottom: 8px;
  font-weight: bold;
}
.code-area textarea {
  flex: 1;
  width: 100%;
  height: 300px;
  font-family: monospace;
  font-size: 14px;
  padding: 8px;
  border: 1px solid #ccc;
  resize: vertical;
}
.code-area button {
  margin-top: 8px;
  align-self: flex-end;
  padding: 6px 12px;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.code-area button:hover {
  background: #369f6e;
}
.canvas-area {
  flex: 1;
}
.canvas-area canvas {
  width: 100%;
  height: auto;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>