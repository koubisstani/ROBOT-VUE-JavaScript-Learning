<template>
  <my-container>
    <header>
      <!-- 标题介绍 -->
      <my-title 
      title1="Command-Based Robot Control"
      title2="Adjust the shape of the rectangle and then use commands to control the little robot to move around the rectangle."
      ></my-title>
    <div class="info-panel">
      <p>
      In this learning module, you will learn how to use command instructions to control the movement of the cart on the canvas while drawing an adjustable rectangular area. You can control the cart to move forward, turn right, or turn left for a step-by-step motion display.
<br><br>
The module not only demonstrates the basic principles of command parsing and animation execution, but also shows the dynamic effects of the robot and the rectangle through Canvas drawing, allowing you to intuitively understand the implementation of motion control and graphic drawing.
      </p>
    </div>
<br><br>
      <p>
        Enter your commands in the box (e.g. <strong>F 200 R 90 F 100</strong>) 
        and click <em>Obey</em> to control the robot step by step.
      </p>

      <!-- 命令输入与按钮 -->
      <div class="choices">
        <label>Commands:</label>
        <input id="commandInput" style="width: 600px; margin-left: 10px" />
        <button id="obeyButton" style="margin-left: 10px">Obey</button>
      </div>

      <!-- 矩形参数设置 -->
      <div class="choices" style="margin-top: 20px;">
        <label>Rect X:</label>
        <input id="rectX" type="number" value="100" style="width: 80px; margin-left:5px; margin-right:10px;" />
        <label>Rect Y:</label>
        <input id="rectY" type="number" value="100" style="width: 80px; margin-left:5px; margin-right:10px;" />
        <label>Width:</label>
        <input id="rectWidth" type="number" value="800" style="width: 80px; margin-left:5px; margin-right:10px;" />
        <label>Height:</label>
        <input id="rectHeight" type="number" value="400" style="width: 80px; margin-left:5px;" />
      </div>
    </header>

    <main style="margin-top: 20px">
      <canvas id="robotCanvas" width="1200" height="600"></canvas>
      <div id="codeDisplay"></div>
    </main>

    <footer>
      <study-content>
        <p>
          Now the robot is no longer automatically following a path; 
          instead, it reads your command instructions from the text box. 
          Each command is interpreted and executed in sequence.
        </p>
        <code-item>
          <template #code>F, R, L commands</template>
          <template #item>
            F &lt;distance&gt; : Move forward &lt;distance&gt; pixels<br/>
            R &lt;angle&gt; : Turn right &lt;angle&gt; degrees<br/>
            L &lt;angle&gt; : Turn left &lt;angle&gt; degrees
          </template>
        </code-item>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
// Parses the command string entered by the user and converts each command into an object to be stored in an array.
function parseAndRunCommands() {
  // Stop execution if it is running
  if (isRunning) {
    cancelAnimationFrame(animationId);
    isRunning = false;
    document.getElementById('obeyButton').textContent = 'Obey';
    return;
  }

  // Empty the previous command queue
  commands = [];
  const input = document.getElementById('commandInput').value.trim();
  const tokens = input.split(/\s+/); // Split by whitespace

  for (let i = 0; i < tokens.length; i += 2) {
    const cmd = tokens[i].toUpperCase(); // Command letters: F, R, L
    const val = Number(tokens[i + 1] || 0);
    commands.push({ cmd, val });
  }

  // Reset the initial state of the robot
  x = 100;
  y = 100;
  angle = 0;
  currentCmd = null;
  stepsLeft = 0;
  isRunning = true;
  document.getElementById('obeyButton').textContent = 'Stop';
  animationId = requestAnimationFrame(animate);
}

"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
        <b>DOM operations</b>
