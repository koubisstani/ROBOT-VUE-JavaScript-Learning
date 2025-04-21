<template>
  <my-container>
    <header>
      <my-title title1="PWM Motor Speed Control"
                title2="Pulse Width Modulation adjusts motor speed by changing the average voltage." />
    <div class="info-panel">
      <p>
      PWM control of motor speed is done by adjusting the average voltage, thus controlling the motor speed.
<br><br>
The page shows how the ratio of the high and low levels of the PWM signal (duty cycle) affects the operating speed of the motor. 
When the duty cycle is high, the average voltage is high so the motor speed is fast. When the duty cycle is low, the average voltage 
is low so the motor speed is slow. You can see that the high time alternates with the low time, and the ‘pulse width’ actually controls 
the proportion of time that the power supply is ‘on’.
<br><br>
Unlike analogue voltage regulation, PWM digitally switches the power supply with low energy loss and high efficiency, making 
it particularly suitable for small battery-powered robots. A small change in duty cycle can result in a smooth change in speed for 
small robots, helping to achieve more stable motion, turning or obstacle avoidance behaviour.
      </p>
<br><br>
      <p>
        Click the buttons to adjust the motor speed using PWM. Observe how the blue portion of the PWM signal changes,
        how the bridge circuit switches, and how the motor's rotation (right) varies accordingly.
      </p>
    </div>
<br><br>
    </header>

    <main>
      <canvas id="pwmCanvas" width="1000" height="500"></canvas>
      <div class="controls">
        <div class="left">
          <button @click="increaseSpeed">speed up</button>
          <button @click="decreaseSpeed">Slow down</button>
          <p>The speed is {{ speed }}%</p>
        </div>

        <div class="right">
          <label><input type="checkbox" v-model="reverseDirection" @change="drawPWM"> Reverse motor</label>
          <label><input type="checkbox" v-model="showPWM" @change="drawPWM"> Show PWM</label>
        </div>
      </div>
    </main>

    <footer>
      <study-content>
        <p><strong>JavaScript point of knowledge：</strong></p>
        <code-item>
          <template #code>ctx.arc()</template>
          <template #item>Used for drawing PWM signals, motor and turntable pointers in circuit diagrams.</template>
        </code-item>
        <code-item>
          <template #code>requestAnimationFrame()</template>
          <template #item>Achieve smooth motor rotation animation.</template>
        </code-item>
        <code-item>
          <template #code>Math.PI</template>
          <template #item>Mathematical calculations for plotting angles and directions.</template>
        </code-item>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
   // Wrapped function: draws a set of points (in the form of an array) as a continuous line in order.
function putPoints(points) {
  ctx.beginPath();
  for (let i = 0; i < points.length; i += 2) {
    if (i === 0) {
      ctx.moveTo(points[i], points[i + 1]);
    } else {
      ctx.lineTo(points[i], points[i + 1]); } else { ctx.
    }
  }
  ctx.stroke();
}

// Example: Drawing a polyline
putPoints([10, 10, 50, 50, 90, 10]); }
"
            />
          </template>
        </my-demo>
        <br><br>
      <div class="info-panel">
        <p>
        Use ctx.beginPath() to start a new drawing path, then ctx.moveTo(x, y) to move the brush to the first point without drawing a line. Then use ctx.lineTo(x, y) to connect the brush from the current point to the next point, drawing a straight line segment. Finally, ctx.stroke() strokes the entire path.
<br><br>
The input array is divided into [x1, y1, x2, y2, ... , xn, yn]. Each group of two values represents a two-dimensional coordinate point (x, y). The i += 2 in the loop ensures that one complete coordinate point is processed at a time.
        </p>
      </div>
<br><br>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
function drawHResistor(x, y, sz) {
  putPoints([
    x, y, x + sz, y - 2 * sz, x + 3 * sz, y + 2 * sz,
    x + 5 * sz, y - 2 * sz, x + 7 * sz, y + 2 * sz,
    x + 9 * sz, y - 2 * sz, x + 11 * sz, y + 2 * sz, x + 12 * sz, y
  ]);
}


drawHResistor(50, 100, 10);

"
            />
          </template>
        </my-demo>
        <p>
        Learn to try to draw complex shapes using multiple polylines to encapsulate the drawing logic into a separate function to improve code reusability
        </p>
