import{M as F}from"./MyTitle-lMHn4oIB.js";import{M as B,a as q,S as D}from"./StudyContent-D6_QEik8.js";import{C as I}from"./codeItem-DlYaIrsL.js";import{_ as y,a as x}from"./demoCode-Dfv_EAqb.js";import{_ as E,r as W,k as Y,o as T,c as $,w as c,a as e,b as i,d as o,g as C,h as O,F as X,t as J}from"./index-D_i8rq6_.js";const V={id:"timeDisplay"},s=100,l=300,b=20,L={__name:"study1new",setup(N){const f=W([]);let a,g;const u=[{x:400,y:250,r:25,color:"red",hit:!1,echoing:!1},{x:600,y:400,r:40,color:"blue",hit:!1,echoing:!1},{x:750,y:100,r:20,color:"orange",hit:!1,echoing:!1}];let m=0,k=null,p;function S(){a.fillStyle="#007b7b",a.beginPath(),a.ellipse(s,l,20,25,0,0,Math.PI*2),a.fill(),a.strokeStyle="black",a.lineWidth=6,a.beginPath(),a.moveTo(s,l-30),a.lineTo(s,l+30),a.stroke(),a.fillStyle="black",a.fillRect(s-15,l-35,30,10),a.fillRect(s-15,l+25,30,10),a.fillStyle="red",a.beginPath(),a.arc(s+b,l,4,0,Math.PI*2),a.fill()}function A(){for(const r of u)a.fillStyle=r.color,a.beginPath(),a.arc(r.x,r.y,r.r,0,Math.PI*2),a.fill()}function M(r,t,n,d,h=0,w=Math.PI/6){a.strokeStyle=d,a.lineWidth=3,a.beginPath();const j=h-w/2,U=h+w/2;a.arc(r,t,n,j,U),a.stroke()}function v(r,t,n,d){return Math.sqrt((r-n)**2+(t-d)**2)}function P(){f.value=[],m=0,p=performance.now();for(const r of u)r.hit=!1,r.echoing=!1,r.logged=!1;R()}function R(){a.clearRect(0,0,g.width,g.height),S(),A(),performance.now()-p,m+=2,M(s+b,l,m,"green");for(const n of u)!n.hit&&v(s+b,l,n.x,n.y)<=m+n.r&&(n.hit=!0,n.echoing=!0,n.hitTime=performance.now(),n.returnAngle=Math.atan2(l-n.y,s+b-n.x),f.value.push(`arrival ${n.color} Obstacle time = ${Math.round(n.hitTime-p)}ms`));for(const n of u)if(n.echoing){const h=(performance.now()-n.hitTime)*.2;M(n.x,n.y,h,n.color,n.returnAngle);const w=v(n.x,n.y,s+b,l);!n.logged&&h>=w&&(f.value.push(`从 ${n.color} Return time = ${Math.round(performance.now()-p)}ms`),n.logged=!0)}const r=Math.max(...u.map(n=>v(s+b,l,n.x,n.y))),t=u.every(n=>n.logged);m<r+100||!t?k=requestAnimationFrame(R):cancelAnimationFrame(k)}return Y(()=>{g=document.getElementById("ultrasoundCanvas"),a=g.getContext("2d"),S(),A()}),(r,t)=>(T(),$(B,null,{default:c(()=>[e("header",null,[i(F,{title1:"Ultrasonic Sensor Simulation",title2:"Observe how ultrasonic pulses detect distances via echo return."}),t[0]||(t[0]=e("div",{class:"info-panel"},[e("p",null,[o(" By simulating a small robot that uses ultrasound to transmit a signal that bounces back when it encounters an obstacle, the robot calculates the distance of the obstacle based on the time difference between transmission and reception. This is one of the core functions of autonomous robot obstacle avoidance, navigation, and path planning. "),e("br"),e("br"),o(" By constantly detecting the distance in different directions, the robot builds a ‘perception’ model of its surroundings, which can be used to determine whether to move forward, turn, stop and other operations. Ultrasonic waves are non-contact, safe and harmless for detecting fragile or moving objects, and are suitable for service robots, educational robots, warehousing and logistics scenarios. ")])],-1)),t[1]||(t[1]=e("br",null,null,-1)),t[2]||(t[2]=e("br",null,null,-1)),t[3]||(t[3]=e("div",{class:"info-panel"},[e("p",null,[e("b",null,"1. Visualisation of ultrasonic detection principles"),e("br"),e("br"),o(" The webpage demonstrates the expansion and reflection of ultrasonic wave front through animation, which helps to understand the physical process that is not visible in reality. You can see the wave expanding to an obstacle and bouncing back, forming an echo, and get the distance measurement result according to the time difference. "),e("br"),e("br"),e("b",null,"2. Combining Geometry and Physics Knowledge"),e("br"),e("br"),o(" Learners can learn how to calculate wave front propagation using geometry (angles, coordinates), and how to determine whether a target has been ‘hit’ by the distance between a circle and a point. "),e("br"),e("br"),e("b",null,"3. Bridge between programmed simulation and real-life control."),e("br"),e("br"),o(" The web simulation teaches how to implement ultrasonic ranging logic in JavaScript, including: "),e("br"),e("br"),e("ul",null,[e("li",null,"Animation control (wavefront expansion)"),e("br"),e("br"),e("li",null,"Status judgement (whether to hit an obstacle or not);"),e("br"),e("br"),e("li",null,"Timestamp recording (calculating echo time);"),e("br"),e("br"),e("li",null,"Dynamic visualisation (updating colours, wave lines, etc.).")]),e("br"),e("br"),e("b",null,"4. Increased understanding of the robot perception system"),e("br"),e("br"),o(" We can visualise the process of multiple obstacles being detected and hit sequentially, and feel that the robot does not ‘see’ but ‘hears’ the presence of obstacles. ")])],-1)),t[4]||(t[4]=e("br",null,null,-1)),t[5]||(t[5]=e("br",null,null,-1)),t[6]||(t[6]=e("p",null," Click the button below to simulate an ultrasonic pulse from the robot's red sensor. The green wave represents the emitted signal, and colored waves reflect from obstacles. Time measurements show how long it took to reach each object and return. ",-1))]),e("main",null,[e("button",{onClick:P},"Start Simulation"),t[7]||(t[7]=e("canvas",{id:"ultrasoundCanvas",width:"1200",height:"600"},null,-1)),e("div",V,[(T(!0),C(X,null,O(f.value,(n,d)=>(T(),C("p",{key:d},J(n),1))),128))])]),e("footer",null,[i(D,null,{default:c(()=>[t[12]||(t[12]=e("p",null,[e("strong",null,"Key Concepts:")],-1)),i(I,null,{code:c(()=>t[8]||(t[8]=[o("ctx.arc()")])),item:c(()=>t[9]||(t[9]=[o("Used to draw expanding wavefronts (emission and echo).")])),_:1}),i(I,null,{code:c(()=>t[10]||(t[10]=[o("requestAnimationFrame")])),item:c(()=>t[11]||(t[11]=[o("Used for smooth and accurate wave animation.")])),_:1}),t[13]||(t[13]=e("p",null," This visualization demonstrates how ultrasonic distance sensing works by measuring the time it takes for sound waves to travel to an object and back. ",-1)),t[14]||(t[14]=e("br",null,null,-1)),t[15]||(t[15]=e("br",null,null,-1)),i(y,null,{code:c(()=>[i(x,{type:"JavaScript",code:`\r
function computeReturnAngle(fromX, fromY, toX, toY) {\r
  return Math.atan2(fromY - toY, fromX - toX);\r
}\r
\r
// Draw a partial arc to simulate an ultrasonic wave front\r
function drawWave(x, y, r, color, angle = 0, spread = Math.PI / 6) {\r
  ctx.strokeStyle = color;\r
  ctx.lineWidth = 3;\r
  ctx.beginPath();\r
  const startAngle = angle - spread / 2;\r
  const endAngle = angle + spread / 2;\r
  ctx.arc(x, y, r, startAngle, endAngle);\r
  ctx.stroke();\r
}\r
\r
`})]),_:1}),t[16]||(t[16]=e("div",{class:"info-panel"},[e("p",null,[e("b",null,"Maths function application: Math.atan2()"),e("br"),e("br"),o(" Math.atan2(y, x) calculates the polar angle from (fromX, fromY) to (toX, toY) and returns the value in radians. "),e("br"),e("br"),o(" Unlike Math.atan(), atan2 correctly handles four-quadrant directions and is therefore suitable for angle and direction determination and motion calculation. "),e("br"),e("br"),o(" It is a basic tool for robot direction perception, target tracking, and path planning. ")]),e("br"),e("br"),e("p",null,[e("b",null,"Angle control and parameter defaults"),e("br"),e("br"),o(" Use ES6's default parameter assignments: angle = 0, spread = Math.PI / 6 "),e("br"),e("br"),o(" If no parameter is specified when calling, the function will automatically use the default value, which improves code flexibility. angle controls the direction and spread controls the beam spread angle, which is suitable for simulating the conical propagation effect of ultrasonic waves, radar and so on. ")])],-1)),t[17]||(t[17]=e("br",null,null,-1)),t[18]||(t[18]=e("br",null,null,-1)),i(y,null,{code:c(()=>[i(x,{type:"JavaScript",code:`\r
let waveRadius = 0;\r
let animationId = null;\r
let startTime;\r
\r
// Animation function: updates the radius of the ultrasonic wave and calculates the reflection time every frame.\r
function animate() {\r
  // Empty the canvas\r
  ctx.clearRect(0, 0, canvas.width, canvas.height);\r
\r
  // Redrawing robots and obstacles\r
  drawRobot();\r
  drawObstacles();  // This function iterates through the array of obstacles to draw each one.\r
\r
  // Calculate elapsed time and update wave radius\r
  const elapsed = performance.now() - startTime;\r
  waveRadius += 2;\r
\r
  // Plotting the green wave emitted from the robot's sensors\r
  drawWave(100 + 20, 300, waveRadius, 'green');\r
\r
  // Determine whether to continue the animation\r
  if (waveRadius < 1000) {  // Suppose the wave travels a certain distance and then stops animating\r
    animationId = requestAnimationFrame(animate);\r
  } else {\r
    cancelAnimationFrame(animationId);\r
  }\r
}\r
\r
// Record the initial time when starting an animation\r
function startSimulation() {\r
  waveRadius = 0;\r
  startTime = performance.now();\r
\r
  animate();\r
}\r
\r
`})]),_:1}),t[19]||(t[19]=e("div",{class:"info-panel"},[e("p",null,[e("b",null,"Animation control: requestAnimationFrame"),e("br"),e("br"),o(" Use the browser-supplied requestAnimationFrame() for frame-synchronised animation (smoother and more energy-efficient than setInterval). Animate() is called every frame until a termination condition is met (e.g. wave propagation ends). "),e("br"),e("br"),o(" cancelAnimationFrame() is responsible for manually stopping the animation at the end to prevent infinite looping. It embodies the mechanism of animation life cycle management. ")]),e("br"),e("br"),e("p",null,[e("b",null,"High precision time control: performance.now()"),e("br"),e("br"),o(" Use performance.now() to get high precision timestamps in milliseconds (decimals). "),e("br"),e("br"),o(" This can be used to calculate wave propagation times, ranging logic, etc. It is ideal for physics simulations that require time precision. ")]),e("br"),e("br"),e("p",null,[e("b",null,"Wavefront update logic and control judgement logic"),e("br"),e("br"),o(" ctx.clearRect() clears the entire canvas to avoid frame-to-frame image overlay. "),e("br"),e("br"),o(" Background content (robots, obstacles) needs to be redrawn for each frame, conforming to Canvas' full redraw model. "),e("br"),e("br"),o(" Set stop condition: stop the animation after the wave radius exceeds a certain range. This is a typical animation stopping mechanism, which can be extended to complex logic such as ‘stop when collision is detected’. ")])],-1)),t[20]||(t[20]=e("br",null,null,-1)),t[21]||(t[21]=e("br",null,null,-1)),i(y,null,{code:c(()=>[i(x,{type:"JavaScript",code:`\r
// Define an array of obstacle data\r
const obstacles = [\r
  { x: 400, y: 250, r: 25, color: 'red', hit: false, echoing: false },\r
  { x: 600, y: 400, r: 40, color: 'blue', hit: false, echoing: false },\r
  { x: 750, y: 100, r: 20, color: 'orange', hit: false, echoing: false },\r
];\r
\r
// Iterate through the array to detect if each obstacle is hit by the ultrasonic wavefront\r
for (const obs of obstacles) {\r
  if (!obs.hit && distance(100 + 20, 300, obs.x, obs.y) <= waveRadius + obs.r) {\r
    obs.hit = true;\r
    obs.echoing = true;\r
    obs.hitTime = performance.now();\r
    // Calculation of return wave angle, etc.\r
    obs.returnAngle = Math.atan2(300 - obs.y, (100 + 20) - obs.x);\r
    // Add log: record hit time\r
    console.log(\`到达 \${obs.color} Obstacle time = \${Math.round(obs.hitTime - startTime)}ms\`);\r
  }\r
}\r
\r
\r
`})]),_:1}),t[22]||(t[22]=e("div",{class:"info-panel"},[e("p",null,[e("b",null,"Array Definition and Object Structure"),e("br"),e("br"),o(" Each obstacle is an object containing position (x, y), radius (r), colour, status flags (hit, echoing), etc. The object structure can be used to store multiple objects in an array. "),e("br"),e("br"),o(" Using arrays to store multiple objects enables bulk management of entities and is suitable for modelling games, simulations, and robotics scenarios ")]),e("br"),e("br"),e("p",null,[e("b",null,"Geometric judgement: collision detection"),e("br"),e("br"),o(" By calculating the Euclidean distance between the robot and an obstacle, it is possible to determine whether the current wavefront has ‘touched’ the obstacle (i.e., whether the two circles intersect). "),e("br"),e("br"),o(" This is the basic form of 2D graphical collision detection, commonly used in games, robot vision and simulation systems. ")]),e("br"),e("br"),e("p",null,[e("b",null,"Status management with marking and time calculation with log output"),e("br"),e("br"),o(" Updates the status field of the obstacle object once a hit has been detected: "),e("br"),e("br"),o(" hit: has been hit; echoing: whether it is bouncing (can be used to draw reflected waves); hitTime: the time at which the hit was recorded. "),e("br"),e("br"),o(" Use performance.now() to get the exact timestamp, suitable for calculating the millisecond difference between events. Using console.log() to output debugging information is one of the most common debugging tools in browser development. ")])],-1)),i(q,{week:"4",num:"1"})]),_:1})])]),_:1}))}},Z=E(L,[["__scopeId","data-v-7e70ec43"]]);export{Z as default};
