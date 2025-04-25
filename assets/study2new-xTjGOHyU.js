import{M as u,a as m,S as f}from"./StudyContent-CBb6GlSf.js";import{C as i}from"./codeItem-BmcrMWJD.js";import{M as h}from"./MyTitle-DtyWnuIV.js";import{_ as w,n as x,f as b,o as C,c as B,w as n,a as t,b as s,d as a}from"./index-Bu-6ehgJ.js";const _={class:"choices"},E={components:{"my-title":h,"my-footer":m,"my-container":u,"study-content":f,"code-item":i}},I=Object.assign(E,{__name:"study2new",setup(S){return x(()=>{const o=document.getElementById("robotCanvas"),e=o.getContext("2d");let r=o.width/2,d=o.height/2,v=20,p="blue";function c(){e.clearRect(0,0,o.width,o.height),e.beginPath(),e.arc(r,d,v,0,Math.PI*2),e.fillStyle=p,e.fill(),e.closePath()}function y(l){const g=document.getElementById("codeDisplay");g.textContent=`
  const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')
  let x = canvas.width / 2
  let y = canvas.height / 2
  let radius = 20
  let color = 'blue'

  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  document.getElementById('startStopButton').addEventListener('click', () => {
    canvas.addEventListener('mousemove', (e) => {
      console.log(e.offsetX)
      console.log(e.offsetY)
      x = e.offsetX
      y = e.offsetY
      drawCircle()
    })
  })

  drawCircle()
    `}document.getElementById("startStopButton").addEventListener("click",()=>{o.addEventListener("mousemove",l=>{console.log(l.offsetX),console.log(l.offsetY),r=l.offsetX,d=l.offsetY,c()})}),c(),y()}),(o,e)=>{const r=b("el-button");return C(),B(u,null,{default:n(()=>[t("header",null,[s(h,{title1:"The ball follows the mouse"}),e[1]||(e[1]=t("p",null," When you click this button, when you move your mouse over the canvas, the balls in the canvas will move with the mouse movement ",-1)),t("div",_,[s(r,{id:"startStopButton",style:{"margin-left":"20px"}},{default:n(()=>e[0]||(e[0]=[a("Press to Start")])),_:1})])]),e[7]||(e[7]=t("main",{style:{"margin-top":"20px"}},[t("canvas",{id:"robotCanvas",width:"1200",height:"600"}),t("div",{id:"codeDisplay"})],-1)),t("footer",null,[s(f,null,{default:n(()=>[s(i,null,{code:n(()=>e[2]||(e[2]=[a("element.addEventListener('mousemove', ()=>{})")])),item:n(()=>e[3]||(e[3]=[a(" Above, we used a mousemove that listens for the mouse to swipe through the object")])),_:1}),s(i,null,{code:n(()=>e[4]||(e[4]=[a("e.offsetX e.offsetY")])),item:n(()=>e[5]||(e[5]=[a("This offsetX is a number-type property, which is the distance of the current event or element from the left of the parent element, and the same goes for offsetY")])),_:1}),e[6]||(e[6]=t("p",null," Here, when our mouse moves directly into the canvas, we set the center of the ball to the center of our mouse and re-render the canvas ",-1)),s(m,{week:"2",num:"2"})]),_:1})])]),_:1})}}}),Y=w(I,[["__scopeId","data-v-400e17e2"]]);export{Y as default};
