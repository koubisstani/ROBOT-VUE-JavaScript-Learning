<template>
  <my-container>
    <header>
      <my-title
        title1="Learning Robot Simulator"
        title2="Using aRobot Logic with Rotation Matrix and Beam Sensor"
      />
    <div class="info-panel">
      <p>
      <b>Reinforcement learning is a machine learning method that learns how to make
       the best decisions by interacting with its environment. In layman's terms, 
       reinforcement learning is like teaching a robot how to autonomously explore its environment and gradually optimise its behaviour based on feedback.</b>
<br><br><br>
<b>There are several key concepts in reinforcement learning:</b>
<br><br>
<ul>
<li>Agent: The robot itself, which is responsible for making decisions and executing actions.</li>
<br><br>
<li>Environment: the space or scene in which the robot moves, e.g., a maze, an obstacle scene.</li>
<br><br>
<li>State: the position of the robot at a certain moment, sensor data and other environmental information.</li>
<br><br>
<li>Action: the actions that the robot can perform, such as moving forward, turning left, turning right.</li>
<br><br>
<li>Reward: the feedback the robot receives after each action, which can be positive (encouragement) or 
negative (punishment), to help the robot judge whether the action is good or bad.</li>
</ul>
      </p>
      <p>
<br><br>
The goal of reinforcement learning is to enable the robot to learn to make optimal decisions in various situations by continuously trying actions and getting feedback. Specifically in this project, the small robot will adjust the probability of each action according to the feedback, and gradually learn how to effectively avoid obstacles, navigate autonomously, and exhibit intelligent behaviour in complex environments.
<br><br>
Through this project, you will intuitively understand how reinforcement learning can drive robots to learn autonomously, dynamically adapt to the environment, and autonomously optimise their decisions and actions.
      </p>
    </div>
<br><br>
      <div>
        This page combines the complete logic of the web page with that of aRobot (with sensor beam/differential steering).：
      </div>
      <ul>
        <li>Robot moves and rotates in real time in Canvas and draws wheels and beam sensors</li>
        <li>Four states: no wall / left wall / right wall / double wall, action probability dynamic learning</li>
        <li>button or key (on a device) <strong>S</strong> Start/Stop；<strong>A/N/L/R/B</strong> reset probability</li>
        <li>Click on the canvas to reset the robot position；<strong>I/J/K/M</strong> manual operation</li>
      </ul>
    </header>

    <main>
      <button @click="toggleRobot">{{ activeLabel }}</button>

      <div class="prob-section">
        <p>FF FB BF BB (wall-less)：
          <input type="text" :value="probStrings[0]" readonly />
        </p>
        <p>FF FB BF BB (left wall)：
          <input type="text" :value="probStrings[1]" readonly />
        </p>
        <p>FF FB BF BB (right wall)：
          <input type="text" :value="probStrings[2]" readonly />
        </p>
        <p>FF FB BF BB (double wall)：
          <input type="text" :value="probStrings[3]" readonly />
        </p>
        <p>
          reset probability：
          <button @click="setchecked(0)">All</button>
          <button @click="setchecked(1)">None</button>
          <button @click="setchecked(2)">Left</button>
          <button @click="setchecked(3)">Right</button>
          <button @click="setchecked(4)">Both</button>
        </p>
      </div>

      <canvas
        ref="canvasEl"
        id="myCanvasSYS"
        width="600"
        height="300"
        style="border:1px solid #000;"
      ></canvas>
    </main>

    <footer>
      <study-content>
        <p>
          Detects and updates robot status every 20ms; automatically reduces the probability of this action if stuck. If you need real wall/light detection, please set the <em>testEnvironment / testLights / distToEnvironment</em> Isofunctions refinement。
        </p>
        <code-item>
          <template #code>drawSensor() + setRotMat() + robDrawArc()</template>
          <template #item>Implementation of a beam sensor with a rotation matrix on a robot with the ability to draw arcs or line segments.</template>
        </code-item>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
// Encapsulation: draws a straight line. Pass in the context and start and end point coordinates
function drawLine(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

// Wrapper: Get the position of the mouse relative to the canvas.
function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,  // Subtract the left offset of the canvas boundary
    y: event.clientY - rect.top    // Minus the top offset of the canvas boundary
  };
}

"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
         <b>Functions and Encapsulation</b>
<br><br>
The code shows how to encapsulate a piece of code that draws a straight line, and how to encapsulate the logic that gets the position of the mouse click on the Canvas.
<br><br>
Encapsulating common drawing logic or data processing into separate functions simplifies the main code logic and facilitates subsequent maintenance and debugging.
<br><br>
In the event response, you can directly call getMousePos(canvas, event) to get the exact click position, instead of repeating the calculation in each event processing function.
        </p>
      </div>
