import{a as f,M as g,S as x}from"./StudyContent-oXhpI3pp.js";import{M as w}from"./MyTitle-BYzZEWme.js";import{_ as v,a as b}from"./demoCode-CFzT5DoD.js";import{_,f as o,o as l,c as C,w as c,b as d,a as e,d as k,t as r,e as I,v as L,g as m,h as B,F as E,j as M}from"./index-B1DbA9VS.js";const D={components:{"my-title":w,"my-footer":f,"my-container":g,"study-content":x,"my-demo":v,"demo-code":b},data(){return{newTask:"",tasks:[],incompleteTasks:0}},methods:{addTask(){this.newTask.trim()?(this.tasks.push({description:this.newTask.trim(),completed:!1}),this.newTask="",this.updateTaskCounter()):alert("The task description cannot be empty.")},toggleTask(s){this.tasks[s].completed=!this.tasks[s].completed,this.updateTaskCounter()},updateTaskCounter(){this.incompleteTasks=this.tasks.filter(s=>!s.completed).length}}},F={class:"task-list-generator"},N={class:"task-counter"},V=["onClick"];function $(s,t,z,A,a,i){const u=o("my-title"),h=o("study-content"),T=o("my-footer"),y=o("my-container");return l(),C(y,null,{default:c(()=>[d(u,{title1:"Implementing a task list counter",title2:"In this task, you need to add a real-time updated task counter to the existing Task List Builder. I will give the code below, you will need to add some of the code yourself to implement the functionality"}),d(h,null,{default:c(()=>[t[3]||(t[3]=e("div",null,[e("h1",null,"Task 4 Code Example"),e("pre",null,[k("          "),e("code",null,`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Task list generator</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                    }
                    #taskInput {
                        width: 300px;
                        padding: 10px;
                        font-size: 16px;
                    }
                    #addTaskButton {
                        padding: 10px;
                        font-size: 16px;
                        cursor: pointer;
                    }
                    .task {
                        padding: 10px;
                        margin: 5px 0;
                        border: 1px solid #ccc;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .completed {
                        text-decoration: line-through;
                        color: grey;
                    }
                </style>
            </head>
            <body>
    
                <h1>Task list generator</h1>
                <input type="text" id="taskInput" placeholder="Enter task description">
                <button id="addTaskButton">Add Task</button>
                <h2>Tasks:</h2>
                <div id="taskList"></div>
    
                <script>
                    let tasks = [];
    
                    document.getElementById('addTaskButton').addEventListener('click', () => {
                        const taskInput = document.getElementById('taskInput');
                        const description = taskInput.value.trim();
    
                        if (description) {
                            const newTask = {
                                description: description,
                                completed: false
                            };
                            tasks.push(newTask);
                            renderTasks();
                            taskInput.value = ''; // Clear the input box
                        } else {
                            alert('Task description cannot be empty.');
                        }
                    });
    
                    function renderTasks() {
                        const taskList = document.getElementById('taskList');
                        taskList.innerHTML = '';
    
                        tasks.forEach((task, index) => {
                            const taskDiv = document.createElement('div');
                            taskDiv.className = 'task';
                            taskDiv.innerHTML = \`
                                <span class="\${task.completed ? 'completed' : ''}">\${task.description}</span>
                                <button onclick="toggleTask(\${index})"> \${task.completed ? 'Undo' : 'Complete'} </button>
                            \`;
                            taskList.appendChild(taskDiv);
                        });
                    }
    
                    function toggleTask(index) {
                        tasks[index].completed = !tasks[index].completed;
                        renderTasks();
                    }
                <\/script>
                
            </body>
            </html>
          `),k(`
        `)])],-1)),t[4]||(t[4]=e("h2",null,"mission statement",-1)),t[5]||(t[5]=e("p",null," You will extend the existing Task List Builder to add a task counter that displays the number of tasks currently outstanding. When a user adds a new task or marks a task as completed, the task counter should update in real time to reflect the latest task status. ",-1)),t[6]||(t[6]=e("h2",null,"Task List Generator (with counter)",-1)),t[7]||(t[7]=e("p",null," Here is a task list generator with a task counter. You can manipulate this generator to see how the number of tasks changes. ",-1)),e("div",F,[e("div",N," Current number of outstanding tasks: "+r(a.incompleteTasks),1),I(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>a.newTask=n),type:"text",placeholder:"Enter a description of the task"},null,512),[[L,a.newTask]]),e("button",{onClick:t[1]||(t[1]=(...n)=>i.addTask&&i.addTask(...n))},"Add Tasks"),t[2]||(t[2]=e("h2",null,"Task List:",-1)),(l(!0),m(E,null,B(a.tasks,(n,p)=>(l(),m("div",{key:p,class:"task"},[e("span",{class:M({completed:n.completed})},r(n.description),3),e("button",{onClick:H=>i.toggleTask(p)},r(n.completed?"undo ":"complete"),9,V)]))),128))])]),_:1}),d(T,{week:"2",num:"4"})]),_:1})}const G=_(D,[["render",$],["__scopeId","data-v-24b5d43c"]]);export{G as default};