<br><br>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
// Drawing PWM signals
function drawPWM(speed, showPWM) {
  const cw = canvas.width / 100;   // 将 canvas 分成 100 份，方便坐标计算
  const ch = canvas.height / 100;
  
  // Clear the canvas and set the background colour
  ctx.fillStyle = '#e9eae8';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Drawing the basic path of the PWM signal (black line)
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  putPoints([cw * 10, ch * 10, cw * 10, ch * 80, cw * 53, ch * 80]);

  // Calculates the average level based on speed and plots the red horizontal line
  const avgY = ch * (80 - 0.6 * speed);
  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(cw * 10, avgY);
  ctx.lineTo(cw * 53, avgY);
  ctx.stroke();

  // Optional display of the pulse portion of the PWM (blue)
  if (showPWM) {
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    let x = cw * 10 + 3;
    for (let i = 0; i < 5; i++) {
      const pulseWidth = cw * 8 * speed / 100;
      ctx.beginPath();
      ctx.moveTo(x, ch * 80);
      ctx.lineTo(x, ch * 20);
      ctx.lineTo(x + pulseWidth, ch * 20);
      ctx.lineTo(x + pulseWidth, ch * 80);
      ctx.lineTo(x + cw * 8, ch * 80);
      ctx.stroke();
      x += cw * 8;
    }
  }
  
  // Drawing text labels
  ctx.fillStyle = 'black';
  ctx.font = '16px monospace';
  ctx.fillText(`PWM`, cw * 8.5, ch * 18);
  ctx.fillText(`${speed}%`, cw * 8.5, avgY);
}


"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
        <b>Graphic control</b>
<br><br>
Use canvas.width / 100 to divide the canvas into percentage units (cw, ch), which makes all coordinate and size calculations independent of the canvas size, and improves generality;
<br><br>
ctx.lineWidth controls the line thickness, e.g. red average line is thin, blue PWM line is thick, more hierarchical;
<br><br>
ctx.strokeStyle and ctx.fillStyle control the colours, black for the main structure, red for the average level and blue for the PWM pulse.

        </p>
 <br><br>       
        <p>
         <b>Dynamic parameters</b>
<br><br>
speed is a parameter of PWM duty cycle (0~100), which affects three key plotting elements:
<br><br>
The position of the red average line changes with speed; the high level width of the blue pulse is determined by speed (pulseWidth); and the overall visual presentation of a faster or slower pulse rhythm.
<br><br>
This parameter allows you to dynamically demonstrate the actual effect of the PWM signal in applications such as controlling motor speed and voltage regulation.
        </p>
<br><br>        
        <p>
        <b>Logic Control</b>
<br><br>
if (showPWM) controls whether or not to draw a pulse wave, making it easy to turn details on/off for teaching or debugging;
<br><br>
The for loop plots one PWM period segment at a time for a total of 5 periods, simulating actual pulse repetition;

        </p>
        <p>
<br><br>        
         <b>Visualisation Tips</b>
<br><br>
Using cw, ch scaling avoids the use of absolute pixels and improves code adaptability;
<br><br>
The text labelling of the label ‘PWM’ with ${speed}% enhances the readability and pedagogical nature of the graphs; the red averaging line (avgY) embodies a visual representation of the average PWM voltage, helping to understand the effect of duty cycle on the output effect.
        </p>
      </div>
<br><br>        
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
let rotation = 0;
let lastTimestamp = 0;
let angleVelocity = 0;
let speed = 70;             // PWM Speed Percentage
let reverseDirection = false; // Reversed or not

// Drawing a motor rotation mark (a circle with a rotation pointer inside)
function drawMotorRotation() {
  const cw = canvas.width / 100;
  const ch = canvas.height / 100;
  const direction = reverseDirection ? -1 : 1;

  // Drawing background circles
  ctx.fillStyle = '#aaa';
  ctx.beginPath();
  ctx.arc(cw * 80, ch * 50, ch * 30, 0, Math.PI * 2);
  ctx.fill();

  // Drawing Pointers
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cw * 80, ch * 50);
  ctx.lineTo(
    cw * 80 + Math.cos(rotation) * ch * 26 * direction,
    ch * 50 + Math.sin(rotation) * ch * 26 * direction
  );
  ctx.stroke();
}

// Animation function that updates the rotation angle based on the timestamp of each frame
function animate(timestamp) {
  const delta = timestamp - lastTimestamp;
  lastTimestamp = timestamp;
  const targetSpeed = speed * 0.0002;
  angleVelocity += (targetSpeed - angleVelocity) * 0.05;
  const direction = reverseDirection ? -1 : 1;
  rotation += angleVelocity * delta * direction;

  // Redraw PWM signal and motor rotation state
  drawPWM(speed, true);
  drawMotorRotation();

  requestAnimationFrame(animate);
}


"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
        <b>timestamp and delta control the physical consistency between frames.</b>