<br><br>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
// Calculate the Euclidean distance between two points
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

// Calculate the rotation matrix for converting local coordinates to global coordinates when the robot rotates
function setRotMat(angle) {
  const cosa = Math.cos(angle);
  const sina = Math.sin(angle);
  // Return the rotation matrix: [cosθ, sinθ, -sinθ, cosθ].
  return [cosa, sina, -sina, cosa];
}

// Using the rotation matrix, the local points (x, y) are converted to global coordinates and the robot is located at (robotX, robotY).
function transformPoint(x, y, robotX, robotY, rotMat) {
  return {
    x: robotX + x * rotMat[0] + y * rotMat[2],
    y: robotY + x * rotMat[1] + y * rotMat[3]
  };
}


let angle = 0.3; // Current robot angle
let robotX = 100, robotY = 100;
const rotMat = setRotMat(angle);
const localSensorX = 50, localSensorY = 0;
const sensorGlobalPos = transformPoint(localSensorX, localSensorY, robotX, robotY, rotMat);
console.log(sensor:, sensorGlobalPos);

"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
        <b>Mathematical and geometric calculations</b>
<br><br>
Math.sqrt(), Math.sin(), Math.cos(), Exponential operators **
<br><br>
<ul>
<li>These are the built-in maths tools provided by JavaScript for calculating distances, angles, rotations, and so on;</li>
<br><br>
<li>Math.sqrt() is used to calculate the Euclidean distance between two points;</li>
<br><br>
<li>Math.sin() and Math.cos() are used to calculate the trigonometric ratios corresponding to angular 
directions, and are the basis for angle-driven shifts and rotations;</li>
<br><br>
<li>** is the power operator (exponentiation), used here to square distance differences;</li>
</ul>
        </p>
      </div>
<br><br>
        <p>
        The code also involves knowledge of linear algebra to construct 2D rotation matrices for angle control and coordinate rotation.
<br><br>
JavaScript represents this matrix as an array [cosθ, sinθ, -sinθ, cosθ]. Multiplying this matrix by the coordinates of a point allows rotation around the origin or a centre point, a classic practice from mathematical theory to programmatic expression.
        </p>
<br><br>
      <div class="info-panel">
        <p>
        <b>coordinate transformation</b>
<br><br>
From implementing local to global coordinate transformations, combined with rotations and translations.
<br><br>
<ul>
<li>A small robot or sensor has a fixed position in its own ‘body-local co-ordinate system’;</li>
<br><br>
<li>If the robot body is rotated or translated, the point is rotated and superimposed accordingly;</li>
<br><br>
<li>The transformPoint() function takes the local point, transforms it into a rotation matrix, adds the robot's coordinates, and outputs the global position;</li>
</ul>       
        </p>
      </div>
<br><br>
      <div class="info-panel">
        <p>
        <b>function combination</b>
<br><br>
Modular function design, sequential use of complex logic in combinations
<br><br>
All functions are split into small, independent functions (e.g. distance(), setRotMat(), transformPoint()), each responsible for a single task. These functions are combined as
 needed in the main process to achieve a complete transition from ‘robot perspective to global awareness’;
        </p>
      </div> 
<br><br>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
// Get the position of the mouse click on the canvas 
function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

// Adding mouse click event bindings to canvas
canvasEl.value.addEventListener('mousedown', (ev) => {
  const rect = canvasEl.value.getBoundingClientRect();
  // First cancel the current drawing of the robot, update the position, and then redraw it
  robot.robotDraw(false);
  robot.robotx = ev.clientX - rect.left;
  robot.roboty = ev.clientY - rect.top;
  robot.stuck = false;
  redrawEnvironment(ctx);
  robot.robotDraw(true);
});

"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
        <b>event processing</b>
<br><br>
The code implements the ability to reset the position of the robot after a mouse click by adding event listeners to the canvas element. The following code block shows how to bind the mouse event, get the clicked position, and update the robot's position based on the clicked position.
<br><br>
<ul>
<li>Add an event listener to the canvas using addEventListener and call the handler function whenever the user clicks.</li>
<br><br>
<li>Get the position of the canvas on the page with getBoundingClientRect() and then calculate the coordinates of the clicked position relative to the canvas.</li>
</ul>    
        </p>
      </div>
