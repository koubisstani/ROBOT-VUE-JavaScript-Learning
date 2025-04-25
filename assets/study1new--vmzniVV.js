import{M as y,a as m,S as p}from"./StudyContent-CBb6GlSf.js";import{C as r}from"./codeItem-BmcrMWJD.js";import{M as f}from"./MyTitle-DtyWnuIV.js";import{_ as v,n as g,f as x,o as k,c as C,w as o,a as e,b as a,d as s}from"./index-Bu-6ehgJ.js";const B={class:"choices"},I={components:{"my-title":f,"my-footer":m,"my-container":y,"study-content":p,"code-item":r}},E=Object.assign(I,{__name:"study1new",setup(S){return g(()=>{const n=document.getElementById("robotCanvas"),t=n.getContext("2d");let d=n.width/2,i=n.height/2,w=20,h="blue";function u(){t.clearRect(0,0,n.width,n.height),t.beginPath(),t.arc(d,i,w,0,Math.PI*2),t.fillStyle=h,t.fill(),t.closePath()}function b(c){const l=document.getElementById("codeDisplay");l.textContent=`
  const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')
  let x = canvas.width / 2
  let y = canvas.height / 2
  let radius = 20
  let color = 'blue'

  // when learn this model, the code of product ball you can copy, but the keydown, you have to come turn it by youself
  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  document.getElementById('startStopButton').addEventListener('click', () => {
    document.addEventListener('keydown', (e) => {
      let code = e.keyCode
      //   console.log(code)
      //   console.log(x)
      //   console.log(y)
      // left
      if (code == 37) {
        x -= 10
      }
      // top
      if (code == 38) {
        y -= 10
      }
      // right
      if (code == 39) {
        x += 10
      }
      // bottom
      if (code == 40) {
        y += 10
      }
      drawCircle()
    })
  })

  drawCircle()
  updateCodeDisplay() // Initial code display
    `}document.getElementById("startStopButton").addEventListener("click",()=>{document.addEventListener("keydown",c=>{let l=c.keyCode;l==37&&(d-=10),l==38&&(i-=10),l==39&&(d+=10),l==40&&(i+=10),u()})}),u(),b()}),(n,t)=>{const d=x("el-button");return k(),C(y,null,{default:o(()=>[e("header",null,[a(f,{title1:"The keyboard controls the ball movement"}),t[1]||(t[1]=e("h1",null,null,-1)),t[2]||(t[2]=e("p",null," We can listen to keyboard events via JS events and then react to them a bit ",-1)),t[3]||(t[3]=e("p",null," Please click the button to start, and then control the up, down, left, and right buttons on the keyboard to move the ball ",-1)),e("div",B,[a(d,{id:"startStopButton",style:{"margin-left":"20px"}},{default:o(()=>t[0]||(t[0]=[s("Press to Start")])),_:1})])]),t[13]||(t[13]=e("main",{style:{"margin-top":"20px"}},[e("canvas",{id:"robotCanvas",width:"1200",height:"600"}),e("div",{id:"codeDisplay"})],-1)),e("footer",null,[a(p,null,{default:o(()=>[t[8]||(t[8]=e("p",null," Here, when we learn how to use keyboard events, we can use the code that generates the balls directly to avoid wasting more time, which we will learn later ",-1)),a(r,null,{code:o(()=>t[4]||(t[4]=[s("addEventListener('keydown',()=>{})")])),item:o(()=>t[5]||(t[5]=[s("Here, when we learn how to use keyboard events, we can use the code that generates the balls directly to avoid wasting more time, which we will learn later")])),_:1}),a(r,null,{code:o(()=>t[6]||(t[6]=[s("e.keyCode == 40")])),item:o(()=>t[7]||(t[7]=[s(" In a keyboard event, there is a keyCode property that records which keyboard fires.")])),_:1}),t[9]||(t[9]=e("p",null,"left is 37",-1)),t[10]||(t[10]=e("p",null,"top is 38",-1)),t[11]||(t[11]=e("p",null,"right is 39",-1)),t[12]||(t[12]=e("p",null,"bottom is 40",-1)),a(m,{week:"2",num:"1"})]),_:1})])]),_:1})}}}),T=v(E,[["__scopeId","data-v-f2d9b6be"]]);export{T as default};
