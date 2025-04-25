import{M as b,a as x,S as f}from"./StudyContent-CBb6GlSf.js";import{C as c}from"./codeItem-BmcrMWJD.js";import{M as p}from"./MyTitle-DtyWnuIV.js";import{_ as w,a as u}from"./demoCode-mYz8MuQL.js";import{_,n as C,f as h,o as S,c as I,w as o,a as t,b as n,d as e}from"./index-Bu-6ehgJ.js";const k={components:{"my-title":p,"my-footer":x,"my-container":b,"study-content":f,"code-item":c,"my-demo":w,"demo-code":u}},M=Object.assign(k,{__name:"study3",setup(P){return C(()=>{const r=document.getElementById("robotCanvas"),a=r.getContext("2d"),d=[{x:100,y:100,radius:20,color:"red",dx:2,dy:2},{x:200,y:150,radius:30,color:"green",dx:3,dy:3},{x:300,y:200,radius:40,color:"blue",dx:1,dy:1}];let s=!1,y;function B(l){a.beginPath(),a.arc(l.x,l.y,l.radius,0,Math.PI*2),a.fillStyle=l.color,a.fill(),a.closePath()}function g(l){l.x+=l.dx,l.y+=l.dy,(l.x+l.radius>r.width||l.x-l.radius<0)&&(l.dx=-l.dx),(l.y+l.radius>r.height||l.y-l.radius<0)&&(l.dy=-l.dy);for(let i of d)i!==l&&Math.hypot(l.x-i.x,l.y-i.y)<l.radius+i.radius&&(l.dx=-l.dx,l.dy=-l.dy,i.dx=-i.dx,i.dy=-i.dy)}function m(){if(s){a.clearRect(0,0,r.width,r.height);for(let l of d)g(l),B(l);y=requestAnimationFrame(m)}}document.querySelector("#startButton").addEventListener("click",()=>{s=!s,s?m():cancelAnimationFrame(y)});const v=document.getElementById("codeDisplay");v.textContent=`
const balls = [
  { x: 100, y: 100, radius: 20, color: 'red', dx: 2, dy: 2 },
  { x: 200, y: 150, radius: 30, color: 'green', dx: 3, dy: 3 },
  { x: 300, y: 200, radius: 40, color: 'blue', dx: 1, dy: 1 }
]

let running = false
let animationId

function drawBall(ball) {
  ctx.beginPath()
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
  ctx.fillStyle = ball.color
  ctx.fill()
  ctx.closePath()
}

function moveBall(ball) {
  ball.x += ball.dx
  ball.y += ball.dy

  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.dy = -ball.dy
  }

  for (let otherBall of balls) {
    if (otherBall !== ball) {
      const dist = Math.hypot(ball.x - otherBall.x, ball.y - otherBall.y)
      if (dist < ball.radius + otherBall.radius) {
        ball.dx = -ball.dx
        ball.dy = -ball.dy
        otherBall.dx = -otherBall.dx
        otherBall.dy = -otherBall.dy
      }
    }
  }
}

function animate() {
  if (!running) return
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (let ball of balls) {
    moveBall(ball)
    drawBall(ball)
  }

  animationId = requestAnimationFrame(animate)
}

document.querySelector('#startButton').addEventListener('click', () => {
  running = !running
  if (running) {
    animate()
  } else {
    cancelAnimationFrame(animationId)
  }
})
`}),(r,a)=>{const d=h("el-button"),s=h("my-demo");return S(),I(b,null,{default:o(()=>[t("header",null,[n(p,{title1:"Bouncing Balls Simulation"}),a[1]||(a[1]=t("p",null," Click the button to start or stop the simulation of bouncing colored balls. This teaches you how to animate objects, detect boundary collisions and simulate ball interactions using Canvas and JavaScript. ",-1)),n(d,{id:"startButton"},{default:o(()=>a[0]||(a[0]=[e("Start / Stop")])),_:1})]),a[6]||(a[6]=t("main",{style:{"margin-top":"20px"}},[t("canvas",{id:"robotCanvas",width:"1200",height:"600"}),t("div",{id:"codeDisplay"}),t("section",{class:"ball-intro"},[t("h2",null,"Why Learn Ball Collision Simulation?"),t("p",null,[e(" Physics-based animations like ball collision are commonly used in simulations, games and teaching environments. This project helps you understand how to use "),t("strong",null,"Canvas API"),e(" and "),t("strong",null,"basic physics"),e(" to simulate motion and interactions between objects. ")]),t("p",null,[e(" You'll implement "),t("strong",null,"object movement"),e(", "),t("strong",null,"boundary reflection"),e(", and "),t("strong",null,"collision detection"),e(" using Euclidean distance calculations. ")])]),t("div",{class:"study-highlight"},[t("p",null,[t("strong",null,"Core Concepts Covered:")]),t("p",null,[t("code",null,"ctx.arc(x, y, radius, 0, 2π)"),t("br"),e(" Draws each ball as a filled circle using Canvas. ")]),t("p",null,[t("code",null,"ball.x + radius > canvas.width"),t("br"),e(" Boundary detection logic to reverse movement at canvas edges. ")]),t("p",null,[t("code",null,"Math.hypot(ball.x - otherBall.x, ball.y - otherBall.y)"),t("br"),e(" Checks for collisions between two balls based on center distance. ")]),t("p",null,[t("code",null,"requestAnimationFrame()"),t("br"),e(" Efficient animation loop using browser repaint cycles. ")])])],-1)),t("footer",null,[n(f,null,{default:o(()=>[n(c,null,{code:o(()=>a[2]||(a[2]=[e("Boundary Detection of Balls")])),item:o(()=>a[3]||(a[3]=[e(" When a ball touches the edge of the canvas, it should bounce back. This is achieved by checking if the ball’s position plus/minus its radius exceeds the canvas dimensions. ")])),_:1}),n(s,null,{code:o(()=>[n(u,{type:"JavaScript",code:`\r
if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {\r
  ball.dx = -ball.dx\r
}\r
if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {\r
  ball.dy = -ball.dy\r
}`})]),_:1}),n(c,null,{code:o(()=>a[4]||(a[4]=[e("Ball-to-Ball Collision Detection")])),item:o(()=>a[5]||(a[5]=[e(" If the distance between two balls is less than the sum of their radii, we consider that a collision has occurred and invert their motion directions accordingly. ")])),_:1}),n(s,null,{code:o(()=>[n(u,{type:"JavaScript",code:`\r
for (let otherBall of balls) {\r
  if (otherBall !== ball) {\r
    const dist = Math.hypot(ball.x - otherBall.x, ball.y - otherBall.y)\r
    if (dist < ball.radius + otherBall.radius) {\r
      ball.dx = -ball.dx\r
      ball.dy = -ball.dy\r
      otherBall.dx = -otherBall.dx\r
      otherBall.dy = -otherBall.dy\r
    }\r
  }\r
}`})]),_:1}),n(x,{week:"2",num:"3"})]),_:1})])]),_:1})}}}),q=_(M,[["__scopeId","data-v-57f25ffd"]]);export{q as default};
