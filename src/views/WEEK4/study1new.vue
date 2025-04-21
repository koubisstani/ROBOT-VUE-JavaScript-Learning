<template>
	<my-container>
	  <header>
		<my-title 
		  title1="Ultrasonic Sensor Simulation" 
		  title2="Observe how ultrasonic pulses detect distances via echo return."
		/>
	<div class="info-panel">
		<p>
		By simulating a small robot that uses ultrasound to transmit a signal that bounces back when it encounters an obstacle, the robot calculates the distance of the obstacle based on the time difference between transmission and reception. This is one of the core functions of autonomous robot obstacle avoidance, navigation, and path planning.
<br><br>
By constantly detecting the distance in different directions, the robot builds a ‘perception’ model of its surroundings, which can be used to determine whether to move forward, turn, stop and other operations. Ultrasonic waves are non-contact, safe and harmless for detecting fragile or moving objects, and are suitable for service robots, educational robots, warehousing and logistics scenarios.
		</p>
	</div>
<br><br>
	<div class="info-panel">
		<p>
		<b>1. Visualisation of ultrasonic detection principles</b>
<br><br>
The webpage demonstrates the expansion and reflection of ultrasonic wave front through animation, which helps to understand the physical process that is not visible in reality.
You can see the wave expanding to an obstacle and bouncing back, forming an echo, and get the distance measurement result according to the time difference.
<br><br>
<b>2. Combining Geometry and Physics Knowledge</b>
<br><br>
Learners can learn how to calculate wave front propagation using geometry (angles, coordinates), and how to determine whether a target has been ‘hit’ by the distance between a circle and a point.
<br><br>
<b>3. Bridge between programmed simulation and real-life control.</b>
<br><br>
The web simulation teaches how to implement ultrasonic ranging logic in JavaScript, including:
<br><br>
<ul>
<li>Animation control (wavefront expansion)</li>
<br><br>
<li>Status judgement (whether to hit an obstacle or not);</li>
<br><br>
<li>Timestamp recording (calculating echo time);</li>
<br><br>
<li>Dynamic visualisation (updating colours, wave lines, etc.).</li>
</ul>
<br><br>
<b>4. Increased understanding of the robot perception system</b>
<br><br>
We can visualise the process of multiple obstacles being detected and hit sequentially, and feel that the robot does not ‘see’ but ‘hears’ the presence of obstacles.
		</p>
	</div>
<br><br>
		<p>
		  Click the button below to simulate an ultrasonic pulse from the robot's red sensor. The green wave represents the emitted signal, and colored waves reflect from obstacles. Time measurements show how long it took to reach each object and return.
		</p>
	  </header>
  
	  <main>
		<button @click="startSimulation">Start Simulation</button>
		<canvas id="ultrasoundCanvas" width="1200" height="600"></canvas>
		<div id="timeDisplay">
		  <p v-for="(log, i) in timeLogs" :key="i">{{ log }}</p>
		</div>
	  </main>
  
	  <footer>
		<study-content>
		  <p><strong>Key Concepts:</strong></p>
		  <code-item>
			<template #code>ctx.arc()</template>
			<template #item>Used to draw expanding wavefronts (emission and echo).</template>
		  </code-item>
		  <code-item>
			<template #code>requestAnimationFrame</template>
			<template #item>Used for smooth and accurate wave animation.</template>
		  </code-item>

		  <p>
			This visualization demonstrates how ultrasonic distance sensing works by measuring the time it takes for sound waves to travel to an object and back.
		  </p>
<br><br>
		  <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
function computeReturnAngle(fromX, fromY, toX, toY) {
  return Math.atan2(fromY - toY, fromX - toX);
}

// Draw a partial arc to simulate an ultrasonic wave front
function drawWave(x, y, r, color, angle = 0, spread = Math.PI / 6) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  const startAngle = angle - spread / 2;
  const endAngle = angle + spread / 2;
  ctx.arc(x, y, r, startAngle, endAngle);
  ctx.stroke();
}

"
            />
          </template>
        </my-demo>
	<div class="info-panel">
		<p>
		 <b>Maths function application: Math.atan2()</b>
<br><br>
Math.atan2(y, x) calculates the polar angle from (fromX, fromY) to (toX, toY) and returns the value in radians.
<br><br>
Unlike Math.atan(), atan2 correctly handles four-quadrant directions and is therefore suitable for angle and direction determination and motion calculation.
<br><br>
It is a basic tool for robot direction perception, target tracking, and path planning.
		</p>
<br><br>
		<p>
		<b>Angle control and parameter defaults</b>
<br><br>
Use ES6's default parameter assignments: angle = 0, spread = Math.PI / 6
<br><br>
If no parameter is specified when calling, the function will automatically
 use the default value, which improves code flexibility. angle controls the 
 direction and spread controls the beam spread angle, which is suitable for 
 simulating the conical propagation effect of ultrasonic waves, radar and so on.
		</p>
	</div>