<br><br>
Use document.getElementById() to access elements such as input boxes and buttons on a web page, .value to
 read the string entered by the user, and .textContent to dynamically modify the text content of the buttons
  (e.g., switching from ‘Obey’ to textContent is used to dynamically modify the text content on the button 
  (e.g. ‘Obey’ switches to ‘Stop’), which is the basic method of implementing user interface interaction.
        </p>
<br><br>
        <p>
        <b>string processing</b>
<br><br>
Use .trim() to remove blank characters before and after input to ensure 
formatting standardisation; .split(/\s+/) to slice the input string according
 to spaces, newlines and other blanks by regular expression to get commands and
  values; .toUpperCase() to convert the input commands to uppercase to improve the
   fault tolerance of the user's input, and to facilitate unified parsing.
        </p>
<br><br>
        <p>
        <b>Objects and arrays</b>
<br><br>
Each pair of commands and values is encapsulated into an object { cmd, val }, which
 is then stored in the commands queue (array). This structure is clearer, more extensible,
  and facilitates the subsequent execution of commands one by one in a sequential manner, 
  reflecting the idea of good structured data management.
        </p>
<br><br>
        <p>
        <b>Status Management</b>
<br><br>
Multiple global variables (e.g. x, y, angle, isRunning, currentCmd, etc.) are
 used to record the current state of the robot such as its position, orientation,
  current command and whether it is running or not. These variables are kept up to 
  date during the execution of the multi-frame animation, reflecting the implementation of continuous state tracking and logic control.
        </p>
      </div>
<br><br> 
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
// Animation function: performs frame-by-frame movement and rotation according to the command queue.
function animate() {
  if (!isRunning) return;

  // If the current command has not been completed, continue execution
  if (currentCmd && stepsLeft > 0) {
    const speed = 2; // Move or rotate 2 units per frame
    if (currentCmd.cmd === 'F') {
      // Move Forward: Calculate the increment based on the current angle
      x += speed * Math.cos(angle);
      y += speed * Math.sin(angle);
    } else if (currentCmd.cmd === 'R') {
      // turn right
      angle += (Math.PI / 180) * speed;
    } else if (currentCmd.cmd === 'L') {
      // turn left
      angle -= (Math.PI / 180) * speed;
    }
    stepsLeft -= speed;
  } else {
    // Load the next command after the current command is executed
    if (commands.length > 0) {
      currentCmd = commands.shift();
      stepsLeft = currentCmd.val;
    } else {
      // All commands are executed, ending the animation
      currentCmd = null;
      isRunning = false;
      document.getElementById('obeyButton').textContent = 'Obey';
    }
  }

  // Plotting the current robot state
  drawRobot();
  // Request next frame of animation
  animationId = requestAnimationFrame(animate);
}

"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
        <b>Conditional and logical judgements</b>
<br><br>
A dynamic decision structure is represented by judging whether the 
current command exists (currentCmd && stepsLeft > 0), and the command type (F, R, L) to select a move or turn operation.
        </p>
<br><br>
        <p>
        <b>Trigonometric applications and control of radian units</b>
<br><br>
Use Math.cos(angle) and Math.sin(angle) to calculate the direction of forward displacement of the robot, enabling angle-based movement control. Commonly used in physics simulation, game programming.
<br><br>
Angle conversion using (Math.PI / 180) for steering represents the conversion of angle units from degrees to radians (JavaScript trigonometric functions are all in radians).
        </p>
<br><br>
        <p>
        <b>array operation</b>
<br><br>
commands is an array storing a sequence of commands entered by the user, e.g. { cmd: ‘F’, val: 50 } for 50 units of advance. When the robot completes the current command, the code uses commands.shift() to take the next command from the head of the array and assign it to currentCmd.
<br><br>
This is a typical queue operation:
<br><br>
<ul>
<li>The shift() method removes the top element of the array and returns it;</li>
<br><br>
<li>This conforms to the FIFO principle, where the first command entered is executed first;</li>
<br><br>
<li>Together with push(), you can build a complete command queue system.</li>
</ul>
        </p>
<br><br>
        <p>
        <b>state variable management</b>
<br><br>
This animation logic relies on several state variables to keep track of the command execution process:
<br><br>
<ul>
<li>currentCmd: indicates the current command being executed (e.g. { cmd: ‘F’, val: 50 }), null means there is no command being executed;</li>
<br><br>
<li>stepsLeft: record how many units of the current command are left to complete (e.g. 20 pixels left to advance, 10° left to rotate);</li>
<br><br>
<li>isRunning: controls whether the whole animation is running, to prevent starting the animation repeatedly, also used to cancel the animation frame when the stop button is clicked.</li>
</ul>
<br><br>
The purpose of these variables is to allow the animation to independently determine what to do next in each frame based on its state. If the current command isn't done, it continues; if the command is done, it takes the next one from the queue; if the queue is empty, it stops running.
        </p>
      </div>
<br><br>
        <my-footer week="4" num="2"></my-footer>
      </study-content>
    </footer>
  </my-container>
</template>

<script>
import MyFooter from '@/components/MyFooter.vue'
import MyContainer from '@/components/MyContainer.vue'
import StudyContent from '@/components/StudyContent.vue'
import MyTitle from '@/components/MyTitle.vue'
import codeItem from '@/components/codeItem.vue'
import MyDemo from '@/components/demo.vue'
import DemoCode from '@/components/demoCode.vue'

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

  // 小车初始位置、朝向(用 angle 表示旋转)
  let x = 100
  let y = 100
  let angle = 0

  // 是否正在执行命令
  let isRunning = false
  // 正在执行的动画帧ID
  let animationId = null

  // 绘制矩形：根据用户输入的参数显示绿色矩形
  function drawRectangle() {
    const rectX = Number(document.getElementById('rectX')?.value) || 150
    const rectY = Number(document.getElementById('rectY')?.value) || 150
    const rectW = Number(document.getElementById('rectWidth')?.value) || 300
    const rectH = Number(document.getElementById('rectHeight')?.value) || 200

    ctx.beginPath()
    ctx.rect(rectX, rectY, rectW, rectH)
    ctx.strokeStyle = 'green'
    ctx.lineWidth = 3
    ctx.stroke()
  }

  // 新版小车（机器人）样式绘制：蓝色椭圆身体、黑色粗轮轴、黑色矩形轮子和红色传感器
  function drawRobot() {
    // 先清空画布，绘制矩形后再绘制小车
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawRectangle()

    ctx.save()
    // 将坐标原点平移到小车中心，并应用旋转
    ctx.translate(x, y)
    ctx.rotate(angle)

    // 在局部坐标系中，以(0, 0)为中心绘制机器人
    const centerX = 0, centerY = 0

    // 绘制机器人的蓝色椭圆形身体
    ctx.fillStyle = '#007b7b'
    ctx.beginPath()
    ctx.ellipse(centerX, centerY, 20, 25, 0, 0, Math.PI * 2)
    ctx.fill()

    // 绘制轮轴（中间粗黑线）
    ctx.strokeStyle = '#000'
    ctx.lineWidth = 6
    ctx.beginPath()
    ctx.moveTo(centerX, centerY - 30)
    ctx.lineTo(centerX, centerY + 30)
    ctx.stroke()

    // 绘制两个轮子（黑色矩形）
    ctx.fillStyle = '#000'
    ctx.fillRect(centerX - 15, centerY - 35, 30, 10) // 上轮
    ctx.fillRect(centerX - 15, centerY + 25, 30, 10) // 下轮

    // 绘制机器人右侧红色传感器小圆点
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.arc(centerX + 20, centerY, 4, 0, Math.PI * 2)
    ctx.fill()

    ctx.restore()
  }

  // 命令队列： [{ cmd:'F', val:100 }, {cmd:'R', val:90}, ...]
  let commands = []
  // 当前命令
  let currentCmd = null
  // 每次移动/转动所剩余的距离或角度
  let stepsLeft = 0

  // 动画函数：每帧执行一点
  function animate() {
    if (!isRunning) return

    // 如果当前命令未完成，则继续执行
    if (currentCmd && stepsLeft > 0) {
      const speed = 2 // 每帧移动/转动2个单位
      if (currentCmd.cmd === 'F') {
        const rad = angle
        x += speed * Math.cos(rad)
        y += speed * Math.sin(rad)
      } else if (currentCmd.cmd === 'R') {
        angle += (Math.PI / 180) * speed
      } else if (currentCmd.cmd === 'L') {
        angle -= (Math.PI / 180) * speed
      }
      stepsLeft -= speed
    } else {
      // 当前命令执行完毕后，读取下一个命令
      if (commands.length > 0) {
        currentCmd = commands.shift()
        stepsLeft = Number(currentCmd.val)
      } else {
        // 所有命令执行完毕
        currentCmd = null
        isRunning = false
        document.getElementById('obeyButton').textContent = 'Obey'
      }
    }

    drawRobot()
    animationId = requestAnimationFrame(animate)
  }

  // 解析并执行用户输入的命令
  function parseAndRunCommands() {
    // 若已在运行，则点击停止
    if (isRunning) {
      cancelAnimationFrame(animationId)
      isRunning = false
      document.getElementById('obeyButton').textContent = 'Obey'
      return
    }

    // 清空命令队列
    commands = []
    const input = document.getElementById('commandInput').value.trim()
    // 简单切分命令字符串
    const tokens = input.split(/\s+/)
    let i = 0
    while (i < tokens.length) {
      const cmd = tokens[i].toUpperCase() // F, R, L
      const val = tokens[i + 1] || '0'
      commands.push({ cmd, val })
      i += 2
    }

    // 重置小车到初始位置
    x = 100
    y = 100
    angle = 0

    // 开始执行动画
    currentCmd = null
    stepsLeft = 0
    isRunning = true
    document.getElementById('obeyButton').textContent = 'Stop'
    animationId = requestAnimationFrame(animate)
  }

  // 绑定“Obey”按钮事件
  document.getElementById('obeyButton').addEventListener('click', parseAndRunCommands)

  // 初次绘制
  drawRobot()
})
</script>