<br><br>
In animate(timestamp), timestamp is passed in by the browser and represents the time of the current frame. The interval delta is obtained by differing it from the lastTimestamp of the previous frame.
This approach allows the animation to maintain a similar speed at different frame rates, which is called time-driven animation, and is the key to achieving frame-rate independent physics simulation.
        </p>
<br><br>
        <p>
         <b>Physical simulation</b>
<br><br>
Buffer update of angular velocity for smooth rotation
<br><br>
Simulate ‘inertia’ or ‘damping’ with the following formulas:
angleVelocity += (targetSpeed - angleVelocity) * 0.05;
<br><br>
This is a first-order filter that makes the angular velocity approach the target speed gradually instead of instantaneously, simulating the process of starting or slowing down a motor in reality. It can effectively avoid sudden animation changes and bring smooth and natural transition effects.
        </p>
<br><br>
        <p>
        <b>Conditions and Directions</b>
        <br><br>
Ternary operators switch between positive and negative direction
<br><br>
Switch between positive and negative direction by const direction = reverseDirection ? -1 : 1; to enable positive and negative control of the motor's rotation direction. Uniformly multiplying direction in the rotation angle update and pointer position calculation allows the rotation animation to freely switch between positive and negative directions.
        </p>
      </div>      
<br><br>  
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
// Increase PWM speed
function increaseSpeed() {
  speed = Math.min(100, speed + 5);
  drawPWM(speed, true);
}

// Reduced PWM speed
function decreaseSpeed() {
  speed = Math.max(0, speed - 5);
  drawPWM(speed, true);
}


"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
        <b>User interaction and data update</b>
<br><br>
Use functions to implement the logic of increasing and decreasing the speed and call the drawing function to update the canvas display in time.
        </p>
      </div>
        <my-footer week="3" num="3" />
      </study-content>
    </footer>
  </my-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MyTitle from '@/components/MyTitle.vue'
import MyFooter from '@/components/MyFooter.vue'
import MyContainer from '@/components/MyContainer.vue'
import StudyContent from '@/components/StudyContent.vue'
import CodeItem from '@/components/codeItem.vue'
import MyDemo from '@/components/demo.vue'
import DemoCode from '@/components/demoCode.vue'

const speed = ref(70)
const reverseDirection = ref(false)
const showPWM = ref(true)
let canvas, ctx
let rotation = 0
let lastTimestamp = 0
let angleVelocity = 0

function putPoints(points) {
  ctx.beginPath()
  for (let i = 0; i < points.length; i += 2) {
    if (i === 0) ctx.moveTo(points[i], points[i + 1])
    else ctx.lineTo(points[i], points[i + 1])
  }
  ctx.stroke()
}

function drawHResistor(x, y, sz) {
  putPoints([
    x, y, x + sz, y - 2 * sz, x + 3 * sz, y + 2 * sz,
    x + 5 * sz, y - 2 * sz, x + 7 * sz, y + 2 * sz,
    x + 9 * sz, y - 2 * sz, x + 11 * sz, y + 2 * sz, x + 12 * sz, y
  ])
}

function drawPWM() {
  const cw = canvas.width / 100
  const ch = canvas.height / 100
  ctx.fillStyle = '#e9eae8'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // draw PWM signal
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 2
  putPoints([cw * 10, ch * 10, cw * 10, ch * 80, cw * 53, ch * 80])

  const avgY = ch * (80 - 0.6 * speed.value)
  ctx.strokeStyle = 'red'
  ctx.beginPath()
  ctx.moveTo(cw * 10, avgY)
  ctx.lineTo(cw * 53, avgY)
  ctx.stroke()

  if (showPWM.value) {
    ctx.strokeStyle = 'blue'
    ctx.lineWidth = 3
    let x = cw * 10 + 3
    for (let i = 0; i < 5; i++) {
      const pulseWidth = cw * 8 * speed.value / 100
      ctx.beginPath()
      ctx.moveTo(x, ch * 80)
      ctx.lineTo(x, ch * 20)
      ctx.lineTo(x + pulseWidth, ch * 20)
      ctx.lineTo(x + pulseWidth, ch * 80)
      ctx.lineTo(x + cw * 8, ch * 80)
      ctx.stroke()
      x += cw * 8
    }
  }

  ctx.fillStyle = 'black'
  ctx.font = '16px monospace'
  ctx.fillText(`PWM`, cw * 8.5, ch * 18)
  ctx.fillText(`PWM`, cw * 8.5, ch * 55)
  ctx.fillText(`${speed.value}%`, cw * 8.5, avgY)
  ctx.fillText(`t`, cw * 55, ch * 80)

  drawBridge()
  drawMotorRotation()
}

