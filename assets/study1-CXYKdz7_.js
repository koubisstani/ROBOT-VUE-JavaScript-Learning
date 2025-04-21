import{M as c,a as m,S as p}from"./StudyContent-oXhpI3pp.js";import{C as i}from"./codeItem-BEPLs9bk.js";import{M as y}from"./MyTitle-BYzZEWme.js";import{_ as v,n as x,o as w,c as b,w as o,a as e,b as a,d as l}from"./index-B1DbA9VS.js";const E={components:{"my-title":y,"my-footer":m,"my-container":c,"study-content":p,"code-item":i}},B=Object.assign(E,{__name:"study1",setup(C){return x(()=>{const n=document.getElementById("robotCanvas"),t=n.getContext("2d");let f=n.width/2,g=n.height/2,d=parseInt(document.getElementById("sizeInput").value),u=document.getElementById("colorInput").value;function s(){t.clearRect(0,0,n.width,n.height),t.beginPath(),t.arc(f,g,d,0,Math.PI*2),t.fillStyle=u,t.fill(),t.closePath()}function r(){s(),requestAnimationFrame(r)}function h(){const I=document.getElementById("codeDisplay");I.textContent=`
  const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')
  let x = canvas.width / 2
  let y = canvas.height / 2
  let radius = parseInt(document.getElementById('sizeInput').value)
  let color = document.getElementById('colorInput').value
  let animationId

  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  function update() {
    drawCircle()
    animationId = requestAnimationFrame(update)
  }
  // update data
  document.getElementById('colorInput').addEventListener('input', () => {
    color = document.getElementById('colorInput').value
  })

  document.getElementById('sizeInput').addEventListener('input', () => {
    radius = parseInt(document.getElementById('sizeInput').value)
  })

  drawCircle()
  update()
    `}document.getElementById("colorInput").addEventListener("input",()=>{u=document.getElementById("colorInput").value}),document.getElementById("sizeInput").addEventListener("input",()=>{d=parseInt(document.getElementById("sizeInput").value)}),s(),r(),h()}),(n,t)=>(w(),b(c,null,{default:o(()=>[e("header",null,[a(y,{title1:"Defines the color size of the ball"}),t[0]||(t[0]=e("h1",null,null,-1)),t[1]||(t[1]=e("p",null," First of all, welcome to the start of your JavaScript learning programme, this is the first task of the week, we start with a very simple module that defines a ball's colour and size, and after this learning experience, go ahead and draw your favourite ball! ",-1)),t[2]||(t[2]=e("p",null,"As you change the color or size of the input box, the balls in the canvas change accordingly",-1)),t[3]||(t[3]=e("div",{class:"choices"},[e("label",{for:"colorInput"},"Color: "),e("input",{type:"color",id:"colorInput",value:"#0000ff"}),e("label",{for:"sizeInput"},"Size: "),e("input",{type:"number",id:"sizeInput",value:"20",min:"5",max:"100"})],-1))]),t[9]||(t[9]=e("main",{style:{"margin-top":"20px"}},[e("canvas",{id:"robotCanvas",width:"1200",height:"600"}),e("div",{id:"codeDisplay"})],-1)),e("footer",null,[a(p,null,{default:o(()=>[a(i,null,{code:o(()=>t[4]||(t[4]=[l("addEventListener('input',()=>{})")])),item:o(()=>t[5]||(t[5]=[l(" This function is triggered when the value of the input box changes, and we modify our color data here")])),_:1}),a(i,null,{code:o(()=>t[6]||(t[6]=[l("requestAnimationFrame(function)")])),item:o(()=>t[7]||(t[7]=[l("We use this event to loop a function, and by calling the js method and passing in a function name, we can keep the function executing")])),_:1}),t[8]||(t[8]=e("p",null," Here, we use the loop method to execute this function, then update the data by modifying the input box, and finally update the canvas through drawCircle ",-1)),a(m,{week:"1",num:"1"})]),_:1})])]),_:1}))}}),S=v(B,[["__scopeId","data-v-8ba2b3da"]]);export{S as default};
