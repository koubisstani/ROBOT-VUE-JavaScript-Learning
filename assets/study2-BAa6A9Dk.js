import{M as y,a as v,S as h}from"./StudyContent-CBb6GlSf.js";import{C as s}from"./codeItem-BmcrMWJD.js";import{M as x}from"./MyTitle-DtyWnuIV.js";import{_ as w,n as E,f as C,o as S,c as k,w as n,a as e,b as i,d as o}from"./index-Bu-6ehgJ.js";const L={class:"choices"},P={components:{"my-title":x,"my-footer":v,"my-container":y,"study-content":h,"code-item":s}},T=Object.assign(P,{__name:"study2",setup(z){return E(()=>{const l=document.getElementById("robotCanvas"),t=l.getContext("2d");let a=l.width/2,B=l.height/2,d=2,u=parseInt(document.getElementById("sizeInput").value),m=document.getElementById("colorInput").value,p,r=!1;function c(){t.clearRect(0,0,l.width,l.height),t.beginPath(),t.arc(a,B,u,0,Math.PI*2),t.fillStyle=m,t.fill(),t.closePath()}function I(){const g=parseInt(document.getElementById("speedInput").value);a+=d*g,(a+u>l.width||a-u<0)&&(d=-d),c(),f(),p=requestAnimationFrame(I)}function f(g){const b=document.getElementById("codeDisplay");b.textContent=`
  const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')
  let x = canvas.width / 2
  let y = canvas.height / 2
  let dx = 2 // Initial speed
  let radius = parseInt(document.getElementById('sizeInput').value)
  let color = document.getElementById('colorInput').value
  let animationId
  let isRunning = false

  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  function update() {
    const speed = parseInt(document.getElementById('speedInput').value)
    x += dx * speed

    if (x + radius > canvas.width || x - radius < 0) {
      dx = -dx // Reverse direction
    }

    drawCircle()
    animationId = requestAnimationFrame(update)
  }

  document.getElementById('speedInput').addEventListener('input', () => {
    dx = parseInt(document.getElementById('speedInput').value)
  })

  document.getElementById('colorInput').addEventListener('input', () => {
    color = document.getElementById('colorInput').value
  })

  document.getElementById('sizeInput').addEventListener('input', () => {
    radius = parseInt(document.getElementById('sizeInput').value)
  })

  document.getElementById('startStopButton').addEventListener('click', () => {
    if (isRunning) {
      cancelAnimationFrame(animationId)
      document.getElementById('startStopButton').textContent = 'Press to Start'
    } else {
      update()
      document.getElementById('startStopButton').textContent = 'Press to Stop'
    }
    isRunning = !isRunning
  })

  drawCircle()
    `}document.getElementById("speedInput").addEventListener("input",()=>{d=parseInt(document.getElementById("speedInput").value)}),document.getElementById("colorInput").addEventListener("input",()=>{m=document.getElementById("colorInput").value}),document.getElementById("sizeInput").addEventListener("input",()=>{u=parseInt(document.getElementById("sizeInput").value)}),document.getElementById("startStopButton").addEventListener("click",()=>{r?(cancelAnimationFrame(p),document.getElementById("startStopButton").textContent="Press to Start"):(I(),document.getElementById("startStopButton").textContent="Press to Stop"),r=!r}),c(),f()}),(l,t)=>{const a=C("el-button");return S(),k(y,null,{default:n(()=>[e("header",null,[i(x,{title1:"Moving Circle Robot"}),t[7]||(t[7]=e("p",null,"Fantastic! You've come to the second mission of the week, where I've moved the ball, and you can see that the ball is bouncing back and forth horizontally and the speed is definable, now try it yourself. ",-1)),t[8]||(t[8]=e("br",null,null,-1)),t[9]||(t[9]=e("p",null,"Define velocity and wall bounce",-1)),t[10]||(t[10]=e("p",null,"The Start/Stop button starts/stops the robot.",-1)),e("div",L,[t[1]||(t[1]=e("label",{for:"speedInput"},"Speed: ",-1)),t[2]||(t[2]=e("input",{type:"number",id:"speedInput",value:"2",min:"1",max:"10"},null,-1)),t[3]||(t[3]=e("label",{for:"colorInput"},"Color: ",-1)),t[4]||(t[4]=e("input",{type:"color",id:"colorInput",value:"#0000ff"},null,-1)),t[5]||(t[5]=e("label",{for:"sizeInput"},"Size: ",-1)),t[6]||(t[6]=e("input",{type:"number",id:"sizeInput",value:"20",min:"5",max:"100"},null,-1)),i(a,{id:"startStopButton",style:{"margin-left":"20px"}},{default:n(()=>t[0]||(t[0]=[o("Press to Start")])),_:1})])]),t[27]||(t[27]=e("main",{style:{"margin-top":"20px"}},[e("canvas",{id:"robotCanvas",width:"1200",height:"600"}),e("div",{id:"codeDisplay"})],-1)),e("footer",null,[i(h,null,{default:n(()=>[i(s,null,{code:n(()=>t[11]||(t[11]=[o("document.getElementById")])),item:n(()=>t[12]||(t[12]=[o(" In this code, we use the document.getElementById method to get HTML elements, such as getting the canvas element robotCanvas and the value of the user input. Through these DOM operations, we can access elements on the page and change their behaviour and display content through JavaScript. ")])),_:1}),i(s,null,{code:n(()=>t[13]||(t[13]=[o("addEventListener('click', ()=>{})")])),item:n(()=>t[14]||(t[14]=[o("Click the function that is called")])),_:1}),i(s,null,{code:n(()=>t[15]||(t[15]=[o("requestAnimationFrame(function)")])),item:n(()=>t[16]||(t[16]=[o(" To create a smooth animation effect, we use the requestAnimationFrame method. This method tells the browser to call the specified function before the next redraw. In this function, we update the position of the circle and redraw it. By constantly changing the position of the circle, we achieve a moving effect. ")])),_:1}),i(s,null,{code:n(()=>t[17]||(t[17]=[o("cancelAnimationFrame(function)")])),item:n(()=>t[18]||(t[18]=[o(" Through this function that cancels the loop")])),_:1}),i(s,null,{code:n(()=>t[19]||(t[19]=[o("parseInt()")])),item:n(()=>t[20]||(t[20]=[o("Because the input data in the input box is sometimes in the form of a string, we need to convert this character form to the number form we need")])),_:1}),t[21]||(t[21]=e("p",null," If the coordinates of the ball are out of range, we will reverse the velocity to achieve the effect of rebound ",-1)),t[22]||(t[22]=e("br",null,null,-1)),t[23]||(t[23]=e("p",null," Variable Scope and Life Cycle : The scope of a variable determines where we can access or modify it. In this code, we use lets to define variables such as x, y, and dx, which are continually updated during the animation function to keep the animation coherent. ",-1)),t[24]||(t[24]=e("br",null,null,-1)),t[25]||(t[25]=e("p",null," Conditional Statements in JavaScript : During the animation, we use conditional statements to detect whether the circle touches the canvas boundary or not. If it touches it, we reverse the direction of its movement by changing the sign of the dx. This conditional control is a common technique used in animation logic to ensure that the animation stays within a given range. ",-1)),t[26]||(t[26]=e("br",null,null,-1)),i(v,{week:"1",num:"2"})]),_:1})])]),_:1})}}}),D=w(T,[["__scopeId","data-v-16639148"]]);export{D as default};