<br><br>
		<my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
let waveRadius = 0;
let animationId = null;
let startTime;

// Animation function: updates the radius of the ultrasonic wave and calculates the reflection time every frame.
function animate() {
  // Empty the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Redrawing robots and obstacles
  drawRobot();
  drawObstacles();  // This function iterates through the array of obstacles to draw each one.

  // Calculate elapsed time and update wave radius
  const elapsed = performance.now() - startTime;
  waveRadius += 2;

  // Plotting the green wave emitted from the robot's sensors
  drawWave(100 + 20, 300, waveRadius, 'green');

  // Determine whether to continue the animation
  if (waveRadius < 1000) {  // Suppose the wave travels a certain distance and then stops animating
    animationId = requestAnimationFrame(animate);
  } else {
    cancelAnimationFrame(animationId);
  }
}

// Record the initial time when starting an animation
function startSimulation() {
  waveRadius = 0;
  startTime = performance.now();

  animate();
}

"
            />
          </template>
        </my-demo>
	<div class="info-panel">
		<p>
		<b>Animation control: requestAnimationFrame</b>
<br><br>
Use the browser-supplied requestAnimationFrame() for frame-synchronised animation (smoother and more energy-efficient than setInterval). Animate() is called every frame until a termination condition is met (e.g. wave propagation ends).
<br><br>
cancelAnimationFrame() is responsible for manually stopping the animation at the end to prevent infinite looping. It embodies the mechanism of animation life cycle management.
		</p>
<br><br>
		<p>
		<b>High precision time control: performance.now()</b>
<br><br>
Use performance.now() to get high precision timestamps in milliseconds (decimals).
<br><br>
This can be used to calculate wave propagation times, ranging logic, etc. It is ideal for physics simulations that require time precision.
		</p>
<br><br>
		<p>
		<b>Wavefront update logic and control judgement logic</b>
<br><br>
ctx.clearRect() clears the entire canvas to avoid frame-to-frame image overlay.
<br><br>
Background content (robots, obstacles) needs to be redrawn for each frame, conforming to Canvas' full redraw model.
<br><br>
Set stop condition: stop the animation after the wave radius exceeds a certain range. This is a typical animation stopping mechanism, which can be extended to complex logic such as ‘stop when collision is detected’.
		</p>
	</div>
<br><br>
		<my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
// Define an array of obstacle data
const obstacles = [
  { x: 400, y: 250, r: 25, color: 'red', hit: false, echoing: false },
  { x: 600, y: 400, r: 40, color: 'blue', hit: false, echoing: false },
  { x: 750, y: 100, r: 20, color: 'orange', hit: false, echoing: false },
];

// Iterate through the array to detect if each obstacle is hit by the ultrasonic wavefront
for (const obs of obstacles) {
  if (!obs.hit && distance(100 + 20, 300, obs.x, obs.y) <= waveRadius + obs.r) {
    obs.hit = true;
    obs.echoing = true;
    obs.hitTime = performance.now();
    // Calculation of return wave angle, etc.
    obs.returnAngle = Math.atan2(300 - obs.y, (100 + 20) - obs.x);
    // Add log: record hit time
    console.log(`到达 ${obs.color} Obstacle time = ${Math.round(obs.hitTime - startTime)}ms`);
  }
}


"
            />
          </template>
        </my-demo>
	<div class="info-panel">
		<p>
		 <b>Array Definition and Object Structure</b>
<br><br>
Each obstacle is an object containing position (x, y), radius (r), colour, status flags (hit, echoing), etc. The object structure can be used to store multiple objects in an array.
<br><br>
Using arrays to store multiple objects enables bulk management of entities and is suitable for modelling games, simulations, and robotics scenarios
		</p>
<br><br>
		<p>
		 <b>Geometric judgement: collision detection</b>
<br><br>
By calculating the Euclidean distance between the robot and an obstacle, it is possible to determine whether the current wavefront has ‘touched’ the obstacle (i.e., whether the two circles intersect).
<br><br>
This is the basic form of 2D graphical collision detection, commonly used in games, robot vision and simulation systems.
		</p>
<br><br>
		<p>
		<b>Status management with marking and time calculation with log output</b>
