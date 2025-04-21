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

const userCode = ref(`// Enter the JavaScript drawing code here, e.g.:\n// ctx.fillStyle = ‘orange’;\n// ctx.fillRect(50,50,100,100);\n`)
const canvasRef = ref(null)
let ctx = null

function runCode() {
  if (!ctx) return
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  try {
    const fn = new Function('ctx','canvas', userCode.value)
    fn(ctx, canvasRef.value)
  } catch (err) {
    console.error(err)
    alert('execution error：' + err.message)
  }
}

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
})
</script>

<template>
  <my-container2>
    <my-title
      title1="Week 3 Task 2"
      title2="Velocity Feedback Simulation "
    />

    <!-- 任务说明 -->
    <div class="task-desc">
      <p>
        This exercise is designed to allow learners to use the HTML5 Canvas API to customise their drawings and deepen their understanding of the animation rendering principles in the Velocity Feedback module. Use the <code>ctx</code> 提供的绘图方法，
        Implement a simple visualisation. Example:
      </p>
      <ul>
        <li>Plot the trajectory of a dot moving in time；</li>
        <li>Real-time display of speed/position values using histograms or bar graphs；</li>
        <li>combining <code>ctx.fillRect</code>、<code>ctx.arc</code>、<code>ctx.stroke</code> and other methods.</li>
      </ul>
      <p>Click the ‘Run’ button when you are done and view the results in the right canvas area.</p>
    </div>

    <div class="layout">
      <!-- 左侧：代码输入区 -->
      <div class="code-area">
        <label>Enter the JavaScript code here:</label>
        <textarea
          v-model="userCode"
          placeholder="Enter JavaScript drawing code here"
        />
        <button @click="runCode">RUN ▶</button>
      </div>

      <!-- 右侧：效果展示区 -->
      <div class="canvas-area">
        <canvas
          ref="canvasRef"
          width="600"
          height="400"
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
.task-desc ul {
  margin: 8px 0;
  padding-left: 20px;
}
.task-desc code {
  background: #eef;
  padding: 2px 4px;
  border-radius: 3px;
}

/* 原有布局样式 */
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
  background: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.code-area button:hover {
  background: #27ae60;
}
.canvas-area {
  flex: 1;
}
.canvas-area canvas {
  width: 100%;
  height: auto;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
