import{M as k,a as M,S as E}from"./StudyContent-D6_QEik8.js";import{M as F}from"./MyTitle-lMHn4oIB.js";import{C as T}from"./codeItem-DlYaIrsL.js";import{_ as R,a as B}from"./demoCode-Dfv_EAqb.js";import{_ as L,n as A,o as P,c as O,w as s,a as e,b as i,d as n}from"./index-D_i8rq6_.js";const N={components:{"my-title":F,"my-footer":M,"my-container":k,"study-content":E,"code-item":T}},j=Object.assign(N,{__name:"study2new",setup(W){return A(()=>{const d=document.getElementById("robotCanvas"),t=d.getContext("2d");let h=100,g=100,u=0,m=!1,f=null;function q(){var b,w,C,I;const o=Number((b=document.getElementById("rectX"))==null?void 0:b.value)||150,r=Number((w=document.getElementById("rectY"))==null?void 0:w.value)||150,l=Number((C=document.getElementById("rectWidth"))==null?void 0:C.value)||300,y=Number((I=document.getElementById("rectHeight"))==null?void 0:I.value)||200;t.beginPath(),t.rect(o,r,l,y),t.strokeStyle="green",t.lineWidth=3,t.stroke()}function v(){t.clearRect(0,0,d.width,d.height),q(),t.save(),t.translate(h,g),t.rotate(u);const o=0,r=0;t.fillStyle="#007b7b",t.beginPath(),t.ellipse(o,r,20,25,0,0,Math.PI*2),t.fill(),t.strokeStyle="#000",t.lineWidth=6,t.beginPath(),t.moveTo(o,r-30),t.lineTo(o,r+30),t.stroke(),t.fillStyle="#000",t.fillRect(o-15,r-35,30,10),t.fillRect(o-15,r+25,30,10),t.fillStyle="red",t.beginPath(),t.arc(o+20,r,4,0,Math.PI*2),t.fill(),t.restore()}let c=[],a=null,p=0;function x(){if(m){if(a&&p>0){if(a.cmd==="F"){const r=u;h+=2*Math.cos(r),g+=2*Math.sin(r)}else a.cmd==="R"?u+=Math.PI/180*2:a.cmd==="L"&&(u-=Math.PI/180*2);p-=2}else c.length>0?(a=c.shift(),p=Number(a.val)):(a=null,m=!1,document.getElementById("obeyButton").textContent="Obey");v(),f=requestAnimationFrame(x)}}function S(){if(m){cancelAnimationFrame(f),m=!1,document.getElementById("obeyButton").textContent="Obey";return}c=[];const r=document.getElementById("commandInput").value.trim().split(/\s+/);let l=0;for(;l<r.length;){const y=r[l].toUpperCase(),b=r[l+1]||"0";c.push({cmd:y,val:b}),l+=2}h=100,g=100,u=0,a=null,p=0,m=!0,document.getElementById("obeyButton").textContent="Stop",f=requestAnimationFrame(x)}document.getElementById("obeyButton").addEventListener("click",S),v()}),(d,t)=>(P(),O(k,null,{default:s(()=>[e("header",null,[i(F,{title1:"Command-Based Robot Control",title2:"Adjust the shape of the rectangle and then use commands to control the little robot to move around the rectangle."}),t[0]||(t[0]=e("div",{class:"info-panel"},[e("p",null,[n(" In this learning module, you will learn how to use command instructions to control the movement of the cart on the canvas while drawing an adjustable rectangular area. You can control the cart to move forward, turn right, or turn left for a step-by-step motion display. "),e("br"),e("br"),n(" The module not only demonstrates the basic principles of command parsing and animation execution, but also shows the dynamic effects of the robot and the rectangle through Canvas drawing, allowing you to intuitively understand the implementation of motion control and graphic drawing. ")])],-1)),t[1]||(t[1]=e("br",null,null,-1)),t[2]||(t[2]=e("br",null,null,-1)),t[3]||(t[3]=e("p",null,[n(" Enter your commands in the box (e.g. "),e("strong",null,"F 200 R 90 F 100"),n(") and click "),e("em",null,"Obey"),n(" to control the robot step by step. ")],-1)),t[4]||(t[4]=e("div",{class:"choices"},[e("label",null,"Commands:"),e("input",{id:"commandInput",style:{width:"600px","margin-left":"10px"}}),e("button",{id:"obeyButton",style:{"margin-left":"10px"}},"Obey")],-1)),t[5]||(t[5]=e("div",{class:"choices",style:{"margin-top":"20px"}},[e("label",null,"Rect X:"),e("input",{id:"rectX",type:"number",value:"100",style:{width:"80px","margin-left":"5px","margin-right":"10px"}}),e("label",null,"Rect Y:"),e("input",{id:"rectY",type:"number",value:"100",style:{width:"80px","margin-left":"5px","margin-right":"10px"}}),e("label",null,"Width:"),e("input",{id:"rectWidth",type:"number",value:"800",style:{width:"80px","margin-left":"5px","margin-right":"10px"}}),e("label",null,"Height:"),e("input",{id:"rectHeight",type:"number",value:"400",style:{width:"80px","margin-left":"5px"}})],-1))]),t[15]||(t[15]=e("main",{style:{"margin-top":"20px"}},[e("canvas",{id:"robotCanvas",width:"1200",height:"600"}),e("div",{id:"codeDisplay"})],-1)),e("footer",null,[i(E,null,{default:s(()=>[t[8]||(t[8]=e("p",null," Now the robot is no longer automatically following a path; instead, it reads your command instructions from the text box. Each command is interpreted and executed in sequence. ",-1)),i(T,null,{code:s(()=>t[6]||(t[6]=[n("F, R, L commands")])),item:s(()=>t[7]||(t[7]=[n(" F <distance> : Move forward <distance> pixels"),e("br",null,null,-1),n(" R <angle> : Turn right <angle> degrees"),e("br",null,null,-1),n(" L <angle> : Turn left <angle> degrees ")])),_:1}),i(R,null,{code:s(()=>[i(B,{type:"JavaScript",code:`\r
// Parses the command string entered by the user and converts each command into an object to be stored in an array.\r
function parseAndRunCommands() {\r
  // Stop execution if it is running\r
  if (isRunning) {\r
    cancelAnimationFrame(animationId);\r
    isRunning = false;\r
    document.getElementById('obeyButton').textContent = 'Obey';\r
    return;\r
  }\r
\r
  // Empty the previous command queue\r
  commands = [];\r
  const input = document.getElementById('commandInput').value.trim();\r
  const tokens = input.split(/\\s+/); // Split by whitespace\r
\r
  for (let i = 0; i < tokens.length; i += 2) {\r
    const cmd = tokens[i].toUpperCase(); // Command letters: F, R, L\r
    const val = Number(tokens[i + 1] || 0);\r
    commands.push({ cmd, val });\r
  }\r
\r
  // Reset the initial state of the robot\r
  x = 100;\r
  y = 100;\r
  angle = 0;\r
  currentCmd = null;\r
  stepsLeft = 0;\r
  isRunning = true;\r
  document.getElementById('obeyButton').textContent = 'Stop';\r
  animationId = requestAnimationFrame(animate);\r
}\r
\r
`})]),_:1}),t[9]||(t[9]=e("div",{class:"info-panel"},[e("p",null,[e("b",null,"DOM operations"),e("br"),e("br"),n(" Use document.getElementById() to access elements such as input boxes and buttons on a web page, .value to read the string entered by the user, and .textContent to dynamically modify the text content of the buttons (e.g., switching from ‘Obey’ to textContent is used to dynamically modify the text content on the button (e.g. ‘Obey’ switches to ‘Stop’), which is the basic method of implementing user interface interaction. ")]),e("br"),e("br"),e("p",null,[e("b",null,"string processing"),e("br"),e("br"),n(" Use .trim() to remove blank characters before and after input to ensure formatting standardisation; .split(/\\s+/) to slice the input string according to spaces, newlines and other blanks by regular expression to get commands and values; .toUpperCase() to convert the input commands to uppercase to improve the fault tolerance of the user's input, and to facilitate unified parsing. ")]),e("br"),e("br"),e("p",null,[e("b",null,"Objects and arrays"),e("br"),e("br"),n(" Each pair of commands and values is encapsulated into an object { cmd, val }, which is then stored in the commands queue (array). This structure is clearer, more extensible, and facilitates the subsequent execution of commands one by one in a sequential manner, reflecting the idea of good structured data management. ")]),e("br"),e("br"),e("p",null,[e("b",null,"Status Management"),e("br"),e("br"),n(" Multiple global variables (e.g. x, y, angle, isRunning, currentCmd, etc.) are used to record the current state of the robot such as its position, orientation, current command and whether it is running or not. These variables are kept up to date during the execution of the multi-frame animation, reflecting the implementation of continuous state tracking and logic control. ")])],-1)),t[10]||(t[10]=e("br",null,null,-1)),t[11]||(t[11]=e("br",null,null,-1)),i(R,null,{code:s(()=>[i(B,{type:"JavaScript",code:`\r
// Animation function: performs frame-by-frame movement and rotation according to the command queue.\r
function animate() {\r
  if (!isRunning) return;\r
\r
  // If the current command has not been completed, continue execution\r
  if (currentCmd && stepsLeft > 0) {\r
    const speed = 2; // Move or rotate 2 units per frame\r
    if (currentCmd.cmd === 'F') {\r
      // Move Forward: Calculate the increment based on the current angle\r
      x += speed * Math.cos(angle);\r
      y += speed * Math.sin(angle);\r
    } else if (currentCmd.cmd === 'R') {\r
      // turn right\r
      angle += (Math.PI / 180) * speed;\r
    } else if (currentCmd.cmd === 'L') {\r
      // turn left\r
      angle -= (Math.PI / 180) * speed;\r
    }\r
    stepsLeft -= speed;\r
  } else {\r
    // Load the next command after the current command is executed\r
    if (commands.length > 0) {\r
      currentCmd = commands.shift();\r
      stepsLeft = currentCmd.val;\r
    } else {\r
      // All commands are executed, ending the animation\r
      currentCmd = null;\r
      isRunning = false;\r
      document.getElementById('obeyButton').textContent = 'Obey';\r
    }\r
  }\r
\r
  // Plotting the current robot state\r
  drawRobot();\r
  // Request next frame of animation\r
  animationId = requestAnimationFrame(animate);\r
}\r
\r
`})]),_:1}),t[12]||(t[12]=e("div",{class:"info-panel"},[e("p",null,[e("b",null,"Conditional and logical judgements"),e("br"),e("br"),n(" A dynamic decision structure is represented by judging whether the current command exists (currentCmd && stepsLeft > 0), and the command type (F, R, L) to select a move or turn operation. ")]),e("br"),e("br"),e("p",null,[e("b",null,"Trigonometric applications and control of radian units"),e("br"),e("br"),n(" Use Math.cos(angle) and Math.sin(angle) to calculate the direction of forward displacement of the robot, enabling angle-based movement control. Commonly used in physics simulation, game programming. "),e("br"),e("br"),n(" Angle conversion using (Math.PI / 180) for steering represents the conversion of angle units from degrees to radians (JavaScript trigonometric functions are all in radians). ")]),e("br"),e("br"),e("p",null,[e("b",null,"array operation"),e("br"),e("br"),n(" commands is an array storing a sequence of commands entered by the user, e.g. { cmd: ‘F’, val: 50 } for 50 units of advance. When the robot completes the current command, the code uses commands.shift() to take the next command from the head of the array and assign it to currentCmd. "),e("br"),e("br"),n(" This is a typical queue operation: "),e("br"),e("br"),e("ul",null,[e("li",null,"The shift() method removes the top element of the array and returns it;"),e("br"),e("br"),e("li",null,"This conforms to the FIFO principle, where the first command entered is executed first;"),e("br"),e("br"),e("li",null,"Together with push(), you can build a complete command queue system.")])]),e("br"),e("br"),e("p",null,[e("b",null,"state variable management"),e("br"),e("br"),n(" This animation logic relies on several state variables to keep track of the command execution process: "),e("br"),e("br"),e("ul",null,[e("li",null,"currentCmd: indicates the current command being executed (e.g. { cmd: ‘F’, val: 50 }), null means there is no command being executed;"),e("br"),e("br"),e("li",null,"stepsLeft: record how many units of the current command are left to complete (e.g. 20 pixels left to advance, 10° left to rotate);"),e("br"),e("br"),e("li",null,"isRunning: controls whether the whole animation is running, to prevent starting the animation repeatedly, also used to cancel the animation frame when the stop button is clicked.")]),e("br"),e("br"),n(" The purpose of these variables is to allow the animation to independently determine what to do next in each frame based on its state. If the current command isn't done, it continues; if the command is done, it takes the next one from the queue; if the queue is empty, it stops running. ")])],-1)),t[13]||(t[13]=e("br",null,null,-1)),t[14]||(t[14]=e("br",null,null,-1)),i(M,{week:"4",num:"2"})]),_:1})])]),_:1}))}}),V=L(j,[["__scopeId","data-v-a33e69e3"]]);export{V as default};