<br><br>
Updates the status field of the obstacle object once a hit has been detected:
<br><br>
hit: has been hit;
echoing: whether it is bouncing (can be used to draw reflected waves);
hitTime: the time at which the hit was recorded.
<br><br>
Use performance.now() to get the exact timestamp, suitable for calculating the millisecond difference between events.
Using console.log() to output debugging information is one of the most common debugging tools in browser development.
		</p>
	</div>

		  <my-footer week="4" num="1" />
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
  
  const timeLogs = ref([])
  let ctx, canvas
  const robotX = 100, robotY = 300
  const sensorOffset = 20
  const obstacles = [
	{ x: 400, y: 250, r: 25, color: 'red', hit: false, echoing: false },
	{ x: 600, y: 400, r: 40, color: 'blue', hit: false, echoing: false },
	{ x: 750, y: 100, r: 20, color: 'orange', hit: false, echoing: false },
  ]
  
  let waveRadius = 0
  let animationId = null
  let startTime
  
  function drawRobot() {
	ctx.fillStyle = '#007b7b'
	ctx.beginPath()
	ctx.ellipse(robotX, robotY, 20, 25, 0, 0, Math.PI * 2)
	ctx.fill()
  
	ctx.strokeStyle = 'black'
	ctx.lineWidth = 6
	ctx.beginPath()
	ctx.moveTo(robotX, robotY - 30)
	ctx.lineTo(robotX, robotY + 30)
	ctx.stroke()
  
	ctx.fillStyle = 'black'
	ctx.fillRect(robotX - 15, robotY - 35, 30, 10)
	ctx.fillRect(robotX - 15, robotY + 25, 30, 10)
  
	ctx.fillStyle = 'red'
	ctx.beginPath()
	ctx.arc(robotX + sensorOffset, robotY, 4, 0, Math.PI * 2)
	ctx.fill()
  }
  
  function drawObstacles() {
	for (const obs of obstacles) {
	  ctx.fillStyle = obs.color
	  ctx.beginPath()
	  ctx.arc(obs.x, obs.y, obs.r, 0, Math.PI * 2)
	  ctx.fill()
	}
  }
  
  function drawWave(x, y, r, color, angle = 0, spread = Math.PI / 6) {
	ctx.strokeStyle = color
	ctx.lineWidth = 3
	ctx.beginPath()
	const startAngle = angle - spread / 2
	const endAngle = angle + spread / 2
	ctx.arc(x, y, r, startAngle, endAngle)
	ctx.stroke()
  }
  
  function distance(x1, y1, x2, y2) {
	return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
  }
  
  function startSimulation() {
	timeLogs.value = []
	waveRadius = 0
	startTime = performance.now()
	for (const obs of obstacles) {
	  obs.hit = false
	  obs.echoing = false
	  obs.logged = false
	}
	animate()
  }
  
  function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	drawRobot()
	drawObstacles()
  
	const elapsed = performance.now() - startTime
	waveRadius += 2
  
	drawWave(robotX + sensorOffset, robotY, waveRadius, 'green')
  
	for (const obs of obstacles) {
	  if (!obs.hit && distance(robotX + sensorOffset, robotY, obs.x, obs.y) <= waveRadius + obs.r) {
		obs.hit = true
		obs.echoing = true
		obs.hitTime = performance.now()
		obs.returnAngle = Math.atan2(robotY - obs.y, (robotX + sensorOffset) - obs.x)
		timeLogs.value.push(`arrival ${obs.color} Obstacle time = ${Math.round(obs.hitTime - startTime)}ms`)
	  }
	}
  
	for (const obs of obstacles) {
	  if (obs.echoing) {
		const echoElapsed = performance.now() - obs.hitTime
		const echoRadius = echoElapsed * 0.2
		drawWave(obs.x, obs.y, echoRadius, obs.color, obs.returnAngle)
  
		const distToRobot = distance(obs.x, obs.y, robotX + sensorOffset, robotY)
		if (!obs.logged && echoRadius >= distToRobot) {
		  timeLogs.value.push(`从 ${obs.color} Return time = ${Math.round(performance.now() - startTime)}ms`)
		  obs.logged = true
		}
	  }
	}
  
	const maxDist = Math.max(...obstacles.map(o => distance(robotX + sensorOffset, robotY, o.x, o.y)))
	const allReturned = obstacles.every(o => o.logged)
	if (waveRadius < maxDist + 100 || !allReturned) {
	  animationId = requestAnimationFrame(animate)
	} else {
	  cancelAnimationFrame(animationId)
	}
  }
  
  onMounted(() => {
	canvas = document.getElementById('ultrasoundCanvas')
	ctx = canvas.getContext('2d')
	drawRobot()
	drawObstacles()
  })
  </script>
  
  <style scoped>
  #ultrasoundCanvas {
	background-color: #eee;
	border-radius: 12px;
	display: block;
	margin: 20px auto;
  }
  
  button {
	padding: 10px 20px;
	font-size: 18px;
	margin-left: 20px;
  }
  
  #timeDisplay {
	padding: 10px 40px;
	font-family: monospace;
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

<style scoped>
.info-panel {
  background-color: #e8f6f4;
  border-left: 4px solid #00796b;
  padding: 20px;
  border-radius: 4px;
  margin: 20px 0;
  line-height: 1.6;
  color: #333;
  font-family: sans-serif;
}

</style>
