import{M as E,a as S,S as L}from"./StudyContent-oXhpI3pp.js";import{C as m}from"./codeItem-BEPLs9bk.js";import{M as w}from"./MyTitle-BYzZEWme.js";import{_ as b,a as g}from"./demoCode-CFzT5DoD.js";import{_ as V,n as C,f as B,o as R,c as k,w as n,a as t,b as i,d}from"./index-B1DbA9VS.js";const M={class:"choices"},F={components:{"my-title":w,"my-footer":S,"my-container":E,"study-content":L,"code-item":m,"my-demo":b,"demo-code":g}},X=Object.assign(F,{__name:"study3new",setup(Y){return C(()=>{const l=document.getElementById("robotCanvas"),e=l.getContext("2d");let a=l.width/2,o=l.height/2,r=20,u=2,s=2,v,p=!1,c=!1;function f(){e.clearRect(0,0,l.width,l.height),e.beginPath(),e.arc(a,o,r,0,Math.PI*2),e.fillStyle="blue",e.fill(),e.closePath()}function y(){const x=parseInt(document.getElementById("LevelSpeedInput").value),I=parseInt(document.getElementById("VerticalSpeedInput").value);p&&(a+=u*x),c&&(o+=s*I),(a+r>l.width||a-r<0)&&(u=-u),(o+r>l.height||o-r<0)&&(s=-s),f(),h(),v=requestAnimationFrame(y)}function h(x){const I=document.getElementById("codeDisplay");I.textContent=`
    const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')
  let x = canvas.width / 2
  let y = canvas.height / 2
  let radius = 20
  let dx = 2 // Initial speed
  let dy = 2 // Initial speed
  let animationId
  let XisRunning = false
  let YisRunning = false

  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = 'blue'
    ctx.fill()
    ctx.closePath()
  }

  function update() {
    const LevelSpeed = parseInt(
      document.getElementById('LevelSpeedInput').value
    )
    const VerticalSpeed = parseInt(
      document.getElementById('VerticalSpeedInput').value
    )
    if (XisRunning) {
      x += dx * LevelSpeed
    }
    if (YisRunning) {
      y += dy * VerticalSpeed
    }

    if (x + radius > canvas.width || x - radius < 0) {
      dx = -dx // Reverse direction
    }
    if (y + radius > canvas.height || y - radius < 0) {
      dy = -dy // Reverse direction
    }

    drawCircle()
    updateCodeDisplay() // Update code display
    animationId = requestAnimationFrame(update)
  }

  document.getElementById('LevelSpeedInput').addEventListener('input', () => {
    dx = parseInt(document.getElementById('LevelSpeedInput').value)
  })

  document
    .getElementById('VerticalSpeedInput')
    .addEventListener('input', () => {
      dy = parseInt(document.getElementById('VerticalSpeedInput').value)
    })

  document.getElementById('LevelButton').addEventListener('click', () => {
    if (XisRunning) {
      cancelAnimationFrame(animationId)
      document.getElementById('LevelButton').textContent = 'start level'
    } else {
      update()
      document.getElementById('LevelButton').textContent = 'stop level'
    }
    XisRunning = !XisRunning
  })

  document.getElementById('VerticalButton').addEventListener('click', () => {
    if (YisRunning) {
      cancelAnimationFrame(animationId)
      document.getElementById('VerticalButton').textContent = 'start vertical'
    } else {
      update()
      document.getElementById('VerticalButton').textContent = 'stop vertical'
    }
    YisRunning = !YisRunning
  })

  drawCircle()
})
    `}document.getElementById("LevelSpeedInput").addEventListener("input",()=>{u=parseInt(document.getElementById("LevelSpeedInput").value)}),document.getElementById("VerticalSpeedInput").addEventListener("input",()=>{s=parseInt(document.getElementById("VerticalSpeedInput").value)}),document.getElementById("LevelButton").addEventListener("click",()=>{p?(cancelAnimationFrame(v),document.getElementById("LevelButton").textContent="start level"):(y(),document.getElementById("LevelButton").textContent="stop level"),p=!p}),document.getElementById("VerticalButton").addEventListener("click",()=>{c?(cancelAnimationFrame(v),document.getElementById("VerticalButton").textContent="start vertical"):(y(),document.getElementById("VerticalButton").textContent="stop vertical"),c=!c}),f(),h()}),(l,e)=>{const a=B("el-button"),o=B("my-demo");return R(),k(E,null,{default:n(()=>[t("header",null,[i(w,{title1:"Move up, down, left and right"}),e[6]||(e[6]=t("h1",null,null,-1)),e[7]||(e[7]=t("p",null," Clicking on the different buttons will allow the ball to move in different directions ",-1)),t("div",M,[e[2]||(e[2]=t("label",{for:"VerticalSpeedInput"},"Vertical Speed: ",-1)),e[3]||(e[3]=t("input",{type:"number",id:"VerticalSpeedInput",value:"2",min:"1",max:"10"},null,-1)),e[4]||(e[4]=t("label",{for:"LevelSpeedInput"},"Level Speed: ",-1)),e[5]||(e[5]=t("input",{type:"number",id:"LevelSpeedInput",value:"2",min:"1",max:"10"},null,-1)),i(a,{id:"LevelButton",style:{"margin-left":"20px"}},{default:n(()=>e[0]||(e[0]=[d("start level")])),_:1}),i(a,{id:"VerticalButton",style:{"margin-left":"20px"}},{default:n(()=>e[1]||(e[1]=[d("start vertical")])),_:1})])]),e[18]||(e[18]=t("main",{style:{"margin-top":"20px"}},[t("canvas",{id:"robotCanvas",width:"1200",height:"600"}),t("div",{id:"codeDisplay"})],-1)),t("footer",null,[i(L,null,{default:n(()=>[i(m,null,{code:n(()=>e[8]||(e[8]=[d("The variables x and y:")])),item:n(()=>e[9]||(e[9]=[d(" x controls the position of the circle in the horizontal (left-right) direction. y controls the position of the circle in the vertical (up and down) direction. ")])),_:1}),i(m,null,{code:n(()=>e[10]||(e[10]=[d("Variables dx and dy:")])),item:n(()=>e[11]||(e[11]=[d("dx represents the incremental horizontal movement of the circle, with an initial value of 2. dy represents each incremental movement of the circle in the vertical direction, with an initial value of 2.")])),_:1}),i(m,null,{code:n(()=>e[12]||(e[12]=[d("Horizontal and vertical speed input:")])),item:n(()=>e[13]||(e[13]=[d("Get the speed values entered by the user in the input box via document.getElementById(‘LevelSpeedInput’) and document.getElementById(‘VerticalSpeedInput’), which are used to control the horizontal and vertical speed respectively. These two values are updated in real time as the user enters them and affect the movement of x and y.")])),_:1}),i(o,null,{code:n(()=>[i(g,{type:"JavaScript",code:`\r
if (XisRunning) {\r
  x += dx * LevelSpeed; // Updates the horizontal position according to the entered velocity value\r
}\r
\r
if (x + radius > canvas.width || x - radius < 0) {\r
  dx = -dx; // Reverse direction on reaching the boundary\r
\r
}\r
\r
if (YisRunning) {\r
  y += dy * VerticalSpeed; // Updates the vertical position according to the input velocity value\r
}\r
\r
if (y + radius > canvas.height || y - radius < 0) {\r
  dy = -dy; // Reverse direction when reaching the upper and lower boundaries\r
}\r
\r
              `}),i(g,{type:"JavaScript",code:`document.getElementById('LevelSpeedInput').addEventListener('input', () => {\r
  dx = parseInt(document.getElementById('LevelSpeedInput').value);\r
});\r
\r
document.getElementById('VerticalSpeedInput').addEventListener('input', () => {\r
  dy = parseInt(document.getElementById('VerticalSpeedInput').value);\r
});`})]),_:1}),e[14]||(e[14]=t("p",null," The user can enter the horizontal and vertical speeds through two input boxes (LevelSpeedInput and VerticalSpeedInput). When the user enters a new speed, the programme listens to the input event and immediately assigns the value of the new input to dx or dy, which affects the speed of the circle. ",-1)),e[15]||(e[15]=t("br",null,null,-1)),e[16]||(e[16]=t("br",null,null,-1)),e[17]||(e[17]=t("p",null," In order to achieve this, we only need to make a dy on the original basis to represent the vertical velocity, and then click the vertical button to manipulate the position of the ball y in the vertical direction, and then execute the loop function at the same time to render ",-1)),i(S,{week:"1",num:"3"})]),_:1})])]),_:1})}}}),N=V(X,[["__scopeId","data-v-9e381529"]]);export{N as default};