function drawBridge() {
  const cw = canvas.width / 100
  const ch = canvas.height / 100
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 2
  const isrev = reverseDirection.value

  // 电路背景
  ctx.fillStyle = '#e9eae8'
  ctx.fillRect(cw * 10, ch * 54, cw * 40, ch * 40)
  ctx.fillStyle = 'black'
  ctx.textAlign = 'right'
  ctx.textBaseline = 'middle'

  ctx.fillText('PWM', cw * 10, ch * 56)

  putPoints([cw * 12, ch * 56, cw * 20, ch * 56])
  drawHResistor(cw * 20, ch * 56, cw / 2)
  putPoints([cw * 26, ch * 56, cw * 30, ch * 56, cw * 30, ch * 60])

  // 桥路结构
  putPoints([cw * 20, ch * 65, cw * 20, ch * 60, cw * 40, ch * 60, cw * 40, ch * 65])
  putPoints([cw * 20, ch * 70, cw * 20, ch * 80])
  putPoints([cw * 40, ch * 70, cw * 40, ch * 80])
  putPoints([cw * 20, ch * 85, cw * 20, ch * 90, cw * 40, ch * 90, cw * 40, ch * 85])

  putPoints([cw * 20, ch * 75, cw * 26, ch * 75])
  putPoints([cw * 40, ch * 75, cw * 34, ch * 75])

  // 地符号
  putPoints([
    cw * 30, ch * 90, cw * 30, ch * 92,
    cw * 30 - 6, ch * 92, cw * 30 + 6, ch * 92,
    cw * 30 - 4, ch * 93, cw * 30 + 4, ch * 93,
    cw * 30 - 2, ch * 94, cw * 30 + 2, ch * 94
  ])

  // 电机
  ctx.fillStyle = 'grey'
  ctx.beginPath()
  ctx.arc(cw * 30, ch * 75, cw * 3, 0, 2 * Math.PI)
  ctx.fill()
  ctx.fillStyle = 'black'
  ctx.fillRect(cw * 26, ch * 73, cw, ch * 4)
  ctx.fillRect(cw * 33, ch * 73, cw, ch * 4)
  ctx.fillText(isrev ? '-' : '+', cw * 26, ch * 70)
  ctx.fillText(isrev ? '+' : '-', cw * 34, ch * 70)

  ctx.lineWidth = 4
  if (isrev) {
    putPoints([cw * 20, ch * 65, cw * 18, ch * 69])
    putPoints([cw * 40, ch * 65, cw * 40, ch * 70])
    putPoints([cw * 20, ch * 85, cw * 20, ch * 80])
    putPoints([cw * 40, ch * 85, cw * 42, ch * 81])
  } else {
    putPoints([cw * 20, ch * 65, cw * 20, ch * 70])
    putPoints([cw * 40, ch * 65, cw * 42, ch * 69])
    putPoints([cw * 20, ch * 85, cw * 18, ch * 81])
    putPoints([cw * 40, ch * 85, cw * 40, ch * 80])
  }
}

function drawMotorRotation() {
  const cw = canvas.width / 100
  const ch = canvas.height / 100
  const direction = reverseDirection.value ? -1 : 1

  ctx.fillStyle = '#aaa'
  ctx.beginPath()
  ctx.arc(cw * 80, ch * 50, ch * 30, 0, Math.PI * 2)
  ctx.fill()

  ctx.strokeStyle = 'black'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(cw * 80, ch * 50)
  ctx.lineTo(
    cw * 80 + Math.cos(rotation) * ch * 26 * direction,
    ch * 50 + Math.sin(rotation) * ch * 26 * direction
  )
  ctx.stroke()
}

function animate(timestamp) {
  const delta = timestamp - lastTimestamp
  lastTimestamp = timestamp
  const targetSpeed = speed.value * 0.0002
  angleVelocity += (targetSpeed - angleVelocity) * 0.05
  const direction = reverseDirection.value ? -1 : 1
  rotation += angleVelocity * delta * direction
  drawPWM()
  requestAnimationFrame(animate)
}


function increaseSpeed() {
  speed.value = Math.min(100, speed.value + 5)
  drawPWM()
}

function decreaseSpeed() {
  speed.value = Math.max(0, speed.value - 5)
  drawPWM()
}

onMounted(() => {
  canvas = document.getElementById('pwmCanvas')
  ctx = canvas.getContext('2d')
  drawPWM()
  requestAnimationFrame(ts => {
    lastTimestamp = ts
    animate(ts)
  })
})
</script>

<style scoped>
canvas {
  background-color: #eee;
  display: block;
  margin: 20px auto;
  border-radius: 10px;
}
.controls {
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  font-size: 16px;
}
.left button {
  margin-right: 10px;
  padding: 6px 12px;
  font-size: 16px;
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