<style scoped>
.choices {
  margin: 10px 0;
}

#robotCanvas {
  background-color: #d3d3d3;
  border: 1px solid #ccc;
}

/* 模拟代码区域外观，可自行删改 */
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

.info-panel {
  background-color: #e8f6f4;           /* 浅青底 */
  border-left: 4px solid #00796b;      /* 左侧彩色标识条 */
  padding: 20px;                       /* 内边距 */
  border-radius: 4px;                  /* 圆角 */
  margin: 20px 0;                      /* 上下间距 */
  line-height: 1.6;                    /* 段落行高 */
  color: #333;                         /* 正文字色 */
  font-family: sans-serif;
}

/* 一级标题 */
.info-panel h2 {
  margin-top: 0;
  margin-bottom: 0.5em;
  color: #00796b;
  font-size: 1.5rem;
  font-weight: 600;
}

/* 二级标题 */
.info-panel h3 {
  margin-top: 1.2em;
  margin-bottom: 0.4em;
  color: #004d40;
  font-size: 1.1rem;
  font-weight: 500;
}

/* 正文段落 */
.info-panel p {
  margin: 0 0 1em;
}

/* 列表样式 */
.info-panel ul {
  margin: 0 0 1em 1.5em;
  padding: 0;
  list-style-type: disc;
}
.info-panel ul li {
  margin-bottom: 0.5em;
}

</style>
