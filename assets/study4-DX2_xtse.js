import{a as _,M as w,S as v}from"./StudyContent-CBb6GlSf.js";import{M as x}from"./MyTitle-DtyWnuIV.js";import{C as b}from"./codeItem-BmcrMWJD.js";import{_ as C,a as M}from"./demoCode-mYz8MuQL.js";import{_ as S,f as a,o as d,c as V,w as m,b as o,a as t,d as n,e as B,v as E,g as k,h as L,F as D,j,t as u}from"./index-Bu-6ehgJ.js";const F="/ROBOT-VUE-JavaScript-Learning/assets/task-list-example-DDcxXkFw.png",I={components:{"my-title":x,"my-footer":_,"my-container":w,"study-content":v,"code-item":b,"my-demo":C,"demo-code":M},data(){return{newTask:"",tasks:[]}},methods:{addTask(){this.newTask.trim()?(this.tasks.push({description:this.newTask.trim(),completed:!1}),this.newTask=""):alert("The task description cannot be empty.")},toggleTask(l){this.tasks[l].completed=!this.tasks[l].completed}}},J={class:"task-list-generator"},U=["onClick"];function A(l,e,N,O,r,i){const y=a("my-title"),c=a("demo-code"),T=a("my-demo"),h=a("study-content"),f=a("my-footer"),g=a("my-container");return d(),V(g,null,{default:m(()=>[o(y,{title1:"Task List Generator",title2:"Learn to create a dynamic task list with Vue.js and JavaScript"}),o(h,null,{default:m(()=>[e[2]||(e[2]=t("section",{class:"task-intro"},[t("h2",null,"Why Task Management?"),t("p",null," In real life, there are a lot of tasks every day, and this is when you need a task management application to help you sort out which tasks you should do in a day. "),t("p",null,[n(" This project will help you learn how to create a basic task management application using JavaScript, including "),t("strong",null,"data binding"),n(", "),t("strong",null,"event handling"),n(", and "),t("strong",null,"dynamic DOM rendering"),n(". ")]),t("p",null,[n(" You can "),t("strong",null,"add tasks"),n(", "),t("strong",null,"mark them as completed"),n(", and "),t("strong",null,"track their status in real-time"),n(". ")])],-1)),e[3]||(e[3]=t("div",{class:"study-highlight"},[t("p",null,[t("strong",null,"Core Vue.js Concepts Covered:")]),t("p",null,[t("code",null,'<input v-model="newTask">'),t("br"),n(" Two-way data binding for form input. ")]),t("p",null,[t("code",null,'@click="addTask"'),t("br"),n(" Bind button click to method execution. ")]),t("p",null,[t("code",null,'v-for="(task, index) in tasks" :key="index"'),t("br"),n(" Render task list dynamically from array. ")])],-1)),e[4]||(e[4]=t("h2",null,"Code Example",-1)),o(T,null,{code:m(()=>[o(c,{type:"HTML",code:`\r
<div id="app">\r
  <input v-model="newTask" type="text" placeholder="Enter task description">\r
  <button @click="addTask">Add Task</button>\r
  \r
  <h2>Tasks:</h2>\r
  <div v-for="(task, index) in tasks" :key="index" class="task">\r
    <span :class="{ completed: task.completed }">{{ task.description }}</span>\r
    <button @click="toggleTask(index)">\r
      {{ task.completed ? "Undo" : "Complete" }}\r
    </button>\r
  </div>\r
</div>`}),o(c,{type:"JS",code:`\r
          \r
export default {\r
  data() {\r
    return {\r
      newTask: "",\r
      tasks: []\r
    };\r
  },\r
  methods: {\r
    addTask() {\r
      if (this.newTask.trim()) {\r
        this.tasks.push({ description: this.newTask.trim(), completed: false });\r
        this.newTask = ""; \r
      } else {\r
        alert("Task description cannot be empty.");\r
      }\r
    },\r
    toggleTask(index) {\r
      this.tasks[index].completed = !this.tasks[index].completed;\r
    }\r
  }\r
};`})]),_:1}),e[5]||(e[5]=t("h2",null,"Task List in Action",-1)),e[6]||(e[6]=t("img",{src:F,alt:"Example of task list application"},null,-1)),e[7]||(e[7]=t("h2",null,"Try It Yourself",-1)),t("div",J,[B(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>r.newTask=s),type:"text",placeholder:"Enter a description of the task"},null,512),[[E,r.newTask]]),t("button",{onClick:e[1]||(e[1]=(...s)=>i.addTask&&i.addTask(...s))},"Add Task"),(d(!0),k(D,null,L(r.tasks,(s,p)=>(d(),k("div",{key:p,class:"task"},[t("span",{class:j({completed:s.completed})},u(s.description),3),t("button",{onClick:R=>i.toggleTask(p)},u(s.completed?"Undo":"Complete"),9,U)]))),128))])]),_:1}),o(f,{week:"2",num:"4"})]),_:1})}const X=S(I,[["render",A],["__scopeId","data-v-62367d3e"]]);export{X as default};