<br><br>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
// Define aRobot constructor to create a robot object.
function aRobot(x, y, size, ctx) {
  this.robotx = x;
  this.roboty = y;
  this.robotsz = size;
  this.angle = 0;
  this.ctx = ctx;
  this.lspeed = 0;
  this.rspeed = 0;
  this.stuck = false;
}

// Defining the Draw Robot method on the aRobot prototype
aRobot.prototype.robotDraw = function(show) {
  // Sets the drawing style and determines whether to draw or erase based on the show parameter.
  this.ctx.strokeStyle = show ? 'blue' : canvasback;
  this.ctx.lineWidth = show ? 2 : 4;

  const rotMat = setRotMat(this.angle);
  // Draw the circular body using the centre of this robot as a reference point
  this.ctx.beginPath();
  this.ctx.arc(this.robotx, this.roboty, this.robotsz, 0, 2 * Math.PI);
  this.ctx.fillStyle = show ? '#007b7b' : canvasback;
  this.ctx.fill();
};

// Methods for defining robot movement
aRobot.prototype.moveRobot = function(newLS, newRS) {

  let dist = (newLS + newRS) * 0.1;

  this.angle += (newLS - newRS) * 0.01;

  this.robotx += dist * Math.cos(this.angle);
  this.roboty += dist * Math.sin(this.angle);
};


const robot = new aRobot(200, 200, 15, ctx);
robot.robotDraw(true);
robot.moveRobot(4, 2);
robot.robotDraw(true);

"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
        <b>object-oriented programming</b>
<br><br>
The properties and methods of a robot are encapsulated into an object through the constructor pattern, allowing each robot to have its own state and behaviour. The following code shows how to define a simple robot constructor and bind the methods to a prototype.
<br><br>
Use the function definition constructor to encapsulate properties such as position, angle, and state. These properties provide independent state for each robot object and are the basis for enabling multiple robot instances to operate independently of each other;
<br><br>
Use aRobot.prototype.robotDraw = function(...) to bind methods to the constructor's prototype. All instances created by aRobot can share these methods without duplicating them, saving memory. Methods on the prototype such as robotDraw and moveRobot represent behavioural definitions that are shared by all robots, making them easy to maintain and extend in a uniform way.
<br><br>
Differential steering and trigonometric control of position updates mimic real robot kinematics.
<br><br>
The movement logic is based on the principle of a ‘differential trolley’. If the left and right wheels have equal speeds, the robot moves in a straight line; if the left and right wheels have different speeds, the robot rotates;
<br><br>
Math.cos() and Math.sin() are used to calculate the x and y increments of the current orientation, reflecting the angle-driven position update. Overall the code simulates how in reality the robot controls motion based on the speed of the motors on both sides, and is the basis for robot control.
<br><br>
Dynamic control of behaviour and display based on incoming speed parameter, drawing state judgement, etc.
<br><br>
        </p>
      </div>


<ul>
<li>robotDraw(show) determines whether to draw or erase based on the show parameter;</li>
<br><br>
<li>moveRobot(newLS, newRS) dynamically controls the direction and speed of the robot based on the speed of the left and right wheels passed in;</li>
<br><br>
<li>The parameter-driven design enhances the flexibility and reusability of the functions and makes the robot behaviour controllable and variable;</li>
<br><br>
<li>This design embodies the ‘data-driven behaviour’ mindset of programming.</li>
</ul>


<br><br>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
// Evaluation function
function evaluate(action, state, distBefore, distAfter, leftSpeed, rightSpeed, stuck) {
  let score = 0;
  // Judgement based on the state of the environment (0=no wall, 1=left wall, 2=right wall, 3=double wall)
  switch(state) {
    case 0:
      score = stuck ? -3 : 0;
      if(distAfter > distBefore) score++;
      break;
    case 1: // left wall
      score = stuck ? -3 : 0;
      if(distAfter > distBefore) score++;
      else if(distAfter < distBefore) score -= 2;
      break;
    case 2: // right wall
      score = stuck ? -3 : 0;
      if(distAfter > distBefore) score++;
      else if(distAfter < distBefore) score -= 2;
      break;
    case 3: // double wall
      score = (!stuck && distAfter >= distBefore) ? 1 : -2;
      break;
    default:
      score = 0;
  }
  
  // Dynamically adjusting probabilities: assuming 4 actions per state, the corresponding probabilities are stored in an array
  // Probs here is an array of length 16, with every 4 values in a group.
  const base = state * 4;
  const minProb = 2;
  for(let i = 0; i < 4; i++){
    if(i !== action){
      if(score > 0) {
        // If the performance is good, decrease the probability of other actions and increase the probability of that action
        if(Probs.value[base + i] > minProb) {
          Probs.value[base + i]--;
          Probs.value[base + action]++;
        }
      } else {
        // If performance is poor, adjust in the opposite direction
        for(let j = 0; j < -score; j++){
          if(Probs.value[base + action] > minProb) {
            Probs.value[base + i]++;
            Probs.value[base + action]--;
          }
        }
      }
    }
  }

  showProbs(state);
  return score;
}

