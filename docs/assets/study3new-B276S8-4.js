import{_ as I,r as y,k as U,o as A,c as B,w as s,a as t,b as a,d as r,t as Y,e as T,p as W}from"./index-D_i8rq6_.js";import{M as F}from"./MyTitle-lMHn4oIB.js";import{M as J,a as z,S as $}from"./StudyContent-D6_QEik8.js";import{C as x}from"./codeItem-DlYaIrsL.js";import{_ as g,a as f}from"./demoCode-Dfv_EAqb.js";const q={class:"controls"},j={class:"left"},E={class:"right"},H={__name:"study3new",setup(N){const c=y(70),p=y(!1),m=y(!0);let d,i,b=0,v=0,w=0;function l(n){i.beginPath();for(let e=0;e<n.length;e+=2)e===0?i.moveTo(n[e],n[e+1]):i.lineTo(n[e],n[e+1]);i.stroke()}function S(n,e,o){l([n,e,n+o,e-2*o,n+3*o,e+2*o,n+5*o,e-2*o,n+7*o,e+2*o,n+9*o,e-2*o,n+11*o,e+2*o,n+12*o,e])}function h(){const n=d.width/100,e=d.height/100;i.fillStyle="#e9eae8",i.fillRect(0,0,d.width,d.height),i.strokeStyle="black",i.lineWidth=2,l([n*10,e*10,n*10,e*80,n*53,e*80]);const o=e*(80-.6*c.value);if(i.strokeStyle="red",i.beginPath(),i.moveTo(n*10,o),i.lineTo(n*53,o),i.stroke(),m.value){i.strokeStyle="blue",i.lineWidth=3;let u=n*10+3;for(let P=0;P<5;P++){const k=n*8*c.value/100;i.beginPath(),i.moveTo(u,e*80),i.lineTo(u,e*20),i.lineTo(u+k,e*20),i.lineTo(u+k,e*80),i.lineTo(u+n*8,e*80),i.stroke(),u+=n*8}}i.fillStyle="black",i.font="16px monospace",i.fillText("PWM",n*8.5,e*18),i.fillText("PWM",n*8.5,e*55),i.fillText(`${c.value}%`,n*8.5,o),i.fillText("t",n*55,e*80),C(),D()}function C(){const n=d.width/100,e=d.height/100;i.strokeStyle="black",i.lineWidth=2;const o=p.value;i.fillStyle="#e9eae8",i.fillRect(n*10,e*54,n*40,e*40),i.fillStyle="black",i.textAlign="right",i.textBaseline="middle",i.fillText("PWM",n*10,e*56),l([n*12,e*56,n*20,e*56]),S(n*20,e*56,n/2),l([n*26,e*56,n*30,e*56,n*30,e*60]),l([n*20,e*65,n*20,e*60,n*40,e*60,n*40,e*65]),l([n*20,e*70,n*20,e*80]),l([n*40,e*70,n*40,e*80]),l([n*20,e*85,n*20,e*90,n*40,e*90,n*40,e*85]),l([n*20,e*75,n*26,e*75]),l([n*40,e*75,n*34,e*75]),l([n*30,e*90,n*30,e*92,n*30-6,e*92,n*30+6,e*92,n*30-4,e*93,n*30+4,e*93,n*30-2,e*94,n*30+2,e*94]),i.fillStyle="grey",i.beginPath(),i.arc(n*30,e*75,n*3,0,2*Math.PI),i.fill(),i.fillStyle="black",i.fillRect(n*26,e*73,n,e*4),i.fillRect(n*33,e*73,n,e*4),i.fillText(o?"-":"+",n*26,e*70),i.fillText(o?"+":"-",n*34,e*70),i.lineWidth=4,o?(l([n*20,e*65,n*18,e*69]),l([n*40,e*65,n*40,e*70]),l([n*20,e*85,n*20,e*80]),l([n*40,e*85,n*42,e*81])):(l([n*20,e*65,n*20,e*70]),l([n*40,e*65,n*42,e*69]),l([n*20,e*85,n*18,e*81]),l([n*40,e*85,n*40,e*80]))}function D(){const n=d.width/100,e=d.height/100,o=p.value?-1:1;i.fillStyle="#aaa",i.beginPath(),i.arc(n*80,e*50,e*30,0,Math.PI*2),i.fill(),i.strokeStyle="black",i.lineWidth=2,i.beginPath(),i.moveTo(n*80,e*50),i.lineTo(n*80+Math.cos(b)*e*26*o,e*50+Math.sin(b)*e*26*o),i.stroke()}function M(n){const e=n-v;v=n;const o=c.value*2e-4;w+=(o-w)*.05;const u=p.value?-1:1;b+=w*e*u,h(),requestAnimationFrame(M)}function R(){c.value=Math.min(100,c.value+5),h()}function V(){c.value=Math.max(0,c.value-5),h()}return U(()=>{d=document.getElementById("pwmCanvas"),i=d.getContext("2d"),h(),requestAnimationFrame(n=>{v=n,M(n)})}),(n,e)=>(A(),B(J,null,{default:s(()=>[t("header",null,[a(F,{title1:"PWM Motor Speed Control",title2:"Pulse Width Modulation adjusts motor speed by changing the average voltage."}),e[2]||(e[2]=t("div",{class:"info-panel"},[t("p",null,[r(" PWM control of motor speed is done by adjusting the average voltage, thus controlling the motor speed. "),t("br"),t("br"),r(" The page shows how the ratio of the high and low levels of the PWM signal (duty cycle) affects the operating speed of the motor. When the duty cycle is high, the average voltage is high so the motor speed is fast. When the duty cycle is low, the average voltage is low so the motor speed is slow. You can see that the high time alternates with the low time, and the ‘pulse width’ actually controls the proportion of time that the power supply is ‘on’. "),t("br"),t("br"),r(" Unlike analogue voltage regulation, PWM digitally switches the power supply with low energy loss and high efficiency, making it particularly suitable for small battery-powered robots. A small change in duty cycle can result in a smooth change in speed for small robots, helping to achieve more stable motion, turning or obstacle avoidance behaviour. ")]),t("br"),t("br"),t("p",null," Click the buttons to adjust the motor speed using PWM. Observe how the blue portion of the PWM signal changes, how the bridge circuit switches, and how the motor's rotation (right) varies accordingly. ")],-1)),e[3]||(e[3]=t("br",null,null,-1)),e[4]||(e[4]=t("br",null,null,-1))]),t("main",null,[e[7]||(e[7]=t("canvas",{id:"pwmCanvas",width:"1000",height:"500"},null,-1)),t("div",q,[t("div",j,[t("button",{onClick:R},"speed up"),t("button",{onClick:V},"Slow down"),t("p",null,"The speed is "+Y(c.value)+"%",1)]),t("div",E,[t("label",null,[T(t("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=o=>p.value=o),onChange:h},null,544),[[W,p.value]]),e[5]||(e[5]=r(" Reverse motor"))]),t("label",null,[T(t("input",{type:"checkbox","onUpdate:modelValue":e[1]||(e[1]=o=>m.value=o),onChange:h},null,544),[[W,m.value]]),e[6]||(e[6]=r(" Show PWM"))])])])]),t("footer",null,[a($,null,{default:s(()=>[e[14]||(e[14]=t("p",null,[t("strong",null,"JavaScript point of knowledge：")],-1)),a(x,null,{code:s(()=>e[8]||(e[8]=[r("ctx.arc()")])),item:s(()=>e[9]||(e[9]=[r("Used for drawing PWM signals, motor and turntable pointers in circuit diagrams.")])),_:1}),a(x,null,{code:s(()=>e[10]||(e[10]=[r("requestAnimationFrame()")])),item:s(()=>e[11]||(e[11]=[r("Achieve smooth motor rotation animation.")])),_:1}),a(x,null,{code:s(()=>e[12]||(e[12]=[r("Math.PI")])),item:s(()=>e[13]||(e[13]=[r("Mathematical calculations for plotting angles and directions.")])),_:1}),a(g,null,{code:s(()=>[a(f,{type:"JavaScript",code:`\r
   // Wrapped function: draws a set of points (in the form of an array) as a continuous line in order.\r
function putPoints(points) {\r
  ctx.beginPath();\r
  for (let i = 0; i < points.length; i += 2) {\r
    if (i === 0) {\r
      ctx.moveTo(points[i], points[i + 1]);\r
    } else {\r
      ctx.lineTo(points[i], points[i + 1]); } else { ctx.\r
    }\r
  }\r
  ctx.stroke();\r
}\r
\r
// Example: Drawing a polyline\r
putPoints([10, 10, 50, 50, 90, 10]); }\r
`})]),_:1}),e[15]||(e[15]=t("br",null,null,-1)),e[16]||(e[16]=t("br",null,null,-1)),e[17]||(e[17]=t("div",{class:"info-panel"},[t("p",null,[r(" Use ctx.beginPath() to start a new drawing path, then ctx.moveTo(x, y) to move the brush to the first point without drawing a line. Then use ctx.lineTo(x, y) to connect the brush from the current point to the next point, drawing a straight line segment. Finally, ctx.stroke() strokes the entire path. "),t("br"),t("br"),r(" The input array is divided into [x1, y1, x2, y2, ... , xn, yn]. Each group of two values represents a two-dimensional coordinate point (x, y). The i += 2 in the loop ensures that one complete coordinate point is processed at a time. ")])],-1)),e[18]||(e[18]=t("br",null,null,-1)),e[19]||(e[19]=t("br",null,null,-1)),a(g,null,{code:s(()=>[a(f,{type:"JavaScript",code:`\r
function drawHResistor(x, y, sz) {\r
  putPoints([\r
    x, y, x + sz, y - 2 * sz, x + 3 * sz, y + 2 * sz,\r
    x + 5 * sz, y - 2 * sz, x + 7 * sz, y + 2 * sz,\r
    x + 9 * sz, y - 2 * sz, x + 11 * sz, y + 2 * sz, x + 12 * sz, y\r
  ]);\r
}\r
\r
\r
drawHResistor(50, 100, 10);\r
\r
`})]),_:1}),e[20]||(e[20]=t("p",null," Learn to try to draw complex shapes using multiple polylines to encapsulate the drawing logic into a separate function to improve code reusability ",-1)),e[21]||(e[21]=t("br",null,null,-1)),e[22]||(e[22]=t("br",null,null,-1)),a(g,null,{code:s(()=>[a(f,{type:"JavaScript",code:`\r
// Drawing PWM signals\r
function drawPWM(speed, showPWM) {\r
  const cw = canvas.width / 100;   // 将 canvas 分成 100 份，方便坐标计算\r
  const ch = canvas.height / 100;\r
  \r
  // Clear the canvas and set the background colour\r
  ctx.fillStyle = '#e9eae8';\r
  ctx.fillRect(0, 0, canvas.width, canvas.height);\r
\r
  // Drawing the basic path of the PWM signal (black line)\r
  ctx.strokeStyle = 'black';\r
  ctx.lineWidth = 2;\r
  putPoints([cw * 10, ch * 10, cw * 10, ch * 80, cw * 53, ch * 80]);\r
\r
  // Calculates the average level based on speed and plots the red horizontal line\r
  const avgY = ch * (80 - 0.6 * speed);\r
  ctx.strokeStyle = 'red';\r
  ctx.beginPath();\r
  ctx.moveTo(cw * 10, avgY);\r
  ctx.lineTo(cw * 53, avgY);\r
  ctx.stroke();\r
\r
  // Optional display of the pulse portion of the PWM (blue)\r
  if (showPWM) {\r
    ctx.strokeStyle = 'blue';\r
    ctx.lineWidth = 3;\r
    let x = cw * 10 + 3;\r
    for (let i = 0; i < 5; i++) {\r
      const pulseWidth = cw * 8 * speed / 100;\r
      ctx.beginPath();\r
      ctx.moveTo(x, ch * 80);\r
      ctx.lineTo(x, ch * 20);\r
      ctx.lineTo(x + pulseWidth, ch * 20);\r
      ctx.lineTo(x + pulseWidth, ch * 80);\r
      ctx.lineTo(x + cw * 8, ch * 80);\r
      ctx.stroke();\r
      x += cw * 8;\r
    }\r
  }\r
  \r
  // Drawing text labels\r
  ctx.fillStyle = 'black';\r
  ctx.font = '16px monospace';\r
  ctx.fillText(\`PWM\`, cw * 8.5, ch * 18);\r
  ctx.fillText(\`\${speed}%\`, cw * 8.5, avgY);\r
}\r
\r
\r
`})]),_:1}),e[23]||(e[23]=t("div",{class:"info-panel"},[t("p",null,[t("b",null,"Graphic control"),t("br"),t("br"),r(" Use canvas.width / 100 to divide the canvas into percentage units (cw, ch), which makes all coordinate and size calculations independent of the canvas size, and improves generality; "),t("br"),t("br"),r(" ctx.lineWidth controls the line thickness, e.g. red average line is thin, blue PWM line is thick, more hierarchical; "),t("br"),t("br"),r(" ctx.strokeStyle and ctx.fillStyle control the colours, black for the main structure, red for the average level and blue for the PWM pulse. ")]),t("br"),t("br"),t("p",null,[t("b",null,"Dynamic parameters"),t("br"),t("br"),r(" speed is a parameter of PWM duty cycle (0~100), which affects three key plotting elements: "),t("br"),t("br"),r(" The position of the red average line changes with speed; the high level width of the blue pulse is determined by speed (pulseWidth); and the overall visual presentation of a faster or slower pulse rhythm. "),t("br"),t("br"),r(" This parameter allows you to dynamically demonstrate the actual effect of the PWM signal in applications such as controlling motor speed and voltage regulation. ")]),t("br"),t("br"),t("p",null,[t("b",null,"Logic Control"),t("br"),t("br"),r(" if (showPWM) controls whether or not to draw a pulse wave, making it easy to turn details on/off for teaching or debugging; "),t("br"),t("br"),r(" The for loop plots one PWM period segment at a time for a total of 5 periods, simulating actual pulse repetition; ")]),t("p",null,[t("br"),t("br"),t("b",null,"Visualisation Tips"),t("br"),t("br"),r(" Using cw, ch scaling avoids the use of absolute pixels and improves code adaptability; "),t("br"),t("br"),r(" The text labelling of the label ‘PWM’ with ${speed}% enhances the readability and pedagogical nature of the graphs; the red averaging line (avgY) embodies a visual representation of the average PWM voltage, helping to understand the effect of duty cycle on the output effect. ")])],-1)),e[24]||(e[24]=t("br",null,null,-1)),e[25]||(e[25]=t("br",null,null,-1)),a(g,null,{code:s(()=>[a(f,{type:"JavaScript",code:`\r
let rotation = 0;\r
let lastTimestamp = 0;\r
let angleVelocity = 0;\r
let speed = 70;             // PWM Speed Percentage\r
let reverseDirection = false; // Reversed or not\r
\r
// Drawing a motor rotation mark (a circle with a rotation pointer inside)\r
function drawMotorRotation() {\r
  const cw = canvas.width / 100;\r
  const ch = canvas.height / 100;\r
  const direction = reverseDirection ? -1 : 1;\r
\r
  // Drawing background circles\r
  ctx.fillStyle = '#aaa';\r
  ctx.beginPath();\r
  ctx.arc(cw * 80, ch * 50, ch * 30, 0, Math.PI * 2);\r
  ctx.fill();\r
\r
  // Drawing Pointers\r
  ctx.strokeStyle = 'black';\r
  ctx.lineWidth = 2;\r
  ctx.beginPath();\r
  ctx.moveTo(cw * 80, ch * 50);\r
  ctx.lineTo(\r
    cw * 80 + Math.cos(rotation) * ch * 26 * direction,\r
    ch * 50 + Math.sin(rotation) * ch * 26 * direction\r
  );\r
  ctx.stroke();\r
}\r
\r
// Animation function that updates the rotation angle based on the timestamp of each frame\r
function animate(timestamp) {\r
  const delta = timestamp - lastTimestamp;\r
  lastTimestamp = timestamp;\r
  const targetSpeed = speed * 0.0002;\r
  angleVelocity += (targetSpeed - angleVelocity) * 0.05;\r
  const direction = reverseDirection ? -1 : 1;\r
  rotation += angleVelocity * delta * direction;\r
\r
  // Redraw PWM signal and motor rotation state\r
  drawPWM(speed, true);\r
  drawMotorRotation();\r
\r
  requestAnimationFrame(animate);\r
}\r
\r
\r
`})]),_:1}),e[26]||(e[26]=t("div",{class:"info-panel"},[t("p",null,[t("b",null,"timestamp and delta control the physical consistency between frames."),t("br"),t("br"),r(" In animate(timestamp), timestamp is passed in by the browser and represents the time of the current frame. The interval delta is obtained by differing it from the lastTimestamp of the previous frame. This approach allows the animation to maintain a similar speed at different frame rates, which is called time-driven animation, and is the key to achieving frame-rate independent physics simulation. ")]),t("br"),t("br"),t("p",null,[t("b",null,"Physical simulation"),t("br"),t("br"),r(" Buffer update of angular velocity for smooth rotation "),t("br"),t("br"),r(" Simulate ‘inertia’ or ‘damping’ with the following formulas: angleVelocity += (targetSpeed - angleVelocity) * 0.05; "),t("br"),t("br"),r(" This is a first-order filter that makes the angular velocity approach the target speed gradually instead of instantaneously, simulating the process of starting or slowing down a motor in reality. It can effectively avoid sudden animation changes and bring smooth and natural transition effects. ")]),t("br"),t("br"),t("p",null,[t("b",null,"Conditions and Directions"),t("br"),t("br"),r(" Ternary operators switch between positive and negative direction "),t("br"),t("br"),r(" Switch between positive and negative direction by const direction = reverseDirection ? -1 : 1; to enable positive and negative control of the motor's rotation direction. Uniformly multiplying direction in the rotation angle update and pointer position calculation allows the rotation animation to freely switch between positive and negative directions. ")])],-1)),e[27]||(e[27]=t("br",null,null,-1)),e[28]||(e[28]=t("br",null,null,-1)),a(g,null,{code:s(()=>[a(f,{type:"JavaScript",code:`\r
// Increase PWM speed\r
function increaseSpeed() {\r
  speed = Math.min(100, speed + 5);\r
  drawPWM(speed, true);\r
}\r
\r
// Reduced PWM speed\r
function decreaseSpeed() {\r
  speed = Math.max(0, speed - 5);\r
  drawPWM(speed, true);\r
}\r
\r
\r
`})]),_:1}),e[29]||(e[29]=t("div",{class:"info-panel"},[t("p",null,[t("b",null,"User interaction and data update"),t("br"),t("br"),r(" Use functions to implement the logic of increasing and decreasing the speed and call the drawing function to update the canvas display in time. ")])],-1)),a(z,{week:"3",num:"3"})]),_:1})])]),_:1}))}},X=I(H,[["__scopeId","data-v-3be52b4b"]]);export{X as default};
