import{M as wt,a as xt,S as kt}from"./StudyContent-CBb6GlSf.js";import{M as St}from"./MyTitle-DtyWnuIV.js";import{C as Mt}from"./codeItem-BmcrMWJD.js";import{_ as Rt,a as Tt}from"./demoCode-mYz8MuQL.js";import{_ as Pt,r as C,s as Bt,k as Dt,x as jt,f as T,o as zt,c as Ct,w,a as t,b as d,d as i,t as Lt}from"./index-Bu-6ehgJ.js";const L=Math.PI,X=L/4,B="#e9eae8";function Et(u,o,l,b){return Math.sqrt((u-l)**2+(o-b)**2)}function Ft(u,o,l,b,v){return 1e3}function Nt(u,o,l,b,v){return 1e3}function Yt(u,o){return 999}function Xt(u,o,l){return u<0||u>600||o<0||o>300?0:999}function It(u,o){return 0}const Jt={name:"Week4Study1new",components:{"my-container":wt,"my-title":St,"my-footer":xt,"study-content":kt,"code-item":Mt,"my-demo":Rt,"demo-code":Tt},setup(){let o=null,l=null,b=0,v=null;const R=C(!1),E=Bt(()=>R.value?"Stop the robot":"Starting Robotics"),h=C([25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25]),x=[4,4,4,-4,-4,4,-4,-4],k=C(["","","",""]),g=C(null);function F(){document.addEventListener("keydown",e=>{b=e.keyCode||e.charCode})}function N(){switch(b){case 65:case 97:P(0);break;case 78:case 110:P(1);break;case 76:case 108:P(2);break;case 82:case 114:P(3);break;case 66:case 98:P(4);break;case 83:case 115:K();break;default:S()}b=0}function S(){switch(b){case 74:case 106:D(-1,0);break;case 73:case 105:D(0,-1);break;case 77:case 109:D(0,1);break;case 75:case 107:D(1,0);break}}function D(e,n){l&&(l.robotDraw(!1),l.checkMoveRobot(e*20,n*20),j(v),l.robotDraw(!0))}let I=[];function q(e,n){I=[0,0,e,0,e,n,0,n,0,0]}function A(e,n){e.beginPath(),e.moveTo(n[0],n[1]);for(let r=2;r<n.length;r+=2)e.lineTo(n[r],n[r+1]);e.stroke()}function j(e){e.fillStyle=B,e.fillRect(0,0,e.canvas.width,e.canvas.height),e.strokeStyle="black",e.lineWidth=1,A(e,I)}function O(){const e=l.getSensor(0)<=100,n=l.getSensor(2)<=100;return e&&n?3:e?1:n?2:0}function U(e){const n=e*4;let r=100*Math.random(),s=h.value[n],a=0;for(;r>s&&a<3;)a++,s+=h.value[n+a];return a}function G(e,n,r,s,a,f,p){let c=0;const M=n*4;switch(n){case 0:c=p?-3:0,s>r&&c++,a+f>0&&c++;break;case 1:c=p?-3:0,s>r?c++:s<r?c-=2:(a>0||f>0)&&c++;break;case 2:c=p?-3:0,s>r?c++:s<r?c-=2:(a>0||f>0)&&c++;break;case 3:c=!p&&s>=r?1:-2;break}const y=2;for(let m=0;m<4;m++)if(m!==e)if(c>0)h.value[M+m]>y&&(h.value[M+m]--,h.value[M+e]++);else for(let J=0;J>c;J--)h.value[M+e]>y&&(h.value[M+m]++,h.value[M+e]--);z(n)}function z(e){const n=e*4;let r=[];for(let s=0;s<4;s++)r.push(h.value[n+s]);k.value[e]=r.join(" : ")}function P(e){if(e===0){for(let n=0;n<16;n++)h.value[n]=25;for(let n=0;n<4;n++)z(n)}else{const n=e*4-4;for(let r=n;r<e*4;r++)h.value[r]=25;z(e-1)}}function K(){R.value=!R.value}function W(){R.value=!R.value}function V(){if(N(),!R.value)return;const e=O(),n=U(e),r=l.lookahead(),s=x[n],a=x[n+4];l.robotDraw(!1),l.moveRobot(s,a),G(n,e,r,l.lookahead(),s,a,l.isstuck()),j(v),l.robotDraw(!0)}function H(e,n,r,s){return{robotx:e,roboty:n,robotsz:r,lspeed:0,rspeed:0,stuck:!1,sensorTypes:[1,0,1],sensorReadings:[1e3,1e3,1e3],ctx:s,dx:1,dy:0,angle:0,rotm:[1,0,0,1],basecol:"rgb(128, 0, 128)",robNum:0,speedControl:!1,setRotMat:et,calcX:ot,calcY:nt,robotDraw:Z,robDrawLine:rt,robDrawArc:st,forBeam:it,detectObject:lt,detectLight:ct,detectPath:bt,turnRobot:mt,moveRobot:dt,checkForObject:vt,drawWheels:at,calcNewSpeed:Y,drawSensor:tt,getSensor:$,defineSensors:_,updateRobot:ht,lookahead:ut,isstuck:pt,distFrom:Q,checkMoveRobot:ft,checkOnCanvas:gt,raceStartPos:yt}}function Q(e,n){return Et(e,n,this.robotx,this.roboty)}function Z(e){this.ctx.strokeStyle=e?"blue":B,this.ctx.lineWidth=e?2:4,this.setRotMat();const n=4;this.sensorTypes[0]>0&&this.drawSensor(0,this.robotsz*n*1.4,-X,e),this.sensorTypes[1]>0&&this.drawSensor(1,this.robotsz*n*1.4,0,e),this.sensorTypes[2]>0&&this.drawSensor(2,this.robotsz*n*1.4,X,e),this.ctx.fillStyle=e?this.basecol:B;let r=e?this.robotsz:this.robotsz+2;this.ctx.beginPath(),this.ctx.arc(this.robotx,this.roboty,r,0,2*L),this.ctx.fill(),this.drawWheels(e)}function $(e){return this.sensorReadings[e]}function _(e){for(let n=0;n<3;n++)this.sensorTypes[n]=e[n]}function tt(e,n,r,s){const a=X/2;let f=n*Math.cos(r),p=n*Math.sin(r),c=0;if(!s||this.forKey)c=this.sensorReadings[e];else{if(this.sensorTypes[e]==6)c=this.detectPath(f,p);else if(this.sensorTypes[e]>=3){const y=this.sensorTypes[e]==3;c=this.detectLight(f,p,e,y)}else c=this.detectObject(f,p);if(s&&this.sensorTypes[e]==2){let y;for(let m=-1;m<=1;m+=.5)m!==0&&(y=this.detectObject(n*Math.cos(r+a*m),n*Math.sin(r+a*m)),y<c&&(c=y))}}let M=s?c<=50?"green":c<=100?"red":"blue":B;if(this.ctx.strokeStyle=M,this.ctx.beginPath(),this.ctx.lineWidth=s?2:4,this.sensorTypes[e]==1)this.robDrawLine(0,0,f,p);else{let y=c<100?c*n/100:n;this.robDrawArc(y,r-a,r+a,s)}this.ctx.stroke(),this.sensorReadings[e]=c}function et(){const e=Math.cos(this.angle),n=Math.sin(this.angle);this.rotm=[e,n,-n,e]}function ot(e,n){return this.robotx+e*this.rotm[0]+n*this.rotm[2]}function nt(e,n){return this.roboty+e*this.rotm[1]+n*this.rotm[3]}function rt(e,n,r,s){qt(this.ctx,this.calcX(e,n),this.calcY(e,n),this.calcX(r,s),this.calcY(r,s))}function it(e,n,r){let s=e*Math.cos(n),a=e*Math.sin(n),f=this.calcX(s,a),p=this.calcY(s,a);r?this.ctx.moveTo(f,p):this.ctx.lineTo(f,p)}function st(e,n,r,s){let a=(n+r)/2;this.ctx.beginPath(),this.ctx.lineWidth=s?2:4,this.forBeam(this.robotsz,a,!0),this.forBeam(e,n,!1),this.forBeam(e,(n*3+r)/4,!1),this.forBeam(e,a,!1),this.forBeam(e,(n+r*3)/4,!1),this.forBeam(e,r,!1),this.forBeam(this.robotsz,a,!1)}function at(e){this.ctx.strokeStyle=e?"black":B,this.robDrawLine(0,-this.robotsz,0,this.robotsz),this.ctx.lineWidth=e?5:6;let n=e?.6:.8;this.robDrawLine(-n*this.robotsz,-this.robotsz,n*this.robotsz,-this.robotsz),this.robDrawLine(-n*this.robotsz,this.robotsz,n*this.robotsz,this.robotsz),this.ctx.lineWidth=2}function lt(e,n){let r=this.calcX(e,n),s=this.calcY(e,n);return Ft(this.robotx,this.roboty,r,s,this.robNum)}function ct(e,n,r,s){return this.calcX(e,n),this.calcY(e,n),Nt(this.robotx,this.roboty)}function bt(e,n){return this.calcX(e,n),this.calcY(e,n),Yt()<8?60:500}function ut(){return this.detectObject(this.robotsz*5,0)}function Y(e,n,r,s){return n}function dt(e,n){let r=It(this.robotx,this.roboty);this.lspeed=Y(this.lspeed,e,r,this.speedControl),this.rspeed=Y(this.rspeed,n,r,this.speedControl);let s=(this.rspeed+this.lspeed)*.1,a=(this.lspeed-this.rspeed)*L/400,f=this.angle+2*Math.atan2(a,Math.sqrt(1-a*a));this.updateRobot(f,s)}function ht(e,n){let r=2*L;for(;e<0;)e+=r;for(;e>r;)e-=r;this.angle=e;let s=Math.cos(e),a=Math.sin(e);this.checkMoveRobot(n*s,n*a)}function ft(e,n){this.stuck=Xt(this.robotx+e,this.roboty+n,this.robNum)<=this.robotsz,this.stuck||(this.robotx+=e,this.roboty+=n)}function pt(){return this.stuck}function mt(e,n){this.updateRobot(this.angle+e,n)}function vt(e){this.setRotMat();let n=this.detectObject(-this.robotsz*4,this.robotsz*4)<100,r=this.detectObject(this.robotsz*4,this.robotsz*4)<100;n?this.turnRobot(-.2,e):r?this.turnRobot(.2,e):this.turnRobot(0,e)}function gt(e){this.robotx+10>e&&(this.robotx=e-10)}function yt(e){}return Dt(()=>{v=g.value.getContext("2d"),q(g.value.width,g.value.height),j(v),l=H(g.value.width*.3,g.value.height*.4,10,v),l.robotDraw(!0),g.value.addEventListener("mousedown",e=>{const n=g.value.getBoundingClientRect();l.robotDraw(!1),l.robotx=e.clientX-n.left,l.roboty=e.clientY-n.top,l.stuck=!1,j(v),l.robotDraw(!0)}),F(),o=setInterval(()=>{V()},20);for(let e=0;e<4;e++)z(e)}),jt(()=>{o&&clearInterval(o)}),{canvasEl:g,probStrings:k,activeLabel:E,toggleRobot:W,setchecked:P}}};function qt(u,o,l,b,v){u.beginPath(),u.moveTo(o,l),u.lineTo(b,v),u.stroke()}const At={class:"prob-section"},Ot=["value"],Ut=["value"],Gt=["value"],Kt=["value"],Wt={ref:"canvasEl",id:"myCanvasSYS",width:"600",height:"300",style:{border:"1px solid #000"}};function Vt(u,o,l,b,v,R){const E=T("my-title"),h=T("code-item"),x=T("demo-code"),k=T("my-demo"),g=T("my-footer"),F=T("study-content"),N=T("my-container");return zt(),Ct(N,null,{default:w(()=>[t("header",null,[d(E,{title1:"Learning Robot Simulator",title2:"Using aRobot Logic with Rotation Matrix and Beam Sensor"}),o[6]||(o[6]=t("div",{class:"info-panel"},[t("p",null,[t("b",null,"Reinforcement learning is a machine learning method that learns how to make the best decisions by interacting with its environment. In layman's terms, reinforcement learning is like teaching a robot how to autonomously explore its environment and gradually optimise its behaviour based on feedback."),t("br"),t("br"),t("br"),t("b",null,"There are several key concepts in reinforcement learning:"),t("br"),t("br"),t("ul",null,[t("li",null,"Agent: The robot itself, which is responsible for making decisions and executing actions."),t("br"),t("br"),t("li",null,"Environment: the space or scene in which the robot moves, e.g., a maze, an obstacle scene."),t("br"),t("br"),t("li",null,"State: the position of the robot at a certain moment, sensor data and other environmental information."),t("br"),t("br"),t("li",null,"Action: the actions that the robot can perform, such as moving forward, turning left, turning right."),t("br"),t("br"),t("li",null,"Reward: the feedback the robot receives after each action, which can be positive (encouragement) or negative (punishment), to help the robot judge whether the action is good or bad.")])]),t("p",null,[t("br"),t("br"),i(" The goal of reinforcement learning is to enable the robot to learn to make optimal decisions in various situations by continuously trying actions and getting feedback. Specifically in this project, the small robot will adjust the probability of each action according to the feedback, and gradually learn how to effectively avoid obstacles, navigate autonomously, and exhibit intelligent behaviour in complex environments. "),t("br"),t("br"),i(" Through this project, you will intuitively understand how reinforcement learning can drive robots to learn autonomously, dynamically adapt to the environment, and autonomously optimise their decisions and actions. ")])],-1)),o[7]||(o[7]=t("br",null,null,-1)),o[8]||(o[8]=t("br",null,null,-1)),o[9]||(o[9]=t("div",null," This page combines the complete logic of the web page with that of aRobot (with sensor beam/differential steering).： ",-1)),o[10]||(o[10]=t("ul",null,[t("li",null,"Robot moves and rotates in real time in Canvas and draws wheels and beam sensors"),t("li",null,"Four states: no wall / left wall / right wall / double wall, action probability dynamic learning"),t("li",null,[i("button or key (on a device) "),t("strong",null,"S"),i(" Start/Stop；"),t("strong",null,"A/N/L/R/B"),i(" reset probability")]),t("li",null,[i("Click on the canvas to reset the robot position；"),t("strong",null,"I/J/K/M"),i(" manual operation")])],-1))]),t("main",null,[t("button",{onClick:o[0]||(o[0]=(...S)=>b.toggleRobot&&b.toggleRobot(...S))},Lt(b.activeLabel),1),t("div",At,[t("p",null,[o[11]||(o[11]=i("FF FB BF BB (wall-less)： ")),t("input",{type:"text",value:b.probStrings[0],readonly:""},null,8,Ot)]),t("p",null,[o[12]||(o[12]=i("FF FB BF BB (left wall)： ")),t("input",{type:"text",value:b.probStrings[1],readonly:""},null,8,Ut)]),t("p",null,[o[13]||(o[13]=i("FF FB BF BB (right wall)： ")),t("input",{type:"text",value:b.probStrings[2],readonly:""},null,8,Gt)]),t("p",null,[o[14]||(o[14]=i("FF FB BF BB (double wall)： ")),t("input",{type:"text",value:b.probStrings[3],readonly:""},null,8,Kt)]),t("p",null,[o[15]||(o[15]=i(" reset probability： ")),t("button",{onClick:o[1]||(o[1]=S=>b.setchecked(0))},"All"),t("button",{onClick:o[2]||(o[2]=S=>b.setchecked(1))},"None"),t("button",{onClick:o[3]||(o[3]=S=>b.setchecked(2))},"Left"),t("button",{onClick:o[4]||(o[4]=S=>b.setchecked(3))},"Right"),t("button",{onClick:o[5]||(o[5]=S=>b.setchecked(4))},"Both")])]),t("canvas",Wt,null,512)]),t("footer",null,[d(F,null,{default:w(()=>[o[18]||(o[18]=t("p",null,[i(" Detects and updates robot status every 20ms; automatically reduces the probability of this action if stuck. If you need real wall/light detection, please set the "),t("em",null,"testEnvironment / testLights / distToEnvironment"),i(" Isofunctions refinement。 ")],-1)),d(h,null,{code:w(()=>o[16]||(o[16]=[i("drawSensor() + setRotMat() + robDrawArc()")])),item:w(()=>o[17]||(o[17]=[i("Implementation of a beam sensor with a rotation matrix on a robot with the ability to draw arcs or line segments.")])),_:1}),d(k,null,{code:w(()=>[d(x,{type:"JavaScript",code:`\r
// Encapsulation: draws a straight line. Pass in the context and start and end point coordinates\r
function drawLine(ctx, x1, y1, x2, y2) {\r
  ctx.beginPath();\r
  ctx.moveTo(x1, y1);\r
  ctx.lineTo(x2, y2);\r
  ctx.stroke();\r
}\r
\r
// Wrapper: Get the position of the mouse relative to the canvas.\r
function getMousePos(canvas, event) {\r
  var rect = canvas.getBoundingClientRect();\r
  return {\r
    x: event.clientX - rect.left,  // Subtract the left offset of the canvas boundary\r
    y: event.clientY - rect.top    // Minus the top offset of the canvas boundary\r
  };\r
}\r
\r
`})]),_:1}),o[19]||(o[19]=t("div",{class:"info-panel"},[t("p",null,[t("b",null,"Functions and Encapsulation"),t("br"),t("br"),i(" The code shows how to encapsulate a piece of code that draws a straight line, and how to encapsulate the logic that gets the position of the mouse click on the Canvas. "),t("br"),t("br"),i(" Encapsulating common drawing logic or data processing into separate functions simplifies the main code logic and facilitates subsequent maintenance and debugging. "),t("br"),t("br"),i(" In the event response, you can directly call getMousePos(canvas, event) to get the exact click position, instead of repeating the calculation in each event processing function. ")])],-1)),o[20]||(o[20]=t("br",null,null,-1)),o[21]||(o[21]=t("br",null,null,-1)),d(k,null,{code:w(()=>[d(x,{type:"JavaScript",code:`\r
// Calculate the Euclidean distance between two points\r
function distance(x1, y1, x2, y2) {\r
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);\r
}\r
\r
// Calculate the rotation matrix for converting local coordinates to global coordinates when the robot rotates\r
function setRotMat(angle) {\r
  const cosa = Math.cos(angle);\r
  const sina = Math.sin(angle);\r
  // Return the rotation matrix: [cosθ, sinθ, -sinθ, cosθ].\r
  return [cosa, sina, -sina, cosa];\r
}\r
\r
// Using the rotation matrix, the local points (x, y) are converted to global coordinates and the robot is located at (robotX, robotY).\r
function transformPoint(x, y, robotX, robotY, rotMat) {\r
  return {\r
    x: robotX + x * rotMat[0] + y * rotMat[2],\r
    y: robotY + x * rotMat[1] + y * rotMat[3]\r
  };\r
}\r
\r
\r
let angle = 0.3; // Current robot angle\r
let robotX = 100, robotY = 100;\r
const rotMat = setRotMat(angle);\r
const localSensorX = 50, localSensorY = 0;\r
const sensorGlobalPos = transformPoint(localSensorX, localSensorY, robotX, robotY, rotMat);\r
console.log(sensor:, sensorGlobalPos);\r
\r
`})]),_:1}),o[22]||(o[22]=t("div",{class:"info-panel"},[t("p",null,[t("b",null,"Mathematical and geometric calculations"),t("br"),t("br"),i(" Math.sqrt(), Math.sin(), Math.cos(), Exponential operators ** "),t("br"),t("br"),t("ul",null,[t("li",null,"These are the built-in maths tools provided by JavaScript for calculating distances, angles, rotations, and so on;"),t("br"),t("br"),t("li",null,"Math.sqrt() is used to calculate the Euclidean distance between two points;"),t("br"),t("br"),t("li",null,"Math.sin() and Math.cos() are used to calculate the trigonometric ratios corresponding to angular directions, and are the basis for angle-driven shifts and rotations;"),t("br"),t("br"),t("li",null,"** is the power operator (exponentiation), used here to square distance differences;")])])],-1)),o[23]||(o[23]=t("br",null,null,-1)),o[24]||(o[24]=t("br",null,null,-1)),o[25]||(o[25]=t("p",null,[i(" The code also involves knowledge of linear algebra to construct 2D rotation matrices for angle control and coordinate rotation. "),t("br"),t("br"),i(" JavaScript represents this matrix as an array [cosθ, sinθ, -sinθ, cosθ]. Multiplying this matrix by the coordinates of a point allows rotation around the origin or a centre point, a classic practice from mathematical theory to programmatic expression. ")],-1)),o[26]||(o[26]=t("br",null,null,-1)),o[27]||(o[27]=t("br",null,null,-1)),o[28]||(o[28]=t("div",{class:"info-panel"},[t("p",null,[t("b",null,"coordinate transformation"),t("br"),t("br"),i(" From implementing local to global coordinate transformations, combined with rotations and translations. "),t("br"),t("br"),t("ul",null,[t("li",null,"A small robot or sensor has a fixed position in its own ‘body-local co-ordinate system’;"),t("br"),t("br"),t("li",null,"If the robot body is rotated or translated, the point is rotated and superimposed accordingly;"),t("br"),t("br"),t("li",null,"The transformPoint() function takes the local point, transforms it into a rotation matrix, adds the robot's coordinates, and outputs the global position;")])])],-1)),o[29]||(o[29]=t("br",null,null,-1)),o[30]||(o[30]=t("br",null,null,-1)),o[31]||(o[31]=t("div",{class:"info-panel"},[t("p",null,[t("b",null,"function combination"),t("br"),t("br"),i(" Modular function design, sequential use of complex logic in combinations "),t("br"),t("br"),i(" All functions are split into small, independent functions (e.g. distance(), setRotMat(), transformPoint()), each responsible for a single task. These functions are combined as needed in the main process to achieve a complete transition from ‘robot perspective to global awareness’; ")])],-1)),o[32]||(o[32]=t("br",null,null,-1)),o[33]||(o[33]=t("br",null,null,-1)),d(k,null,{code:w(()=>[d(x,{type:"JavaScript",code:`\r
// Get the position of the mouse click on the canvas \r
function getMousePos(canvas, event) {\r
  var rect = canvas.getBoundingClientRect();\r
  return {\r
    x: event.clientX - rect.left,\r
    y: event.clientY - rect.top\r
  };\r
}\r
\r
// Adding mouse click event bindings to canvas\r
canvasEl.value.addEventListener('mousedown', (ev) => {\r
  const rect = canvasEl.value.getBoundingClientRect();\r
  // First cancel the current drawing of the robot, update the position, and then redraw it\r
  robot.robotDraw(false);\r
  robot.robotx = ev.clientX - rect.left;\r
  robot.roboty = ev.clientY - rect.top;\r
  robot.stuck = false;\r
  redrawEnvironment(ctx);\r
  robot.robotDraw(true);\r
});\r
\r
`})]),_:1}),o[34]||(o[34]=t("div",{class:"info-panel"},[t("p",null,[t("b",null,"event processing"),t("br"),t("br"),i(" The code implements the ability to reset the position of the robot after a mouse click by adding event listeners to the canvas element. The following code block shows how to bind the mouse event, get the clicked position, and update the robot's position based on the clicked position. "),t("br"),t("br"),t("ul",null,[t("li",null,"Add an event listener to the canvas using addEventListener and call the handler function whenever the user clicks."),t("br"),t("br"),t("li",null,"Get the position of the canvas on the page with getBoundingClientRect() and then calculate the coordinates of the clicked position relative to the canvas.")])])],-1)),o[35]||(o[35]=t("br",null,null,-1)),o[36]||(o[36]=t("br",null,null,-1)),d(k,null,{code:w(()=>[d(x,{type:"JavaScript",code:`\r
// Define aRobot constructor to create a robot object.\r
function aRobot(x, y, size, ctx) {\r
  this.robotx = x;\r
  this.roboty = y;\r
  this.robotsz = size;\r
  this.angle = 0;\r
  this.ctx = ctx;\r
  this.lspeed = 0;\r
  this.rspeed = 0;\r
  this.stuck = false;\r
}\r
\r
// Defining the Draw Robot method on the aRobot prototype\r
aRobot.prototype.robotDraw = function(show) {\r
  // Sets the drawing style and determines whether to draw or erase based on the show parameter.\r
  this.ctx.strokeStyle = show ? 'blue' : canvasback;\r
  this.ctx.lineWidth = show ? 2 : 4;\r
\r
  const rotMat = setRotMat(this.angle);\r
  // Draw the circular body using the centre of this robot as a reference point\r
  this.ctx.beginPath();\r
  this.ctx.arc(this.robotx, this.roboty, this.robotsz, 0, 2 * Math.PI);\r
  this.ctx.fillStyle = show ? '#007b7b' : canvasback;\r
  this.ctx.fill();\r
};\r
\r
// Methods for defining robot movement\r
aRobot.prototype.moveRobot = function(newLS, newRS) {\r
\r
  let dist = (newLS + newRS) * 0.1;\r
\r
  this.angle += (newLS - newRS) * 0.01;\r
\r
  this.robotx += dist * Math.cos(this.angle);\r
  this.roboty += dist * Math.sin(this.angle);\r
};\r
\r
\r
const robot = new aRobot(200, 200, 15, ctx);\r
robot.robotDraw(true);\r
robot.moveRobot(4, 2);\r
robot.robotDraw(true);\r
\r
`})]),_:1}),o[37]||(o[37]=t("div",{class:"info-panel"},[t("p",null,[t("b",null,"object-oriented programming"),t("br"),t("br"),i(" The properties and methods of a robot are encapsulated into an object through the constructor pattern, allowing each robot to have its own state and behaviour. The following code shows how to define a simple robot constructor and bind the methods to a prototype. "),t("br"),t("br"),i(" Use the function definition constructor to encapsulate properties such as position, angle, and state. These properties provide independent state for each robot object and are the basis for enabling multiple robot instances to operate independently of each other; "),t("br"),t("br"),i(" Use aRobot.prototype.robotDraw = function(...) to bind methods to the constructor's prototype. All instances created by aRobot can share these methods without duplicating them, saving memory. Methods on the prototype such as robotDraw and moveRobot represent behavioural definitions that are shared by all robots, making them easy to maintain and extend in a uniform way. "),t("br"),t("br"),i(" Differential steering and trigonometric control of position updates mimic real robot kinematics. "),t("br"),t("br"),i(" The movement logic is based on the principle of a ‘differential trolley’. If the left and right wheels have equal speeds, the robot moves in a straight line; if the left and right wheels have different speeds, the robot rotates; "),t("br"),t("br"),i(" Math.cos() and Math.sin() are used to calculate the x and y increments of the current orientation, reflecting the angle-driven position update. Overall the code simulates how in reality the robot controls motion based on the speed of the motors on both sides, and is the basis for robot control. "),t("br"),t("br"),i(" Dynamic control of behaviour and display based on incoming speed parameter, drawing state judgement, etc. "),t("br"),t("br")])],-1)),o[38]||(o[38]=t("ul",null,[t("li",null,"robotDraw(show) determines whether to draw or erase based on the show parameter;"),t("br"),t("br"),t("li",null,"moveRobot(newLS, newRS) dynamically controls the direction and speed of the robot based on the speed of the left and right wheels passed in;"),t("br"),t("br"),t("li",null,"The parameter-driven design enhances the flexibility and reusability of the functions and makes the robot behaviour controllable and variable;"),t("br"),t("br"),t("li",null,"This design embodies the ‘data-driven behaviour’ mindset of programming.")],-1)),o[39]||(o[39]=t("br",null,null,-1)),o[40]||(o[40]=t("br",null,null,-1)),d(k,null,{code:w(()=>[d(x,{type:"JavaScript",code:`\r
// Evaluation function\r
function evaluate(action, state, distBefore, distAfter, leftSpeed, rightSpeed, stuck) {\r
  let score = 0;\r
  // Judgement based on the state of the environment (0=no wall, 1=left wall, 2=right wall, 3=double wall)\r
  switch(state) {\r
    case 0:\r
      score = stuck ? -3 : 0;\r
      if(distAfter > distBefore) score++;\r
      break;\r
    case 1: // left wall\r
      score = stuck ? -3 : 0;\r
      if(distAfter > distBefore) score++;\r
      else if(distAfter < distBefore) score -= 2;\r
      break;\r
    case 2: // right wall\r
      score = stuck ? -3 : 0;\r
      if(distAfter > distBefore) score++;\r
      else if(distAfter < distBefore) score -= 2;\r
      break;\r
    case 3: // double wall\r
      score = (!stuck && distAfter >= distBefore) ? 1 : -2;\r
      break;\r
    default:\r
      score = 0;\r
  }\r
  \r
  // Dynamically adjusting probabilities: assuming 4 actions per state, the corresponding probabilities are stored in an array\r
  // Probs here is an array of length 16, with every 4 values in a group.\r
  const base = state * 4;\r
  const minProb = 2;\r
  for(let i = 0; i < 4; i++){\r
    if(i !== action){\r
      if(score > 0) {\r
        // If the performance is good, decrease the probability of other actions and increase the probability of that action\r
        if(Probs.value[base + i] > minProb) {\r
          Probs.value[base + i]--;\r
          Probs.value[base + action]++;\r
        }\r
      } else {\r
        // If performance is poor, adjust in the opposite direction\r
        for(let j = 0; j < -score; j++){\r
          if(Probs.value[base + action] > minProb) {\r
            Probs.value[base + i]++;\r
            Probs.value[base + action]--;\r
          }\r
        }\r
      }\r
    }\r
  }\r
\r
  showProbs(state);\r
  return score;\r
}\r
\r
// Probs is a responsive array representing the probability of each action\r
let Probs = { value: [25,25,25,25, /* state 0 */\r
                      25,25,25,25, /* state 1 */\r
                      25,25,25,25, /* state 2 */\r
                      25,25,25,25  /* state 3 */] };\r
function showProbs(state) {\r
  const base = state * 4;\r
  let probStr = Probs.value.slice(base, base+4).join(' : ');\r
  console.log('State', state, 'probability distribution：', probStr);\r
}\r
evaluate(2, 0, 150, 170, 4, 4, false);\r
\r
`})]),_:1}),o[41]||(o[41]=t("div",{class:"info-panel"},[t("p",null,[t("b",null,"1. Conditional judgement and control flow (switch.... .case, ternary operators)"),t("br"),t("br"),i(" The code uses switch(state) and the ternary operator (stuck ? -3 : 0) to select different scoring logic based on the current state of the robot, exemplifying how behavioural control in different contexts can be achieved through conditional branching. ")]),t("br"),t("br"),t("p",null,[t("b",null,"2. Array indexing and probability adjustment logic"),t("br"),t("br"),i(" Use array index (e.g. Probs.value[base + i]) to dynamically adjust the probability of actions in different states: "),t("br"),t("br"),i(" Array slices (slice): used to extract part of the data, such as state probability display. "),t("br"),t("br"),i(" Dynamically update array elements: increase or decrease the probability value to reflect the action's strengths and weaknesses feedback ")]),t("br"),t("br"),t("p",null,[t("b",null,"3. Loop structure (for loops, nested loops)"),t("br"),t("br"),i(" Loops are used to iterate through each action and dynamically adjust the probability based on the performance of the action. "),t("br"),t("br"),i(" Nested loops are used to adjust the probability of an action multiple times, enabling fine-grained probability updates. ")]),t("br"),t("br"),t("p",null,[t("b",null,"4. Function Design and Calling"),t("br"),t("br"),i(" The evaluate() function is responsible for scoring and probability adjustment; "),t("br"),t("br"),i(" The showProbs() function displays the current probability status; "),t("br"),t("br"),i(" Use clear parameter definitions and return values to make the logic clear and easy to read. ")]),t("br"),t("br"),t("p",null,[t("b",null,"5. Responsive Data Structures"),t("br"),t("br"),i(" Using a Vue-like approach to responsive data encapsulation (e.g. Probs = { value: [...] }): "),t("br"),t("br"),i(" The view layer (if any) can be updated on-the-fly in response to changes in probabilities; "),t("br"),t("br"),i(" Easy to extend to GUIs or other frameworks for dynamic visualisation. ")])],-1)),o[42]||(o[42]=t("br",null,null,-1)),o[43]||(o[43]=t("br",null,null,-1)),o[44]||(o[44]=t("p",null,[t("b",null,"The above code shows how JavaScript can be used to implement function encapsulation, mathematical and geometric computation, event handling, object-oriented programming, and dynamic decision making and learning, respectively. Each section shows the implementation idea in detail with code and descriptions to help understand the technical layered design and logical organisation of the whole robot simulation system.")],-1)),d(g,{week:"4",num:"3"})]),_:1})])]),_:1})}const te=Pt(Jt,[["render",Vt],["__scopeId","data-v-5b7a185b"]]);export{te as default};
