import{M as c,a as d,S as u}from"./StudyContent-D6_QEik8.js";import{C as b}from"./codeItem-DlYaIrsL.js";import{M as h}from"./MyTitle-lMHn4oIB.js";import{_ as m,o as p,g,n as x,c as y,w as s,a as e,b as a,d as o}from"./index-D_i8rq6_.js";const w={name:"Robot",mounted(){const r=document.getElementById("robotCanvas"),t=r.getContext("2d");function n(){const l=r.width/2,i=r.height/2;t.fillStyle="#007b7b",t.beginPath(),t.ellipse(l,i,20,25,0,0,Math.PI*2),t.fill(),t.strokeStyle="#000",t.lineWidth=6,t.beginPath(),t.moveTo(l,i-30),t.lineTo(l,i+30),t.stroke(),t.fillStyle="#000",t.fillRect(l-15,i-35,30,10),t.fillRect(l-15,i+25,30,10),t.fillStyle="red",t.beginPath(),t.arc(l+20,i,4,0,Math.PI*2),t.fill()}n()}},v={id:"robotCanvas",width:"400",height:"300"};function _(r,t,n,l,i,k){return p(),g("canvas",v)}const f=m(w,[["render",_],["__scopeId","data-v-75ff8048"]]),C={style:{"margin-top":"20px"}},I={components:{"my-title":h,"my-footer":d,"my-container":c,"study-content":u,"code-item":b,robot:f}},S=Object.assign(I,{__name:"study1new",setup(r){return x(()=>{const t=document.getElementById("codeDisplay");t&&(t.textContent=`
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
    `)}),(t,n)=>(p(),y(c,null,{default:s(()=>[e("header",null,[a(h,{title1:"Drawing Robot Top View",title2:"Learn how to create a top view of a robot using the Canvas API."}),n[0]||(n[0]=e("p",null," In this study, we will demonstrate how simple JavaScript language can be used to draw simplified robots. This robot can be reused in subsequent projects. ",-1)),n[1]||(n[1]=e("p",null," So draw a little robot in your favourite shape and colour oh? Note: The drawing is a top view of the robot. ",-1))]),e("main",C,[a(f),n[2]||(n[2]=e("div",{id:"codeDisplay"},null,-1)),n[3]||(n[3]=e("section",{class:"robot-intro"},[e("h2",null,"Real-Life Applications of Robotic Carts"),e("p",null,[e("strong",null,"Robotics"),o(" is most widely used to replace human contributions with machine-generated responses. When humans interact with robots, both must anticipate actions based on current conditions. Tremendous efforts have been made to achieve this perfect coordination. ")]),e("p",null," To decipher complex environments, the inference of robot mobility and the alteration of random unstructured scenes is a complex task in the field of vision processing and imaging. "),e("p",null,[o(" In real life, robotic carts are widely used in "),e("strong",null,"teaching, research, competitions"),o(" and "),e("strong",null,"creative projects"),o(". They are ideal platforms combining "),e("strong",null,"embedded control, sensor technology"),o(" and "),e("strong",null,"AI algorithms"),o(". ")]),e("p",null,[e("strong",null,"Functional Modules Include:")]),e("ul",null,[e("li",null,"Battery module"),e("li",null,"Control module"),e("li",null,"Drive module"),e("li",null,"Motion module"),e("li",null,"Sensor module"),e("li",null,"Image module"),e("li",null,"Communication module")]),e("p",null,[e("strong",null,"Common Scenarios:")]),e("ul",null,[e("li",null,"Trolley robot patrolling"),e("li",null,"Obstacle avoidance"),e("li",null,"Motion in different environments"),e("li",null,"Image recognition and tracking")])],-1))]),e("footer",null,[a(u,null,{default:s(()=>[n[4]||(n[4]=e("div",{class:"study-highlight"},[e("p",null,[e("strong",null,"Canvas API and JavaScript Concepts Covered:")]),e("p",null,[e("code",null,"ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)"),e("br"),o(" Used to draw the robot's body as an ellipse in the Robot component. ")]),e("p",null,[e("code",null,"ctx.fillRect(x, y, width, height)"),e("br"),o(" Draws filled rectangles, which are used for the robot's wheels. ")]),e("p",null,[e("code",null,"ctx.beginPath() / ctx.stroke()"),e("br"),o(" Defines and draws paths like the axle and sensor outline. ")]),e("p",null,[e("code",null,"ctx.fillStyle = 'red' / '#000'"),e("br"),o(" Sets color for the drawing modules. ")])],-1)),a(d,{week:"3",num:"1"})]),_:1})])]),_:1}))}}),D=m(S,[["__scopeId","data-v-0717cac4"]]);export{D as default};