// Probs is a responsive array representing the probability of each action
let Probs = { value: [25,25,25,25, /* state 0 */
                      25,25,25,25, /* state 1 */
                      25,25,25,25, /* state 2 */
                      25,25,25,25  /* state 3 */] };
function showProbs(state) {
  const base = state * 4;
  let probStr = Probs.value.slice(base, base+4).join(' : ');
  console.log('State', state, 'probability distribution：', probStr);
}
evaluate(2, 0, 150, 170, 4, 4, false);

"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
        <b>1. Conditional judgement and control flow (switch.... .case, ternary operators)</b>
<br><br>
The code uses switch(state) and the ternary operator (stuck ? -3 : 0) to select different 
scoring logic based on the current state of the robot, exemplifying how behavioural control in 
different contexts can be achieved through conditional branching.
        </p>
<br><br>
        <p>
        <b>2. Array indexing and probability adjustment logic</b>
<br><br>
Use array index (e.g. Probs.value[base + i]) to dynamically adjust the probability of actions in different states:
<br><br>
Array slices (slice): used to extract part of the data, such as state probability display.
<br><br>
Dynamically update array elements: increase or decrease the probability value to reflect the action's strengths and weaknesses feedback
        </p>
<br><br>
        <p>
         <b>3. Loop structure (for loops, nested loops)</b>
<br><br>
Loops are used to iterate through each action and dynamically adjust the probability based on the performance of the action.
<br><br>
Nested loops are used to adjust the probability of an action multiple times, enabling fine-grained probability updates.
        </p>
<br><br>
        <p>
        <b>4. Function Design and Calling</b>
<br><br>
The evaluate() function is responsible for scoring and probability adjustment;
<br><br>
The showProbs() function displays the current probability status;
<br><br>
Use clear parameter definitions and return values to make the logic clear and easy to read.
        </p>
<br><br>
        <p>
        <b>5. Responsive Data Structures</b>
<br><br>
Using a Vue-like approach to responsive data encapsulation (e.g. Probs = { value: [...] }):
<br><br>
The view layer (if any) can be updated on-the-fly in response to changes in probabilities;
<br><br>
Easy to extend to GUIs or other frameworks for dynamic visualisation.
        </p>
      </div>
<br><br>
        <p>
        <b>The above code shows how JavaScript can be used to implement function encapsulation,
         mathematical and geometric computation, event handling, object-oriented programming, 
         and dynamic decision making and learning, respectively. Each section shows the implementation
          idea in detail with code and descriptions to help understand the technical layered design 
          and logical organisation of the whole robot simulation system.</b>
        </p>
        <my-footer week="4" num="3" />
      </study-content>
    </footer>
  </my-container>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import MyContainer from '@/components/MyContainer.vue'
import MyTitle from '@/components/MyTitle.vue'
import MyFooter from '@/components/MyFooter.vue'
import StudyContent from '@/components/StudyContent.vue'
import CodeItem from '@/components/codeItem.vue'
import mydemo from '@/components/demo.vue'
import demoCode from '@/components/demoCode.vue'

// --------- 全局常量/函数模拟(与 RobotLib.js 相似) ----------
const PI = Math.PI
const PIby4 = PI / 4
const canvasback = '#e9eae8'

// 计算两点间距离
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2)
}

// 如果需要检测环境中的墙壁/灯光，请在此编写
// e.g. testEnvironment(x1,y1, x2,y2, robNum) { ...return dist...}
function testEnvironment(x1,y1, x2,y2, robNum) {
  // 简化 => 返回一个固定较大值 1000
  return 1000
}
// e.g. testLights()
function testLights(rx,ry, x2,y2, isNarrow) {
  return 1000
}
// e.g. distToPath()
function distToPath(x, y) {
  return 999
}
// e.g. distToEnvironment => boundary
function distToEnvironment(x, y, robNum) {
  // 在此可做真正的环境检测。demo：越界则距离=0
  // 这里简单写：如果超出 0~600,0~300 视为撞墙
  if (x<0 || x>600 || y<0 || y>300) return 0
  return 999
}
// e.g. getAreaType => 0=flat
function getAreaType(x, y) {
  return 0
}

