<template>
  <my-container>
    <header>
      <my-title 
        title1="Drawing Robot Top View" 
        title2="Learn how to create a top view of a robot using the Canvas API."
      ></my-title>
      <p>
        In this study, we will demonstrate how simple JavaScript language can be used to draw simplified robots. 
        This robot can be reused in subsequent projects.
      </p>
      <p>
        So draw a little robot in your favourite shape and colour oh? Note: The drawing is a top view of the robot.
      </p>
    </header>

    <main style="margin-top: 20px">
      <!-- 机器人组件 -->
      <robot></robot>

      <!-- 代码展示 -->
      <div id="codeDisplay"></div>

      <!-- 新增机器人介绍模块 -->
      <section class="robot-intro">
        <h2>Real-Life Applications of Robotic Carts</h2>
        <p>
          <strong>Robotics</strong> is most widely used to replace human contributions with machine-generated responses. 
          When humans interact with robots, both must anticipate actions based on current conditions. 
          Tremendous efforts have been made to achieve this perfect coordination.
        </p>
        <p>
          To decipher complex environments, the inference of robot mobility and the alteration of random unstructured scenes is a complex task in the field of vision processing and imaging.
        </p>
        <p>
          In real life, robotic carts are widely used in <strong>teaching, research, competitions</strong> and <strong>creative projects</strong>. They are ideal platforms combining <strong>embedded control, sensor technology</strong> and <strong>AI algorithms</strong>.
        </p>

        <p><strong>Functional Modules Include:</strong></p>
        <ul>
          <li>Battery module</li>
          <li>Control module</li>
          <li>Drive module</li>
          <li>Motion module</li>
          <li>Sensor module</li>
          <li>Image module</li>
          <li>Communication module</li>
        </ul>

        <p><strong>Common Scenarios:</strong></p>
        <ul>
          <li>Trolley robot patrolling</li>
          <li>Obstacle avoidance</li>
          <li>Motion in different environments</li>
          <li>Image recognition and tracking</li>
        </ul>
      </section>
    </main>

    <footer>
    <study-content>
      <div class="study-highlight">
        <p><strong>Canvas API and JavaScript Concepts Covered:</strong></p>

        <p>
          <code>ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)</code><br />
          Used to draw the robot's body as an ellipse in the Robot component.
        </p>

        <p>
          <code>ctx.fillRect(x, y, width, height)</code><br />
          Draws filled rectangles, which are used for the robot's wheels.
        </p>

        <p>
          <code>ctx.beginPath() / ctx.stroke()</code><br />
          Defines and draws paths like the axle and sensor outline.
        </p>

        <p>
          <code>ctx.fillStyle = 'red' / '#000'</code><br />
          Sets color for the drawing modules.
        </p>
      </div>

      <my-footer week="3" num="1" />
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
import Robot from '@/components/robot.vue'

export default {
  components: {
    'my-title': MyTitle,
    'my-footer': MyFooter,
    'my-container': MyContainer,
    'study-content': StudyContent,
    'code-item': codeItem,
    'robot': Robot
  }
}
</script>

<script setup>
import { nextTick } from 'vue'

nextTick(() => {
  const codeDisplay = document.getElementById('codeDisplay')
  if (codeDisplay) {
    codeDisplay.textContent = `
function drawRobot() {
  const centerX = canvas.width / 2
  const centerY = canvas.height / 2

  // Drawing the blue oval body of a robot
  ctx.fillStyle = '#007b7b'
  ctx.beginPath()
  ctx.ellipse(centerX, centerY, 20, 25, 0, 0, Math.PI * 2)
  ctx.fill()

  // Drawing the axle (thick black line in the centre)
  ctx.strokeStyle = '#000'
  ctx.lineWidth = 6
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - 30)
  ctx.lineTo(centerX, centerY + 30)
  ctx.stroke()

  // Draw two wheels (black rectangles)
  ctx.fillStyle = '#000'
  ctx.fillRect(centerX - 15, centerY - 35, 30, 10)
  ctx.fillRect(centerX - 15, centerY + 25, 30, 10)

  // Red sensor dot on the right side
  ctx.fillStyle = 'red'
  ctx.beginPath()
  ctx.arc(centerX + 20, centerY, 4, 0, Math.PI * 2)
  ctx.fill()
}
    `
  }
})
</script>

<style scoped lang="less">
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

.robot-intro {
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

  ul {
    margin-left: 20px;
    list-style-type: disc;
    line-height: 1.6;
  }
}

/* ✅ 新增教学提示区域样式 */
.study-highlight {
  background-color: #fff8dc; // 浅黄色
  padding: 20px;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.08);

  p {
    margin-bottom: 10px;
    font-size: 16px;
  }

  strong {
    color: #333;
  }

  code {
    background: #f0f0f0;
    padding: 3px 6px;
    border-radius: 4px;
    font-family: monospace;
  }
}
</style>