// ------------------------------------------------------

export default {
  name: 'Week4Study1new',
  components: {
    'my-container': MyContainer,
    'my-title': MyTitle,
    'my-footer': MyFooter,
    'study-content': StudyContent,
    'code-item': CodeItem,
    'my-demo': mydemo,
    'demo-code': demoCode
  },
  setup() {
    const simtime = 20
    let intervalId = null
    let robot = null
    let keySpecial = 0
    let ctx = null

    // 是否自动学习
    const active = ref(false)
    // 按钮文字
    const activeLabel = computed(() => active.value ? 'Stop the robot' : 'Starting Robotics')

    // 概率
    const Probs = ref([
      25,25,25,25,
      25,25,25,25,
      25,25,25,25,
      25,25,25,25
    ])
    // FF=4,4 FB=4,-4 BF=-4,4 BB=-4,-4
    const Speeds = [4,4, 4,-4, -4,4, -4,-4]
    const probStrings = ref(['','','',''])

    const canvasEl = ref(null)

    // ---------------------------
    // 键盘监听
    // ---------------------------
    function addKeyListener() {
      document.addEventListener('keydown', e => {
        keySpecial = e.keyCode || e.charCode
      })
    }
    function checkKeySpecial() {
      switch(keySpecial) {
        case 65: case 97:   // A
          checkStr(); setchecked(0); break
        case 78: case 110:  // N
          checkStr(); setchecked(1); break
        case 76: case 108:  // L
          checkStr(); setchecked(2); break
        case 82: case 114:  // R
          checkStr(); setchecked(3); break
        case 66: case 98:   // B
          checkStr(); setchecked(4); break
        case 83: case 115:  // S
          checkStr(); startstop(); break
        default:
          checkKeyRest()
      }
      keySpecial=0
    }
    // I=73/105, J=74/106, K=75/107, M=77/109
    function checkKeyRest() {
      switch(keySpecial) {
        case 74: case 106: // J
          robotKeyMove(-1,0); break
        case 73: case 105: // I
          robotKeyMove(0,-1); break
        case 77: case 109: // M
          robotKeyMove(0,1); break
        case 75: case 107: // K
          robotKeyMove(1,0); break
      }
    }
    function checkStr() { /* skip */ }
    function robotKeyMove(dx, dy) {
      if(!robot)return
      robot.robotDraw(false)
      robot.checkMoveRobot(dx*20, dy*20)
      redrawEnvironment(ctx)
      robot.robotDraw(true)
    }

    // ---------------------------
    // 环境
    // ---------------------------
    let environment=[]
    function basicEnvironment(w,h) {
      environment=[0,0, w,0, w,h, 0,h, 0,0]
    }
    function drawAnEnvironment(ct, arr) {
      ct.beginPath()
      ct.moveTo(arr[0], arr[1])
      for(let i=2;i< arr.length; i+=2){
        ct.lineTo(arr[i], arr[i+1])
      }
      ct.stroke()
    }
    function redrawEnvironment(ct) {
      ct.fillStyle=canvasback
      ct.fillRect(0,0, ct.canvas.width, ct.canvas.height)
      ct.strokeStyle='black'
      ct.lineWidth=1
      drawAnEnvironment(ct, environment)
    }

    // ---------------------------
    // 四种状态
    // ---------------------------
    function getState() {
      // left= sensor[0], right=sensor[2]
      const leftNear  = (robot.getSensor(0)<=100)
      const rightNear = (robot.getSensor(2)<=100)
      if(leftNear && rightNear) return 3
      if(leftNear) return 1
      if(rightNear)return 2
      return 0
    }
    function getAction(st) {
      const base= st*4
      let rno= 100*Math.random()
      let asum= Probs.value[base]
      let ct=0
      while(rno>asum && ct<3){
        ct++
        asum+= Probs.value[base+ct]
      }
      return ct
    }

    function evaluate(action, state, distWas, distIs, lspeed, rspeed, stuck) {
      let howgood=0
      const base= state*4
      switch(state){
        case 0:
          howgood= stuck?-3:0
          if(distIs>distWas) howgood++
          if((lspeed+rspeed)>0) howgood++
          break
        case 1:
          howgood= stuck?-3:0
          if(distIs>distWas) howgood++
          else if(distIs<distWas) howgood-=2
          else if(lspeed>0||rspeed>0) howgood++
          break
        case 2:
          howgood= stuck?-3:0
          if(distIs>distWas) howgood++
          else if(distIs<distWas) howgood-=2
          else if(lspeed>0||rspeed>0) howgood++
          break
        case 3:
          howgood= (!stuck && distIs>=distWas)?1:-2
          break
      }
      const minProb=2
      for(let i=0;i<4;i++){
        if(i!==action){
          if(howgood>0){
            if(Probs.value[base+i]>minProb){
              Probs.value[base+i]--
              Probs.value[base+action]++
            }
          } else {
            for(let c2=0; c2>howgood;c2--){
              if(Probs.value[base+action]>minProb){
                Probs.value[base+i]++
                Probs.value[base+action]--
              }
            }
          }
        }
      }
      showProbs(state)
    }

    // 显示
    function showProbs(st){
      const base= st*4
      let arr=[]
      for(let i=0;i<4;i++){
        arr.push(Probs.value[base+i])
      }
      probStrings.value[st] = arr.join(' : ')
    }

    function setchecked(which) {
      // 0=All,1=None,2=Left,3=Right,4=Both
      if(which===0){
        for(let i=0;i<16;i++){
          Probs.value[i]=25
        }
        for(let s=0;s<4;s++){
          showProbs(s)
        }
      } else {
        const start= (which*4)-4
        for(let c=start;c< which*4;c++){
          Probs.value[c]=25
        }
        showProbs(which-1)
      }
    }

    // ---------------------------
    // 开始/停止
    // ---------------------------
    function startstop(){
      active.value=!active.value
    }
    function toggleRobot(){
      active.value=!active.value
    }

    // ---------------------------
    // 主循环
    // ---------------------------
    function moveTheRobot() {
      checkKeySpecial()
      if(!active.value)return

      const st= getState()
      const act= getAction(st)
      const distWas = robot.lookahead()
      const ls= Speeds[act]
      const rs= Speeds[act+4]

      robot.robotDraw(false)
      robot.moveRobot(ls, rs)
      evaluate(act, st, distWas, robot.lookahead(), ls, rs, robot.isstuck())
      redrawEnvironment(ctx)
      robot.robotDraw(true)
    }

    // ---------------------------
    // 使用你提供的 aRobot 函数 (包含旋转、光束传感器等)
    // ---------------------------
    function aRobot(x, y, sz, context) {
      // 参考你给出的 aRobot 结构
      const rob = {
        robotx : x,
        roboty : y,
        robotsz: sz,
        lspeed : 0,
        rspeed : 0,
        stuck  : false,
        sensorTypes: [1, 0, 1], // left, no-forward, right
        sensorReadings: [1000, 1000, 1000],
        ctx: context,
        dx:1,
        dy:0,
        angle:0,
        rotm:[1,0,0,1],
        basecol:"rgb(128, 0, 128)",
        robNum:0,
        speedControl:false,

        // 定义相应函数
        setRotMat,
        calcX: robCalcX,
        calcY: robCalcY,
        robotDraw,
        robDrawLine,
        robDrawArc,
        forBeam,
        detectObject,
        detectLight,
        detectPath,
        turnRobot,
        moveRobot,
        checkForObject,
        drawWheels,
        calcNewSpeed,
        drawSensor,
        getSensor,
        defineSensors,
        updateRobot,
        lookahead,
        isstuck,
        distFrom,
        checkMoveRobot,
        checkOnCanvas,
        raceStartPos
      }
      return rob
    }

    // ----------- aRobot 内部所需函数 -----------
    function distFrom(x, y) {
      return distance(x, y, this.robotx, this.roboty)
    }
    function robotDraw(show) {
      // 画机器人主体 + 传感器
      this.ctx.strokeStyle = show ? 'blue' : canvasback
      this.ctx.lineWidth   = show ? 2 : 4
      this.setRotMat()

      const afac = 4
      // 左、前(暂为0)、右
      if(this.sensorTypes[0]>0) this.drawSensor(0, this.robotsz*afac*1.4, -PIby4, show)
      if(this.sensorTypes[1]>0) this.drawSensor(1, this.robotsz*afac*1.4, 0, show)
      if(this.sensorTypes[2]>0) this.drawSensor(2, this.robotsz*afac*1.4, PIby4, show)

      this.ctx.fillStyle = show ? this.basecol : canvasback
      let dsz = show ? this.robotsz : this.robotsz+2
      this.ctx.beginPath()
      this.ctx.arc(this.robotx, this.roboty, dsz, 0, 2*PI)
      this.ctx.fill()

      this.drawWheels(show)
    }
    function getSensor(n) {
      return this.sensorReadings[n]
    }
    function defineSensors(sT) {
      for(let i=0;i<3;i++){
        this.sensorTypes[i]= sT[i]
      }
    }
    function drawSensor(sCt, sRange, sAngle, show){
      const beam= PIby4/2
      let ax= sRange*Math.cos(sAngle)
      let ay= sRange*Math.sin(sAngle)
      let rangeVal=0

      // 如果 show=false 或 forKey=true => 用上次读数
      if(!show || this.forKey){
        rangeVal= this.sensorReadings[sCt]
      } else {
        // 真实检测
        // if sensorType=6 => ...
        if(this.sensorTypes[sCt]==6){
          // skip, or detectPath
          rangeVal= this.detectPath(ax, ay)
        } else if(this.sensorTypes[sCt]>=3){
          // detectLight
          const isNarrow= (this.sensorTypes[sCt]==3)
          rangeVal= this.detectLight(ax, ay, sCt, isNarrow)
        } else {
          rangeVal= this.detectObject(ax, ay)
        }
        // 额外 type=2 => range detector with beam
        if(show && this.sensorTypes[sCt]==2){
          let range2
          for(let c=-1; c<=1; c+=0.5){
            if(c!==0){
              range2= this.detectObject(sRange*Math.cos(sAngle+ beam*c), sRange*Math.sin(sAngle+ beam*c))
              if(range2< rangeVal) rangeVal= range2
            }
          }
        }
      }

      let col= (show) ? ((rangeVal<=50)?"green": (rangeVal<=100)?"red":"blue") : canvasback
      this.ctx.strokeStyle=col
      this.ctx.beginPath()
      this.ctx.lineWidth= show? 2:4

      // 画线 or arc
      if(this.sensorTypes[sCt]==1){
        // whisker => simple line
        this.robDrawLine(0,0, ax, ay)
      } else {
        // arc
        // 低于100 => rangeVal * sRange/100
        let arcDist= (rangeVal<100) ? (rangeVal*sRange/100) : sRange
        this.robDrawArc(arcDist, sAngle- beam, sAngle+ beam, show)
      }
      this.ctx.stroke()
      this.sensorReadings[sCt] = rangeVal
    }
    function setRotMat() {
      const cosa= Math.cos(this.angle)
      const sina= Math.sin(this.angle)
      this.rotm= [cosa, sina, -sina, cosa]
    }
    function robCalcX(x, y) {
      return this.robotx + x*this.rotm[0] + y*this.rotm[2]
    }
    function robCalcY(x, y) {
      return this.roboty + x*this.rotm[1] + y*this.rotm[3]
    }
    function robDrawLine(x1,y1, x2,y2){
      drawLine(this.ctx,
               this.calcX(x1,y1), this.calcY(x1,y1),
               this.calcX(x2,y2), this.calcY(x2,y2))
    }
    function forBeam(brange,bangle, isforMoveto){
      let ax= brange*Math.cos(bangle)
      let ay= brange*Math.sin(bangle)
      let x= this.calcX(ax,ay)
      let y= this.calcY(ax,ay)
      if(isforMoveto) this.ctx.moveTo(x,y)
      else this.ctx.lineTo(x,y)
    }
    function robDrawArc(sRange, fromAngle, toAngle, show){
      let mAngle= (fromAngle+ toAngle)/2
      this.ctx.beginPath()
      this.ctx.lineWidth= show? 2:4
      this.forBeam(this.robotsz, mAngle, true)
      this.forBeam(sRange, fromAngle, false)
      this.forBeam(sRange, (fromAngle*3+toAngle)/4, false)
      this.forBeam(sRange, mAngle, false)
      this.forBeam(sRange, (fromAngle+toAngle*3)/4, false)
      this.forBeam(sRange, toAngle, false)
      this.forBeam(this.robotsz, mAngle, false)
      // stroke 在外面
    }
    function drawWheels(show){
      this.ctx.strokeStyle= show?"black":canvasback
      this.robDrawLine(0, -this.robotsz, 0, this.robotsz) // axle
      this.ctx.lineWidth= show?5:6
      let sfac= show? 0.6: 0.8
      // left wheel
      this.robDrawLine(-sfac*this.robotsz, -this.robotsz, sfac*this.robotsz, -this.robotsz)
      // right wheel
      this.robDrawLine(-sfac*this.robotsz, this.robotsz, sfac*this.robotsz, this.robotsz)
      this.ctx.lineWidth=2
    }
    function detectObject(antX, antY){
      let x2= this.calcX(antX, antY)
      let y2= this.calcY(antX, antY)
      let distN= testEnvironment(this.robotx,this.roboty, x2,y2, this.robNum)
      return distN
    }
    function detectLight(antX, antY, sCt, isNarrow){
      let x2= this.calcX(antX, antY)
      let y2= this.calcY(antX, antY)
      let distN= testLights(this.robotx, this.roboty, x2,y2, isNarrow)
      return distN
    }
    function detectPath(antX, antY) {
      let x2= this.calcX(antX, antY)
      let y2= this.calcY(antX, antY)
      let ans= distToPath(x2,y2)
      return (ans<8)?60:500
    }
    function lookahead(){
      // directly ahead => distance
      return this.detectObject(this.robotsz*5,0)
    }
    function calcNewSpeed(oldS, newS, hillType, speedControl){
      // simplified =>  just return newS
      return newS
    }
    function moveRobot(newLS, newRS){
      let hillType= getAreaType(this.robotx, this.roboty)
      this.lspeed= calcNewSpeed(this.lspeed, newLS, hillType, this.speedControl)
      this.rspeed= calcNewSpeed(this.rspeed, newRS, hillType, this.speedControl)
      let dist= (this.rspeed+ this.lspeed)*0.1
      let sina= (this.lspeed - this.rspeed)* PI /400
      let newAngle= this.angle + 2* Math.atan2(sina, Math.sqrt(1- sina*sina))
      this.updateRobot(newAngle, dist)
    }
    function updateRobot(newAngle, speedfac){
      let twopi= 2*PI
      while(newAngle<0) newAngle+= twopi
      while(newAngle>twopi) newAngle-= twopi
      this.angle= newAngle
      let cosa= Math.cos(newAngle)
      let sina= Math.sin(newAngle)
      this.checkMoveRobot(speedfac* cosa, speedfac* sina)
    }
    function checkMoveRobot(rdx, rdy){
      this.stuck= (distToEnvironment(this.robotx+rdx, this.roboty+rdy, this.robNum)<= this.robotsz)
      if(!this.stuck){
        this.robotx+= rdx
        this.roboty+= rdy
      }
    }
    function isstuck(){
      return this.stuck
    }
    function turnRobot(angle, speed){
      this.updateRobot(this.angle+ angle, speed)
    }
    function checkForObject(speed){
      this.setRotMat()
      let seeLeft= this.detectObject(-this.robotsz*4, this.robotsz*4)<100
      let seeRight= this.detectObject(this.robotsz*4, this.robotsz*4)<100
      if(seeLeft) this.turnRobot(-0.2, speed)
      else if(seeRight) this.turnRobot(0.2, speed)
      else this.turnRobot(0, speed)
    }
    function checkOnCanvas(newWidth){
      if(this.robotx+10> newWidth){
        this.robotx= newWidth-10
      }
    }
    function raceStartPos(goForward){
      // skip
    }

    // -------------
    // Lifecycle
    // -------------
    onMounted(()=>{
      ctx= canvasEl.value.getContext('2d')
      basicEnvironment(canvasEl.value.width, canvasEl.value.height)
      redrawEnvironment(ctx)

      robot= aRobot(canvasEl.value.width*0.3, canvasEl.value.height*0.4, 10, ctx)
      robot.robotDraw(true)

      // 点击画布 => 重定位
      canvasEl.value.addEventListener('mousedown',(ev)=>{
        const rect= canvasEl.value.getBoundingClientRect()
        robot.robotDraw(false)
        robot.robotx= ev.clientX- rect.left
        robot.roboty= ev.clientY- rect.top
        robot.stuck= false
        redrawEnvironment(ctx)
        robot.robotDraw(true)
      })

      // 键盘
      addKeyListener()

      // 定时器
      intervalId= setInterval(()=>{
        moveTheRobot()
      }, simtime)

      // 初始化 4 行
      for(let s=0; s<4; s++){
        showProbs(s)
      }
    })

    onBeforeUnmount(()=>{
      if(intervalId) clearInterval(intervalId)
    })

    return {
      canvasEl,
      probStrings,
      activeLabel,
      toggleRobot,
      setchecked
    }
  }
}

// ================== 工具函数 ===================
function drawLine(ctx, x1,y1, x2,y2){
  ctx.beginPath()
  ctx.moveTo(x1,y1)
  ctx.lineTo(x2,y2)
  ctx.stroke()
}
</script>

<style scoped>
.prob-section {
  margin-top: 10px;
  font-family: monospace;
}
.prob-section p {
  margin: 5px 0;
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